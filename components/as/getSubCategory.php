<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");

    include("../dbConnect.php");

    $conn = dbConnect();

    if(isset($_GET['id']))
        $id_main_category = $_GET['id'];
    else
        return;
    if($id_main_category!=0)
        $q = "SELECT sottocategorieassistenza.*, 
                     categorieassistenza.nome AS catnome, 
                     categorieassistenza.id AS catid  
              FROM sottocategorieassistenza, categorieassistenza 
              WHERE categoria = $id_main_category AND 
                     sottocategorieassistenza.categoria = categorieassistenza.id";
    else
        $q ="SELECT DISTINCT sottocategorieassistenza.*, categorieassistenza.nome AS catnome, categorieassistenza.id AS catid FROM assistenza, sottocategorieassistenza, categorieassistenza WHERE evidenza = 1 AND sottocategorieassistenza.id = assistenza.sottocategoria AND sottocategorieassistenza.categoria = categorieassistenza.id";
        $result = $conn->query($q);
    $outp = "[";
    while($rs = $result->fetch_array(MYSQLI_ASSOC))
    {
        if ($outp != "[") 
            $outp .= ",";
        $outp .= '{"id":"'  .$rs["id"]. '",';
        $outp .= '"titolo":"'. $rs["nome"]. '",'; 
        $outp .= '"catid":"'. $rs["catid"]. '",'; 
        $outp .= '"catnome":"'. $rs["catnome"]. '"}';
    }
    $outp .= "]";
    
    dbClose($conn);

    echo $outp;

?>