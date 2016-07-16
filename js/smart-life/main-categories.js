$( document ).ready(function() {
	
	$.ajax({
		url: "http://guidoantoniomatteo.altervista.org/tim/components/smart-life/query.php?request=smartLifeMainCategories", 
		dataType: "json",
		success: function(result){
	       showCategories(result);

		}
	});
	
	function showCategories(result) {

		var myHtml = "";
		
		$.each(result, function(index, element) {			
			myHtml += '<div class="col-xs-3"><div><h3>' + element.nome +'</h3></div></div>';
        });
		
		$('.smart-life-categories').append(myHtml);
		
	}
	

	
});