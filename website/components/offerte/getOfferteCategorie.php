<?php

    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");

    include("../dbConnect.php");

    $conn = dbConnect();

    $result = $conn->query("SELECT * FROM offertefoto");
    $outp = "[";
    while($rs = $result->fetch_array(MYSQLI_ASSOC))
    {
        if ($outp != "[")
            $outp .= ",";
        $outp .= '{"id":"'  .$rs["id"]. '",';
        $outp .= '"foto":"'. $rs["foto"]. '",';
        $outp .= '"descrizione":"'. $rs["descrizione"]. '"}';
    }
    $outp .= "]";

    dbClose($conn);

    echo $outp;

?>
