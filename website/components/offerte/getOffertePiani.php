<?php

    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");

    include("../dbConnect.php");

    $conn = dbConnect();


    if(isset($_GET['id']))
        $id = $_GET['id'];
    else
        return;

    if($id == 0){

        $result = $conn->query("SELECT id, nome, pianotariffario.descrizione AS descrizionepiano, pianotariffario.prezzoscontato AS prezzo, pianotariffario.attivazionesconto AS descrizioneattivazione FROM pianotariffario WHERE prezzoscontato IS NOT NULL LIMIT 2");
    } else if($id==-1) {
        $result = $conn->query("SELECT id, categoria, nome, pianotariffario.descrizione AS descrizionepiano, pianotariffario.prezzoscontato AS prezzo, pianotariffario.attivazionesconto AS descrizioneattivazione FROM pianotariffario WHERE prezzoscontato IS NOT NULL AND categoria = 1 LIMIT 1");
    } else {
        $result = $conn->query("SELECT id, categoria, nome, pianotariffario.descrizione AS descrizionepiano, pianotariffario.prezzoscontato AS prezzo, pianotariffario.attivazionesconto AS descrizioneattivazione FROM pianotariffario WHERE prezzoscontato IS NOT NULL AND categoria = $id");
    }


    $outp = "[";
    while($rs = $result->fetch_array(MYSQLI_ASSOC))
    {
        if ($outp != "[")
            $outp .= ",";
        $outp .= '{"nome":"'. $rs["nome"]. '",';
        $outp .= '"descrizionepiano":"'. htmlentities(utf8_encode($rs["descrizionepiano"]), 0, "UTF-8"). '",';
        $outp .= '"id":"'. $rs["id"]. '",';
        $outp .= '"categoria":"'. $rs["categoria"]. '",';
        $outp .= '"prezzo":"'. $rs["prezzo"]. '",';
        $outp .= '"descrizioneattivazione":"'. htmlentities(utf8_encode($rs["descrizioneattivazione"]), 0, "UTF-8"). '"}';
    }
    $outp .= "]";

    dbClose($conn);

    echo $outp;

?>
