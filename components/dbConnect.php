<?php

    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");

    function dbConnect()
    {

        $conn = new mysqli("localhost", "guidoantoniomatteo", "", "my_guidoantoniomatteo");
        //$conn = new mysqli("localhost", "root", "profligo", "tim");
        //A toony serve questa
        //$conn = new mysqli("localhost", "root", "", "tim");

        if (mysqli_connect_errno()) 
        { //verify connection
            echo "Error to connect to DBMS: ".mysqli_connect_error(); //notify error
            exit(); //do nothing else 
        }
        //echo "ok";
        return $conn;
    }

    function dbClose($conn)
    {
        $conn->close();
    }
    //dbConnect();
?>