<?php
    
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json;");

    include("../dbConnect.php");

    $conn = dbConnect();

    if(isset($_GET['id']))
        $id = $_GET['id'];
    else
        return;
    $result = $conn->query("SELECT dispositivofoto.path FROM dispositivo, dispositivofoto WHERE dispositivo.id = $id AND dispositivofoto.id_dispositivo = dispositivo.id");
    $tot = array();
    while($rs = $result->fetch_array(MYSQLI_ASSOC))
        $tot[]= $rs;
    /*
    *   path
    */
    dbClose($conn);
    echo json_encode($tot);

?>