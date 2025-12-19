<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);

$name = $input['name'] ?? '';
$email = $input['email'] ?? '';
$message = $input['message'] ?? '';

// Send Email to Admin
$headers = "From: mail@bestpuducherry.org\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

$admin_email = "mail@bestpuducherry.org";
$subject = "New Contact Form Submission from $name";
$msg = "<h3>New Message</h3>
        <p><strong>Name:</strong> $name</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Message:</strong></p>
        <p>$message</p>";

if (mail($admin_email, $subject, $msg, $headers)) {
    echo json_encode(["success" => true, "message" => "We have received your message!"]);
} else {
    http_response_code(500);
    echo json_encode(["success" => false, "error" => "Failed to send email"]);
}
?>
