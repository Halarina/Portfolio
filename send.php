<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstName = htmlspecialchars(trim($_POST["firstName"]));
    $lastName  = htmlspecialchars(trim($_POST["lastName"]));
    $email     = htmlspecialchars(trim($_POST["email"]));
    $message   = htmlspecialchars(trim($_POST["message"]));

    $to = "maksyga1@gmail.com"; // своя пошта
    $subject = "New Contact Form Message";
    $body = "Name: $firstName $lastName\nEmail: $email\n\nMessage:\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "<h2>✅ Thank you, your message has been sent!</h2>";
    } else {
        echo "<h2>❌ Sorry, something went wrong. Try again.</h2>";
    }
}
?>