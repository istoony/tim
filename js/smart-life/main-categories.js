$( document ).ready(function() {

	$html = "";
	
	$.ajax({
		url: "http://guidoantoniomatteo.altervista.org/tim/components/smart-life/query.php?request=smartLifeMainCategories", 
		dataType: "json",
		success: function(result){
	       showCategories(result);

		}
	});
	
	function showCategories(result) {

		var html = [];
		
		$.each(result, function(index, element) {
            /*$('body').append($('<div>', {
                text: element.name
            }));*/
			
			html.push('<div class="col-xs-3">' + element.nome +'</div>');
			
        });
		
		
	}
	

	
});