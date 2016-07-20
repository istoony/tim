<?php

    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");

    include("../dbConnect.php");

    $conn = dbConnect();

    $result = $conn->query("SELECT id, nome, foto, descrizione FROM progetti");
    $outp = "[";
      while($rs = $result->fetch_array(MYSQLI_ASSOC))
    {
        if ($outp != "[")
            $outp .= ",";
        $outp .= '{"id":"'  .$rs["id"]. '",';
        $outp .= '"nome":"'  .$rs["nome"]. '",';
        $outp .= '"foto":"'  .$rs["foto"]. '",';
        $outp .= '"descrizione":"'. htmlentities(utf8_encode($rs["descrizione"]), 0, "UTF-8"). '"}';

    }
    $outp .= "]";

    dbClose($conn);

    echo $outp;

?>
