$( document ).ready(function() {
	
	var url = location.href;
    var captured = /id=([^&]+)/.exec(url)[1]; // Value is in [1] ('384' in our case)
    var id = captured ? captured : 'id';
    
	$.ajax({
		url: "http://guidoantoniomatteo.altervista.org/tim/components/device/query.php?request=deviceOfCategory&id="+id, 
		dataType: "json",
		success: function(result){
			alert(result);
	       showCategories(result);

		}
	});
	
	function showCategories(result) {

		var myHtml = "";
		
		$.each(result, function(index, element) {		
			
			
        });
		

	}
	
});