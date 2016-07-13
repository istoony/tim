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

        $result = $conn->query("SELECT offertepiani.id AS idofferta, nome, pianotariffario.descrizione AS descrizionepiano, offertepiani.prezzo AS prezzo, attivazione.id AS idattivazione, attivazione.descrizione AS descrizioneattivazione, offertepiani.foto AS idfoto FROM offertepiani, attivazione, pianotariffario WHERE offertepiani.attivazione = attivazione.id AND offertepiani.id=pianotariffario.id");
    } else  {
        $result = $conn->query("SELECT offertepiani.id AS idofferta, nome, pianotariffario.descrizione AS descrizionepiano, offertepiani.prezzo AS prezzo, attivazione.id AS idattivazione, attivazione.descrizione AS descrizioneattivazione, offertepiani.foto AS idfoto FROM offertepiani, attivazione, pianotariffario WHERE offertepiani.attivazione = attivazione.id AND offertepiani.id=pianotariffario.id LIMIT 2");
    }


    $outp = "[";
    while($rs = $result->fetch_array(MYSQLI_ASSOC))
    {
        if ($outp != "[")
            $outp .= ",";
        $outp .= '{"idofferta":"'  .$rs["idofferta"]. '",';
        $outp .= '"nome":"'. $rs["nome"]. '",';
        $outp .= '"descrizionepiano":"'. htmlentities(utf8_encode($rs["descrizionepiano"]), 0, "UTF-8"). '",';
        $outp .= '"prezzo":"'. $rs["prezzo"]. '",';
        $outp .= '"idattivazione":"'. $rs["idattivazione"]. '",';
        $outp .= '"idfoto":"'  .$rs["idfoto"]. '",';
        $outp .= '"descrizioneattivazione":"'. htmlentities(utf8_encode($rs["descrizioneattivazione"]), 0, "UTF-8"). '"}';
    }
    $outp .= "]";

    dbClose($conn);

    echo $outp;

?>
