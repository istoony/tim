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
    	case "smartLifeMainCategories":
    		$query = "SELECT * FROM `categoriesmartlife`";
    		break;
    	case "smartLifeSubCategories":
    		$mainCategory = $_GET['mainCategory'];
    		$query = "SELECT * FROM sottocategoriesmartlife WHERE categoria = " . $mainCategory;
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