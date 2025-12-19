<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
ini_set('display_errors', 0);
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

$host = 'localhost';
$db_name = 'u184589548_best';
$username = 'u184589548_best';
$password = 'Mail@best2025';

try {
    $conn = new PDO("mysql:host=" . $host . ";dbname=" . $db_name, $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    http_response_code(500);
    echo json_encode(["success" => false, "error" => "Connection failed: " . $e->getMessage()]);
    exit;
}

// Receive Data
$name = $_POST['name'] ?? ''; // Full name for backward compatibility
$first_name = $_POST['first_name'] ?? '';
$last_name = $_POST['last_name'] ?? '';
$age = $_POST['age'] ?? '';
$gender = $_POST['gender'] ?? '';
$blood_group = $_POST['blood_group'] ?? '';
$email = $_POST['email'] ?? '';
$phone = $_POST['phone'] ?? '';
$education = $_POST['education'] ?? ''; // Legacy field, might be empty now if not in form
$address = $_POST['address'] ?? '';
$district = $_POST['district'] ?? '';
$constituency = $_POST['constituency'] ?? '';
$pincode = $_POST['pincode'] ?? '';

$interests = $_POST['interests'] ?? '[]';
$availability = $_POST['availability'] ?? '[]';
$available_from = $_POST['available_from'] ?? '';
$available_to = $_POST['available_to'] ?? '';
$weekly_hours = $_POST['weekly_hours'] ?? '';
$has_volunteered = $_POST['has_volunteered'] ?? '';
$volunteer_details = $_POST['volunteer_details'] ?? '';

$motivation = $_POST['motivation'] ?? '';
$skills = $_POST['skills'] ?? '';
$other_info = $_POST['other_info'] ?? '';

$agreed_guidelines = $_POST['agreed_guidelines'] ?? '0';
$agreed_unpaid = $_POST['agreed_unpaid'] ?? '0';
$agreed_consent = $_POST['agreed_consent'] ?? '0';

// Handle Photo Upload
$photoPath = '';
if (isset($_FILES['photo']) && $_FILES['photo']['error'] === UPLOAD_ERR_OK) {
    $uploadDir = '../uploads/';
    if (!is_dir($uploadDir)) mkdir($uploadDir, 0755, true);
    
    $filename = uniqid() . '_' . basename($_FILES['photo']['name']);
    $targetPath = $uploadDir . $filename;
    
    if (move_uploaded_file($_FILES['photo']['tmp_name'], $targetPath)) {
        $photoPath = $targetPath;
    }
}

// Ensure database table exists
$conn->exec("CREATE TABLE IF NOT EXISTS members (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    education VARCHAR(255),
    address TEXT,
    photo_path VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)");

// Dynamic Schema Update: Add new columns if they don't exist
$columnsToAdd = [
    "first_name VARCHAR(255)", 
    "last_name VARCHAR(255)", 
    "age INT", 
    "gender VARCHAR(50)",
    "blood_group VARCHAR(10)",
    "district VARCHAR(100)",
    "constituency VARCHAR(100)",
    "pincode VARCHAR(20)",
    "interests TEXT", 
    "availability TEXT", 
    "available_from VARCHAR(100)", 
    "available_to VARCHAR(100)", 
    "weekly_hours VARCHAR(100)",
    "has_volunteered VARCHAR(10)", 
    "volunteer_details TEXT", 
    "motivation TEXT", 
    "skills TEXT", 
    "other_info TEXT",
    "agreed_guidelines TINYINT(1)", 
    "agreed_unpaid TINYINT(1)", 
    "agreed_consent TINYINT(1)"
];

foreach ($columnsToAdd as $colDef) {
    // Extract column name from definition (first word)
    $colName = explode(" ", $colDef)[0];
    try {
        $conn->query("SELECT $colName FROM members LIMIT 1");
    } catch (Exception $e) {
        $conn->exec("ALTER TABLE members ADD COLUMN $colDef");
    }
}

try {
    $stmt = $conn->prepare("INSERT INTO members (
        name, first_name, last_name, age, gender, blood_group, email, phone, address, 
        district, constituency, pincode, photo_path,
        interests, availability, available_from, available_to, weekly_hours,
        has_volunteered, volunteer_details, motivation, skills, other_info,
        agreed_guidelines, agreed_unpaid, agreed_consent
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");

    $stmt->execute([
        $name, $first_name, $last_name, $age, $gender, $blood_group, $email, $phone, $address, 
        $district, $constituency, $pincode, $photoPath,
        $interests, $availability, $available_from, $available_to, $weekly_hours,
        $has_volunteered, $volunteer_details, $motivation, $skills, $other_info,
        $agreed_guidelines, $agreed_unpaid, $agreed_consent
    ]);

    $memberId = $conn->lastInsertId();
    
    // Decoded interests/availability for email
    $interestsList = implode(", ", json_decode($interests, true) ?? []);
    $availabilityList = implode(", ", json_decode($availability, true) ?? []);

    // Send Admin Notification Email (Detailed)
    $headers = "From: mail@bestpuducherry.org\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    $adminMsg = "<h3>New Volunteer Registration</h3>";
    $adminMsg .= "<p><strong>Name:</strong> $first_name $last_name (Age: $age, Gender: $gender, Blood Group: $blood_group)</p>";
    $adminMsg .= "<p><strong>Contact:</strong> $email | $phone</p>";
    $adminMsg .= "<p><strong>Address:</strong><br>$address<br>$district, $constituency - $pincode</p>";
    $adminMsg .= "<p><strong>Interests:</strong> $interestsList</p>";
    $adminMsg .= "<p><strong>Availability:</strong> $availabilityList | $weekly_hours ($available_from to $available_to)</p>";
    $adminMsg .= "<p><strong>Volunteered Before:</strong> $has_volunteered ($volunteer_details)</p>";
    $adminMsg .= "<p><strong>Motivation:</strong> $motivation</p>";
    $adminMsg .= "<p><strong>Skills:</strong> $skills</p>";
    $adminMsg .= "<p><strong>Other Info:</strong> $other_info</p>";
    
    @mail("mail@bestpuducherry.org", "New Registration: $name", $adminMsg, $headers);

    // Send Welcome Email to User with Link to Card
    $cardLink = "https://" . $_SERVER['HTTP_HOST'] . "/api/card.php?id=" . $memberId; 

    $userMsg = "<h3>Welcome, $first_name!</h3>";
    $userMsg .= "<p>Thank you for registering as a volunteer with BEST Puducherry.</p>";
    $userMsg .= "<p>You can view and download your Digital Membership Card here:</p>";
    $userMsg .= "<p><a href='$cardLink' style='background: #0284c7; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;'>View Membership Card</a></p>";
    
    @mail($email, "Welcome to Best Puducherry! Your Membership Card", $userMsg, $headers);
    
    echo json_encode([
        "success" => true, 
        "message" => "Registered successfully!",
        "member_id" => $memberId 
    ]);

} catch(PDOException $e) {
    if ($e->getCode() == 23000) {
        // Since we allow updates or maybe duplicate emails? For now, keep unique check or relax it. 
        // User didn't ask to remove unique constraint, so we report error.
        http_response_code(400);
        echo json_encode(["success" => false, "error" => "Email or Phone already registered."]);
    } else {
        http_response_code(500);
        echo json_encode(["success" => false, "error" => "Database error: " . $e->getMessage()]);
    }
}
?>
