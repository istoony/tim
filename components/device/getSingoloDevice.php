<?php
    
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json;");

    include("../dbConnect.php");

    $conn = dbConnect();

    if(isset($_GET['id']))
        $id = $_GET['id'];
    else
        return;
    $result = $conn->query("SELECT dispositivo.id, dispositivo.nome, dispositivo.descrizione, dispositivo.id_categoria, marcadispositivo.nome AS marca, prezzo, prezzoscontato FROM dispositivo, marcadispositivo
WHERE dispositivo.id = $id AND marcadispositivo.id = dispositivo.id_marca");
    $tot = array();
    while($rs = $result->fetch_array(MYSQLI_ASSOC))
    {
        $rs["descrizione"] = htmlentities(utf8_encode($rs["descrizione"]), 0, "UTF-8");
        $tot[]= $rs;
    }
    /*
    *
    *id, nome, descrizione, id_categoria, marca, prezzo, prezzoscontato
    *[N] Titolo, testodescrizione
    */
    dbClose($conn);
    echo json_encode($tot);

?>