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
    	case "deviceOfCategory":
    		echo $query;
    		$id = $_GET['id'];
    		$query = 'SELECT * FROM dispositivo WHERE id_categoria='.$id;
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