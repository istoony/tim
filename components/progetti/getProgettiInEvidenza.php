<?php

    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");

    include("../dbConnect.php");

    $conn = dbConnect();

    $result = $conn->query("SELECT progetti.id AS idprogetto, nome, foto, progetti.descrizione AS descrizioneprogetto, progettiinevidenza.descrizione AS descrizioneevidenza FROM progetti, progettiinevidenza WHERE progetti.id = progettiinevidenza.idprogetto");
    $outp = "[";
      while($rs = $result->fetch_array(MYSQLI_ASSOC))
    {
        //$rs["descrizioneevidenza"]=str_replace("'", "\'", $rs["descrizioneevidenza"]);
        if ($outp != "[")
            $outp .= ",";
        $outp .= '{"idprogetto":"'  .$rs["idprogetto"]. '",';
        $outp .= '"nome":"'  .$rs["nome"]. '",';
        $outp .= '"foto":"'  .$rs["foto"]. '",';
        $outp .= '"descrizioneprogetto":"'. htmlentities(utf8_encode($rs["descrizioneprogetto"]), 0, "UTF-8"). '",';
        $outp .= '"descrizioneevidenza":"'. htmlentities(utf8_encode($rs["descrizioneevidenza"]), 0, "UTF-8"). '"}';

    }
    $outp .= "]";

    dbClose($conn);

    echo $outp;

?>
