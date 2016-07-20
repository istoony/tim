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
            $empty ="";
    		if(isset($_GET['display']) && strcmp($_GET['display'], "")>0) 
    			$display = $_GET['display'];
    		if(isset($_GET['brand']) && strcmp($_GET['brand'],"")>0) 
    			$brand = $_GET['brand'];
    		$query = 'SELECT dispositivo.id, dispositivo.nome, dispositivofoto.path, marcadispositivo.nome AS marca  FROM dispositivo, marcadispositivo, dispositivofoto WHERE id_marca LIKE "'.$brand.'" AND display LIKE "'.$display.'" AND marcadispositivo.id = dispositivo.id_marca AND dispositivofoto.id_dispositivo = dispositivo.id AND dispositivo.id_categoria ='. $_GET['cat'] .' GROUP BY dispositivo.id';
            break;
    	case "getDevicesCompatibili":
    		$id = $_GET['id'];
    		$query = 'SELECT dispositivo.id, dispositivo.nome, dispositivofoto.path, marcadispositivo.nome AS marca  FROM dispositivo, marcadispositivo, dispositivofoto, smartlifedispositivi WHERE smartlifedispositivi.idsmartlife='.$id.' AND smartlifedispositivi.iddispositivo=dispositivo.id AND dispositivofoto.id_dispositivo = dispositivo.id AND marcadispositivo.id = dispositivo.id_marca  GROUP BY dispositivo.id';
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