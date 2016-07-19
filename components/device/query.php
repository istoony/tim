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
    	case "deviceMainCategories":
    		$query = 'SELECT * FROM categoriedevice';
    		break;
    	case "deviceSingleCategory":
    		$id = $_GET['id'];
    		$query = 'SELECT * FROM categoriedevice WHERE id='.$id;
    		break;    		
    	case "deviceOfCategory":
    		$id = $_GET['id'];
    		$query = 'SELECT * FROM dispositivo WHERE id_categoria='.$id;
    		break;
    	case "deviceBrand":
    		$query = 'SELECT DISTINCT marcadispositivo.* FROM marcadispositivo, dispositivo WHERE marcadispositivo.id = dispositivo.id_marca ORDER BY marcadispositivo.nome';
    		break; 
    	case "deviceDisplay":
    		$query = 'SELECT DISTINCT dispositivo.display FROM dispositivo ORDER BY dispositivo.display';
    		break;
    	case "getDevices":
    		$display = '%';
    		$brand = '%';
    		if(isset($_GET['display']) & strcmp($_GET['display'],"")) 
    			$display = $_GET['display'];
    		if(isset($_GET['brand']) & strcmp($_GET['display'],"")) 
    			$brand = $_GET['brand'];
    		$query = 'SELECT * FROM dispositivo WHERE id_marca LIKE "'.$brand.'" AND display LIKE "'.$display.'"';
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