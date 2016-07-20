<?php
    
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json;");

    include("../dbConnect.php");

    $conn = dbConnect();

    if(isset($_GET['id']))
        $id = $_GET['id'];
    else
        return;
    if(!isset($_GET['param']))
       return;
    else if($_GET['param'] == "smartlifedispositivi")
       $attname = "iddispositivo";
    else if($_GET['param'] == "relazionepianismartlife")
       $attname = "idpiano";
    $result = $conn->query("SELECT smartlife.nome, smartlife.id FROM smartlife, $_GET[param] WHERE $attname = $id AND smartlife.id = $_GET[param].idsmartlife LIMIT 0,6");
    $tot = array();
    while($rs = $result->fetch_array(MYSQLI_ASSOC))
        $tot[]= $rs;

    dbClose($conn);
    echo json_encode($tot);

?>