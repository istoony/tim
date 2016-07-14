<?php
    
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json;");

    include("../dbConnect.php");

    $conn = dbConnect();

    if(isset($_GET['id']))
        $id = $_GET['id'];
    else
        return;
    $result = $conn->query("SELECT dispositivo.id, dispositivo.nome, dispositivofoto.path, marcadispositivo.nome AS marca
FROM dispositivicorrelati, dispositivo, dispositivofoto, marcadispositivo 
WHERE iddispositivo = $id AND iddispositivocorrelato = dispositivo.id AND dispositivo.id = dispositivofoto.id_dispositivo AND dispositivo.id_marca = marcadispositivo.id GROUP BY dispositivo.id");
    $tot = array();
    while($rs = $result->fetch_array(MYSQLI_ASSOC))
        $tot[]= $rs;
    /*
    *   id, nome, path, marca
    */
    dbClose($conn);
    echo json_encode($tot);

?>