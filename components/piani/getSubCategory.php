<?php

    include("../dbConnect.php");

    $conn = dbConnect();

    if(isset($_GET['id']))
        $id_main_category = $_GET['id'];
    else
        return;
    $result = $conn->query("SELECT * FROM sottocategorieassistenza WHERE categoria = $id_main_category");
    $outp = "[";
    while($rs = $result->fetch_array(MYSQLI_ASSOC))
    {
        if ($outp != "[") 
            $outp .= ",";
        $outp .= '{"id":"'  .$rs["id"]. '",';
        $outp .= '"titolo":"'. $rs["nome"]. '",'; 
        $outp .= '"foto":"'. $rs["foto"]. '"}';
    }
    $outp .= "]";
    
    dbClose($conn);

    echo $outp;

?>