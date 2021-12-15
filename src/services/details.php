<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: X-Requested-With,content-type');
header('Access-Control-Allow-Credentials: true');
header('Content-Type: application/json');

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "db-characters";
    $conn = mysqli_connect($servername, $username, $password, $dbname);

    if (!$conn) {
        die("Connection failed: " . mysql_connect_error());
    }

    $obj = array();

    $id = $_GET['id'];

    $sql = "select * from chars where id ={$id}";
    $result = $conn->query($sql);
    
    
    if($row = mysqli_fetch_assoc($result)){
        $obj = $row;
    }
    
 
    echo json_encode($obj);
?>