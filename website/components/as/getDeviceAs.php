<?php
    
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json;");

    include("../dbConnect.php");

    $conn = dbConnect();

    if(isset($_GET['id']))
        $id = $_GET['id'];
    else
        return;
    $result = $conn->query("SELECT dispositivo.nome, dispositivo.id, dispositivofoto.path, assistenza.nome AS astitle 
                            FROM assistenzadispositivi, dispositivo, dispositivofoto, assistenza 
                            WHERE idassistenza = $id AND dispositivo.id = assistenzadispositivi.iddispositivo AND dispositivofoto.id_dispositivo = dispositivo.id AND assistenza.id = assistenzadispositivi.idassistenza
                            GROUP BY dispositivo.id");
    $tot = array();
    while($rs = $result->fetch_array(MYSQLI_ASSOC))
        $tot[]= $rs;
    dbClose($conn);
    echo json_encode($tot);

?>