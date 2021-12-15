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

    $sql = "select * from chars";
    $result = $conn->query($sql);
    
    if (mysqli_num_rows($result)) {
        while($row = mysqli_fetch_assoc($result)){
            $obj[] = $row;
        }
    }else{
        $obj->error = "0 results";
    }
 
    echo json_encode($obj);
?>