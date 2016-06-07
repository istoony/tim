<?php

    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");

    function dbConnect()
    {

        $conn = new mysqli("sql8.freemysqlhosting.net", "sql8122761", "mJ9xC5JtvW", "sql8122761");

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