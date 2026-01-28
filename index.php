<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstName = htmlspecialchars($_POST["firstName"]);
    $lastName  = htmlspecialchars($_POST["lastName"]);
    $email     = htmlspecialchars($_POST["email"]);
    $message   = htmlspecialchars($_POST["message"]);

    $to      = "maksyga1@gmail.com"; // куди надсилаються листи
    $subject = "New Contact Form Message";
    $body    = "Name: $firstName $lastName\n";
    $body   .= "Email: $email\n\n";
    $body   .= "Message:\n$message\n";

    // обов'язково ставимо email від твого домену!
    $headers  = "From: no-reply@ТВІЙДОМЕН.com\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    if (mail($to, $subject, $body, $headers)) {
        echo "<h2>✅ Thank you, your message has been sent!</h2>";
    } else {
        echo "<h2>❌ Sorry, something went wrong. Try again.</h2>";
    }
}
?>