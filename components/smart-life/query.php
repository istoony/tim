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
    	case "smartLife":
    		$mainCategory = $_GET['mainCategory'];
    		$query = "SELECT * FROM smartlife WHERE categoria=".$mainCategory;
    		
    		if(isset($_GET['subCategory']))
    			$query .= " AND sottocategoria=".$_GET['subCategory'];
    		break;
    	case "singleSmartLife":
    		$id = $_GET['id'];
    		$query = "SELECT * FROM smartlife WHERE id=".$id;
    		break;
    	case "singleSmartLifeFaq":
    		$id = $_GET['id'];
    		$query = "SELECT * FROM faqsmartlife WHERE idsmartlife=".$id;
    		break;
    	case "singleSmartLifeRegole":
    		$id = $_GET['id'];
    		$query = "SELECT * FROM regolesmartlife WHERE idsmartlife=".$id;
    		break;
    	case "singleSmartLifeNext":
    		$id = $_GET['id'];
    		$query = "SELECT * FROM smartlife WHERE id = (SELECT MIN(id) FROM smartlife WHERE id > ".$id.")";
    		break;
    	case "singleSmartLifePrev":
    		$id = $_GET['id'];
    		$query = "SELECT * FROM smartlife WHERE id = (SELECT MAX(id) FROM smartlife WHERE id < ".$id.")";
    		break;
    	case "singleSmartLifeRelatedPlans":
    		$id = $_GET['id'];
    		$query = "SELECT pianotariffario.* FROM pianotariffario, relazionepianismartlife WHERE idsmartlife = ".$id." AND idpiano = pianotariffario.id";
    		break;
    	case "singleSmartLifeMorePhotos":
    		$id = $_GET['id'];
    		$query = "SELECT * FROM smartlifefotoulteriori WHERE idsmartlife = ".$id;
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