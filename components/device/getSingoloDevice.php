<?php
    
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json;");

    include("../dbConnect.php");

    $conn = dbConnect();

    if(isset($_GET['id']))
        $id = $_GET['id'];
    else
        return;
    $result = $conn->query("SELECT dispositivo.id, dispositivo.nome, dispositivo.descrizione, dispositivo.id_categoria, dispositividescrizione.titolo AS titolo,
dispositividescrizione.descrizione AS testodescrizione, dispositivofoto.path
FROM dispositivo, marcadispositivo, dispositividescrizione, dispositivosudescrizione, dispositivofoto 
WHERE dispositivo.id = $id AND marcadispositivo.id = dispositivo.id_marca AND dispositivosudescrizione.id_descrizione = dispositividescrizione.id AND dispositivo.id = dispositivosudescrizione.id_dispositivo AND dispositivofoto.id_dispositivo = dispositivo.id");
    $tot = array();
    while($rs = $result->fetch_array(MYSQLI_ASSOC))
    {
        $rs["descrizione"] = htmlentities(utf8_encode($rs["descrizione"]), 0, "UTF-8");
        $tot[]= $rs;
    }
    dbClose($conn);
    echo json_encode($tot);

?>