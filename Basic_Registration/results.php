<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstName = htmlspecialchars($_POST['firstname']);
    $middleName = htmlspecialchars($_POST['middlename']);
    $lastName = htmlspecialchars($_POST['lastname']);
    $batch = htmlspecialchars($_POST['batch']);
    $tech = htmlspecialchars($_POST['technology']);
    $id = htmlspecialchars($_POST['id']);
    $contact = htmlspecialchars($_POST['contactnumber']);
} else {
    header("Location: index.php");
    exit();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Result</title>
</head>
<body>
    <h1>Registration Details</h1>
    <p><strong>First Name:</strong> <?= $firstName ?></p>
    <p><strong>Middle Name:</strong> <?= $middleName ?></p>
    <p><strong>Last Name:</strong> <?= $lastName ?></p>
    <p><strong>Batch:</strong> <?= $batch ?></p>
    <p><strong>Technology:</strong> <?= $tech ?></p>
    <p><strong>ID Number:</strong> <?= $id ?></p>
    <p><strong>Contact Number:</strong> <?= $contact ?></p>
</body>
</html>