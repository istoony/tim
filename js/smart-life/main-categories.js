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
			
			var link = 'http://guidoantoniomatteo.altervista.org/tim/smart-life/sub-categories.html?mainCategory=' + element.id;
			
			myHtml += 
				'<div class="col-xs-3"><div><h3>' + 
					'<a href="' + link + '">' +
						element.nome +
					'</a>' +
				'</h3></div></div>';
        });
		
		$('.smart-life-categories').append(myHtml);
		
	}
	

	
});