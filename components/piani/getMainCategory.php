<?php

    include("../dbConnect.php");

    $conn = dbConnect();

    /*
    [{"id":"1","nome":"piani","foto":"img/quellocheè/dfisjf.png"},{.........}]
    */


    $result = $conn->query("SELECT * FROM categoriepiani");
    $outp = "["; 
    while($rs = $result->fetch_array(MYSQLI_ASSOC))
    {
        if ($outp != "[") 
            $outp .= ",";
        $outp .= '{"id":"'  .$rs["id"]. '",';
        $outp .= '"nome":"'. $rs["nome"]. '",';
        $outp .= '"foto":"'. $rs["foto"]. '"}';
    }
    $outp .= "]";
    
    dbClose($conn);

    echo $outp;

?>