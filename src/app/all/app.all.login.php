<?php
session_start() ; 
$_SESSION["session"] = "on" ; 
 
header("Access-Control-Allow-Origin: *");

$model= $_POST["model_x"] ;
echo $model ; 
$mail = $_POST["mail"];
$name= $_POST["name"];
$password_  = $_POST["password"];
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "model";

$conn = new mysqli($servername, $username, $password, $dbname);

if($model=="ion")
{
    // Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = 'SELECT * FROM `model_user` WHERE `model_user_mail` ="'.$mail.'"';
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo $row["model_user_mail"];
    }
} else {
  

    
    // Create connection
    $conn2 = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($conn2->connect_error) {
        die("Connection failed: " . $conn2->connect_error);
    }
    
    $sql2 = "INSERT INTO model_user (model_user_mail,model_user_name,model_user_password)
    VALUES ('$mail', '$name', '$password_')";
    
    if ($conn2->query($sql2) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql2 . "<br>" . $conn2->error;
    }
    
    $conn2->close();
}
$conn->close();

}
?>