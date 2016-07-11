<?php
    
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json;");

    include("../dbConnect.php");

    $conn = dbConnect();

    if(isset($_GET['id']))
        $id_main_category = $_GET['id'];
    else
        return;
    $result = $conn->query("SELECT pianotariffario.*, categoriepiani.nome AS categorianome FROM pianotariffario, categoriepiani WHERE pianotariffario.id = $id_main_category AND categoriepiani.id = pianotariffario.categoria");
    $outp = "[";
    while($rs = $result->fetch_array(MYSQLI_ASSOC))
    {
        if ($outp != "[") 
            $outp .= ",";
        $outp .= '{"id":"'  .$rs["id"]. '",';
        $outp .= '"titolo":"'. $rs["nome"]. '",'; 
        $outp .= '"categorianome":"'. $rs["categorianome"]. '",'; 
        $outp .= '"prezzo":"'. $rs["prezzo"] . '",'; 
        $outp .= '"foto":"'. $rs["foto"]. '"}';
    }
    $outp .= "]";
    
    dbClose($conn);

    echo $outp;

?>