<?php
    
    header("Access-Control-Allow-Origin: *");

    include("../dbConnect.php");
    $conn = dbConnect();
    /*
    if(!isset($_GET['id']))
        return;
    if(!isset($_GET['nome']))
        return;
    if(!isset($_GET['value']))
        return;
    if(!isset($_GET['review']))
        return;*/
    $now = date("Y-m-d H:i:s");
    //print("INSERT INTO recensionedispositivo(iddispositivo, utente, valutazione, descrizione, data) VALUES ($_GET[id],'$_GET[nome]',$_GET[value],'$_GET[review]','$now')");
    $result = $conn->query("INSERT INTO recensionedispositivo(iddispositivo, utente, valutazione, descrizione, data) VALUES ($_GET[id],'$_GET[nome]',$_GET[value],'$_GET[review]','$now')");
    //print("INSERT INTO recensionedispositivo(iddispositivo, utente, valutazione, descrizione, data) VALUES ($_GET[id],'$_GET[nome]','$_GET[value]','$_GET[review]','$now')");
    dbClose($conn);
    echo('[{"result":"true"}]');
?>