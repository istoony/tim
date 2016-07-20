<?php
    
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json;");

    include("../dbConnect.php");

    if(!isset($_POST['id']))
        return;
    if(!isset($_POST['nome']))
        return;
    if(!isset($_POST['value']))
        return;
    if(!isset($_POST['review']))
        return;
    $now = date("Y-m-d H:i:s");

    $conn->query("INSERT INTO recensionedispositivo(id, iddispositivo, utente, valutazione, descrizione, data) VALUES (,$_POST[id],$_POST[nome],$_POST[value],$_POST[review],$now)");
    //print("INSERT INTO recensionedispositivo(iddispositivo, utente, valutazione, descrizione, data) VALUES ($_POST[id],'$_POST[nome]','$_POST[value]','$_POST[review]','$now')");

?>