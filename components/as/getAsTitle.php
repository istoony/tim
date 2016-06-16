<?php

    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");

    include("../dbConnect.php");

    $conn = dbConnect();
    
    $id = $_GET['id'];
    if($id!=0)
        $result = $conn->query("SELECT id, nome, sottocategoria 
                            FROM assistenza 
                            WHERE sottocategoria IN (SELECT id 
                                                     FROM sottocategorieassistenza 
                                                     WHERE categoria = $id) 
                            ORDER BY sottocategoria ASC");
    else
         $result = $conn->query("SELECT id, nome, sottocategoria 
                            FROM assistenza 
                            WHERE evidenza = 1
                            ORDER BY sottocategoria ASC");
    $outp = "[";
    while($rs = $result->fetch_array(MYSQLI_ASSOC))
    {
        if ($outp != "[") 
            $outp .= ",";
        $outp .= '{"id":"'  .$rs["id"]. '",';
        $outp .= '"titolo":"'. $rs["nome"]. '",'; 
        $outp .= '"sottocategoria":"'. $rs["sottocategoria"]. '"}';
    }
    $outp .= "]";
    
    dbClose($conn);

    echo $outp;

?>