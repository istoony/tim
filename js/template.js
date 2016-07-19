$( document ).ready(function() {

	$html = "";
	
	$.ajax({
		url: "http://guidoantoniomatteo.altervista.org/tim/components/template/header.php", 
		success: function(result){
        $("#header").replaceWith(result);
        loadMainMenu();
    }});
	
	$.ajax({url: "http://guidoantoniomatteo.altervista.org/tim/components/template/footer.php",
		dataType: "HTML",
	    processData: false,
		success: function(result){
        $("#footer").replaceWith(result);
    }});
});