<?php
    
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json;");

    include("../dbConnect.php");

    $conn = dbConnect();

    if(isset($_GET['id']))
        $id_main_category = $_GET['id'];
    else
        return;
    $result = $conn->query("SELECT pianotariffario.*, categoriepiani.fotogrande AS fotocategoria, categoriepiani.nome AS categorianome, categoriepiani.descrizione AS descrizione FROM pianotariffario, categoriepiani WHERE categoria = $id_main_category AND categoriepiani.id = pianotariffario.categoria");
    $outp = "[";
    while($rs = $result->fetch_array(MYSQLI_ASSOC))
    {
        if ($outp != "[") 
            $outp .= ",";
        $outp .= '{"id":"'  .$rs["id"]. '",';
        $outp .= '"titolo":"'. $rs["nome"]. '",'; 
        $outp .= '"fotogrande":"'. $rs["fotocategoria"]. '",'; 
        $outp .= '"descrizione":"'. $rs["descrizione"]. '",'; 
        $outp .= '"categorianome":"'. $rs["categorianome"]. '",'; 
        $outp .= '"prezzo":"'. $rs["prezzo"] . '",'; 
        $outp .= '"foto":"'. $rs["foto"]. '"}';
    }
    $outp .= "]";
    
    dbClose($conn);

    echo $outp;

?>