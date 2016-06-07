<?php

    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");

    function dbConnect()
    {

        $conn = new mysqli("db4free.net:3306/guidoantoniomatt", "guidoantoniomatt", "guidoantoniomatteo", "guidoantoniomatt");

        if (mysqli_connect_errno()) 
        { //verify connection
            echo "Error to connect to DBMS: ".mysqli_connect_error(); //notify error
            exit(); //do nothing else 
        }
        return $conn;
    }

    function dbClose($conn)
    {
        $conn->close();
    }
?>