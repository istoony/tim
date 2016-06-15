<?php

    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");

    include("../dbConnect.php");

    $conn = dbConnect();
    if(isset($_GET['id']))
        $id = $_GET['id'];
    else
        return;

     $result = $conn->query("SELECT assistenza.*, sottocategorieassistenza.categoria AS categoria FROM assistenza, sottocategorieassistenza WHERE assistenza.sottocategoria = sottocategorieassistenza.id AND assistenza.id = $id");

    $num_faq = $conn->query("SELECT count(*) AS contatore FROM faqsuassistenza WHERE idassistenza = $id");
    
    $num_dev = $conn->query("SELECT count(*) AS contatore FROM assistenzadispositivi WHERE idassistenza = $id");

    $outp = "[";
    while($rs = $result->fetch_array(MYSQLI_ASSOC))
    {
        if ($outp != "[") 
            $outp .= ",";
        $outp .= '{"id":"'. $id .'",';
        if($num = $num_faq->fetch_array(MYSQLI_ASSOC))
            $outp .= '"numfaq":"'. $num['contatore'] .'",';
        if($num = $num_dev->fetch_array(MYSQLI_ASSOC))
            $outp .= '"numdev":"'. $num['contatore'] .'",';
        $outp .= '"categoria":"'. $rs["categoria"].'"}';
    }
    $outp .= "]";
    dbClose($conn);

    echo $outp;

?>