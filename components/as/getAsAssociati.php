<?php
    
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json;");

    include("../dbConnect.php");

    $conn = dbConnect();

    if(isset($_POST['tabella']))
        $tabella = $_POST['tabella'];  
    else
        return;
    if(isset($_POST['id']))
        $id = $_POST['id'];
    else
        return;
    if($tabella != "relazionepianiassistenza" && $tabella!="assistenzadispositivi")
        return;
    $result = $conn->query("SELECT nome,id FROM $tabella, assistenza WHERE idassistenza = assistenza.id AND iddispositivo = $id");
    $tot = array();
    while($rs = $result->fetch_array(MYSQLI_ASSOC))
        $tot[]= $rs;
    dbClose($conn);
    echo json_encode($tot);

?>