<?php
    
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json;");

    include("../dbConnect.php");

    $conn = dbConnect();

    if(isset($_GET['id']))
        $id = $_GET['id'];
    else
        return;
    $result = $conn->query("SELECT dispositivo.id, dispositivo.nome, dispositivo.id_categoria, dispositivo.specifiche, marcadispositivo.nome AS marca
FROM dispositivo, marcadispositivo 
WHERE dispositivo.id_marca = marcadispositivo.id AND dispositivo.id = $id");
    $tot = array();
    while($rs = $result->fetch_array(MYSQLI_ASSOC))
    {
        $rs["specifiche"] = htmlentities(utf8_encode($rs["specifiche"]), 0, "UTF-8");
        $tot[]= $rs;
    }
    /*
    *   id, nome, specifiche, id_categoria, marca
    */
    dbClose($conn);
    echo json_encode($tot);

?>