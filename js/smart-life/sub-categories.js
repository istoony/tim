$( document ).ready(function() {

	var url = location.href;
    var captured = /mainCategory=([^&]+)/.exec(url)[1]; // Value is in [1] ('384' in our case)
    var result = captured ? captured : 'mainCategory';
    var mainCategory = result;
	
	$.ajax({
		url: "http://guidoantoniomatteo.altervista.org/tim/components/smart-life/query.php?request=smartLifeSubCategories&mainCategory="+mainCategory, 
		dataType: "json",
		success: function(result){
	       showCategories(result);

		}
	});
	
	function showCategories(result) {

		var html= "";
		
		$.each(result, function(index, element) {
			html += '<div class="col-xs-12">' +
					'<h3>Scopri ' + element.nome +'</h3>' +
					'<div style="background: url(' + "http://guidoantoniomatteo.altervista.org/tim/components/smart-life/query.php?request=smartLifeSubCategories&mainCategory="+mainCategory, 
					
					')>' + element.descrizione + '</div>' +
					'</div>';
        });
		
		$('#sub-categories').append(html);
		
	}
	
	
	printMainMenu("#main-categories-menu", mainCategory); 

	
});