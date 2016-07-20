<?php
    
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json;");

    include("../dbConnect.php");

    $conn = dbConnect();

    if(isset($_GET['id']))
        $id = $_GET['id'];
    else
        return;
    $result = $conn->query("SELECT dispositividescrizione.*
FROM dispositividescrizione, dispositivosudescrizione WHERE dispositivosudescrizione.id_descrizione = dispositividescrizione.id AND $id = dispositivosudescrizione.id_dispositivo");
    $tot = array();
    while($rs = $result->fetch_array(MYSQLI_ASSOC))
    {
        $rs["descrizione"] = htmlentities(utf8_encode($rs["descrizione"]), 0, "UTF-8");
        $tot[]= $rs;
    }
    /*
    *   titolo, descrizione
    */
    dbClose($conn);
    echo json_encode($tot);

?>