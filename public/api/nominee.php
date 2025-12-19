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
    echo json_encode(["success" => false, "error" => "Connection failed"]);
    exit;
}

// Get JSON Input
$input = json_decode(file_get_contents('php://input'), true);

$name = $input['name'] ?? '';
$email = $input['email'] ?? '';
$phone = $input['phone'] ?? '';
$nominated_by = $input['nominated_by'] ?? '';
$relationship = $input['relationship'] ?? '';
$award_category = $input['award_category'] ?? '';
$organization = $input['organization'] ?? '';
$reason = $input['reason'] ?? '';

$conn->exec("CREATE TABLE IF NOT EXISTS nominees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    nominated_by VARCHAR(255),
    relationship VARCHAR(255),
    award_category VARCHAR(255),
    organization VARCHAR(255),
    reason TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)");

try {
    $stmt = $conn->prepare("INSERT INTO nominees (name, email, phone, nominated_by, relationship, award_category, organization, reason) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->execute([$name, $email, $phone, $nominated_by, $relationship, $award_category, $organization, $reason]);

    // Send Email to Nominee
    $headers = "From: mail@bestpuducherry.org\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    
    $subject = "Award Nomination Received - BEST Puducherry";
    $message = "<h3>Hello $name,</h3>
                <p>Congratulations! You have been nominated for the <strong>$award_category</strong> by <strong>$nominated_by</strong>.</p>
                <p><strong>Reason:</strong></p><p><em>\"$reason\"</em></p>
                <p>We will review your nomination soon.</p>";
    
    @mail($email, $subject, $message, $headers);
    
    // Send to Admin
    $admin_email = "mail@bestpuducherry.org";
    $admin_msg = "<h3>New Award Nomination</h3>
                  <p><strong>Nominee:</strong> $name</p>
                  <p><strong>Category:</strong> $award_category</p>
                  <p><strong>Nominated By:</strong> $nominated_by</p>
                  <p><strong>Reason:</strong> $reason</p>";
    
    @mail($admin_email, "New Nomination: $award_category", $admin_msg, $headers);

    echo json_encode(["success" => true, "message" => "Nomination submitted successfully!"]);

} catch(PDOException $e) {
    http_response_code(500);
    echo json_encode(["success" => false, "error" => "Database error: " . $e->getMessage()]);
}
?>
