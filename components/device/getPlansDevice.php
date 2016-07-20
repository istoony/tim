<?php
    
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json;");

    include("../dbConnect.php");

    $conn = dbConnect();

    if(isset($_GET['id']))
        $id = $_GET['id'];
    else
        return;
    $result = $conn->query("SELECT pianotariffario.nome AS nome, pianotariffario.chiamate AS chiamate, pianotariffario.messaggi AS messaggi, pianotariffario.internet AS internet, pianotariffario.id AS id, pianotariffario.prezzo AS prezzo, pianotariffario.prezzoscontato AS prezzoscontato, dispositivo.nome AS nomedevice, marcadispositivo.nome AS marca
                            FROM dispositivo, dispositivisupiano, pianotariffario, marcadispositivo
                            WHERE dispositivo.id = dispositivisupiano.iddispositivo AND pianotariffario.id = dispositivisupiano.idpiano AND marcadispositivo.id = dispositivo.id_marca AND dispositivo.id = $id");
    $tot = array();
    while($rs = $result->fetch_array(MYSQLI_ASSOC))
    {
        $tot[]= $rs;
    }
    /*
    *   nome, chiamate, messaggi, internet, id, prezzo, devicenome, marca
    */
    dbClose($conn);
    echo json_encode($tot);

?>