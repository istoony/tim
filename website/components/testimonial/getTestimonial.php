<?php
    
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");

    include("../dbConnect.php");

    $conn = dbConnect();

    $result = $conn->query("SELECT * FROM testimonial");
    $outp = "[";
    while($rs = $result->fetch_array(MYSQLI_ASSOC))
    {
        if ($outp != "[") 
            $outp .= ",";
        $outp .= '{"id":"'  .$rs["id"]. '",';
        $outp .= '"nome":"'. $rs["nome"]. '",'; 
        $outp .= '"frase1":"'. htmlentities(utf8_encode($rs["frase1"]), 0, "UTF-8"). '",';
        $outp .= '"frase2":"'. htmlentities(utf8_encode($rs["frase2"]), 0, "UTF-8"). '",';
        $outp .= '"foto":"'. $rs["foto"]. '",';
        $outp .= '"linkspot":"'. $rs["linkspot"]. '",';
        $outp .= '"linkintervista":"'. $rs["linkintervista"]. '"}';
    }
    $outp .= "]";
    
    dbClose($conn);

    echo $outp;

?>