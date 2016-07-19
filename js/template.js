$( document ).ready(function() {

	$html = "";
	
	$.ajax({
		url: "http://guidoantoniomatteo.altervista.org/tim/components/template/header.php", 
		success: function(result){
        $("#header").replaceWith(result);
        loadMainMenu();
        $("#link-home").on('click', function() {
    		window.location.href = "index.html";
    	});

	    setCurrentLink();
    }});
	
	$.ajax({url: "http://guidoantoniomatteo.altervista.org/tim/components/template/footer.php",
		dataType: "HTML",
	    processData: false,
		success: function(result){
        $("#footer").replaceWith(result);
    }});
	
});

function setCurrentLink() {
	$(MENULINK).addClass("current-link");
}