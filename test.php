<?php
$servername = "localhost";
$database = "databasetest"; 
$username = "JakeB";
$password = "Pi3.141592";
$sql = "mysql:host=$servername;dbname=$database;";
$dsn_Options = [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION];

try { 
  $my_Db_Connection = new PDO($sql, $username, $password, $dsn_Options);
  echo "Connected successfully";
} catch (PDOException $error) {
  echo 'Connection error: ' . $error->getMessage();
}

$first_Name = $_POST['txtName'];
$email = $_POST['txtEmail'];

$my_Insert_Statement = $my_Db_Connection->prepare("INSERT INTO people (nameTest, email) VALUES (:first_name, :email)");

$my_Insert_Statement->bindParam(':first_name', $first_Name);
$my_Insert_Statement->bindParam(':email', $email);

if ($my_Insert_Statement->execute()) {
  echo "New record created successfully";
} else {
  echo "Unable to create record";
}

?>