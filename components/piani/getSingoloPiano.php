<?php
    
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json;");

    include("../dbConnect.php");

    $conn = dbConnect();

    if(isset($_GET['id']))
        $id = $_GET['id'];
    else
        return;
    $result = $conn->query("SELECT pianotariffario.*, descrizionepiano.* FROM pianotariffario, descrizionepiano WHERE pianotariffario.id=$id AND descrizionepiano.piano = pianotariffario.id");
    $tot = array();
    while($rs = $result->fetch_array(MYSQLI_ASSOC))
    {
        if ($outp != "[") 
            $outp .= ",";
        //$rs["descrizione"] = str_replace("\n","<br/>", $rs["descrizione"]);
        //$rs["descrizione"] = str_replace("'","\'", $rs["descrizione"]);
        $rs["descrizione"] = htmlentities(utf8_encode($rs["descrizione"]), 0, "UTF-8");
        
        $tot[]= $rs;
    }
    dbClose($conn);
    echo json_encode($tot);

?>