<?php
    /**
    *   CAPISCE SE CI SONO FAQ O DISPOSITIVI PER QUELL'AS
    *   STAMPA POI IL MENU GRIGIO
    *
    *
    */
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");

    include("../dbConnect.php");

    $conn = dbConnect();
    if(isset($_GET['id']))
        $id = $_GET['id'];
    else
        return;
    $result = $conn->query("SELECT faqassistenza.nome AS nome, faqassistenza.descrizione AS descrizione, faqassistenza.foto AS foto, assistenza.nome AS titolo_assistenza FROM faqassistenza, faqsuassistenza, assistenza WHERE assistenza.id = faqsuassistenza.idassistenza AND faqassistenza.id = faqsuassistenza.idfaq AND faqsuassistenza.idassistenza = $id");

    $outp = "[";
    while($rs = $result->fetch_array(MYSQLI_ASSOC))
    {
        if ($outp != "[") 
            $outp .= ",";
        $outp .= '{"titolo":"'  .$rs["nome"]. '",';
        $rs['descrizione'] = str_replace("\n","<br/>", $rs['descrizione']);
        $outp .= '"descrizione":"'. htmlentities(utf8_encode($rs["descrizione"]), 0, "UTF-8") .'",';
        $outp .= '"titolo_assistenza":"'. htmlentities(utf8_encode($rs["titolo_assistenza"]), 0, "UTF-8") .'",';
        $outp .= '"foto":"'. $rs["foto"]. '"}';
    }
    $outp .= "]";
    dbClose($conn);

    echo $outp;

?>