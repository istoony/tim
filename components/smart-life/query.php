<?php
    
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json;");

    include("../dbConnect.php");

    $conn = dbConnect();

    if(isset($_GET['request']))
        $request = $_GET['request'];
    else
        return;
    
        
    switch ($request) {
    	case "smartLifeCategories":
    		$query = "SELECT * FROM `categoriesmartlife`";
    		break;
    }
        
    $result = $conn->query($query);
    
	$resultArray = array();
	while($row =mysqli_fetch_assoc($result)) {
		$resultArray[] = $row;
	}
	echo json_encode($resultArray);
	
	
    dbClose($conn);
   
?>