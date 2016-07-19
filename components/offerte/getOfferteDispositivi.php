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

        $result = $conn->query("SELECT dispositivo.id AS dispositivo, nome, path, prezzoscontato FROM dispositivo, dispositivofoto WHERE prezzoscontato IS NOT NULL AND dispositivo.id = dispositivofoto.id_dispositivo GROUP BY dispositivo.id");
    } else if(id==-1) {
        $result = $conn->query("SELECT dispositivo.id AS dispositivo, nome, path, prezzoscontato FROM dispositivo, dispositivofoto WHERE prezzoscontato IS NOT NULL AND dispositivo.id = dispositivofoto.id_dispositivo GROUP BY dispositivo.id LIMIT 3");
    } else  {
        $result = $conn->query("SELECT dispositivo.id AS dispositivo, nome, path, prezzoscontato FROM dispositivo, dispositivofoto WHERE prezzoscontato IS NOT NULL AND dispositivo.id = dispositivofoto.id_dispositivo GROUP BY dispositivo.id LIMIT 2");
    }


    $outp = "[";
    while($rs = $result->fetch_array(MYSQLI_ASSOC))
    {
        if ($outp != "[")
            $outp .= ",";
        $outp .= '{"nome":"'. $rs["nome"]. '",';
        $outp .= '"path":"'. $rs["path"]. '",';
        $outp .= '"dispositivo":"'. $rs["dispositivo"]. '",';
        $outp .= '"prezzoscontato":"'. $rs["prezzoscontato"]. '"}';
    }
    $outp .= "]";

    dbClose($conn);

    echo $outp;

?>
