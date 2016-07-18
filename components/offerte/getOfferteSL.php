<?php

    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");

    include("../dbConnect.php");

    $conn = dbConnect();


    if(isset($_GET['id']))
        $id = $_GET['id'];
    else
        return;

    if($id == 0){

        $result = $conn->query("SELECT nome, prezzoscontato, attivazionescontato, id FROM smartlife WHERE prezzoscontato IS NOT NULL LIMIT 2");
    } else  {
        $result = $conn->query("SELECT nome, prezzoscontato, attivazionescontato, id FROM smartlife WHERE prezzoscontato IS NOT NULL");
    }


    $outp = "[";
    while($rs = $result->fetch_array(MYSQLI_ASSOC))
    {
        if ($outp != "[")
            $outp .= ",";
        $outp .= '{"nome":"'. $rs["nome"]. '",';
        $outp .= '"prezzoscontato":"'. $rs["prezzoscontato"]. '",';
        $outp .= '"attivazionescontato":"'. $rs["attivazionescontato"]. '",';
        $outp .= '"id":"'. $rs["id"]. '"}';
    }
    $outp .= "]";

    dbClose($conn);

    echo $outp;

?>
