$( document ).ready(function() {
	
	$.ajax({
		url: "http://guidoantoniomatteo.altervista.org/tim/components/device/query.php?request=deviceMainCategories", 
		dataType: "json",
		success: function(result){
	       showCategories(result);

		}
	});
	
	function showCategories(result) {

		var myHtml = "";
		
		$.each(result, function(index, element) {		
			
			var link = 'device-selected-category.html?id=' + element.id;
			var imgSrc = 'http://guidoantoniomatteo.altervista.org/tim/img/device/main-categories/' + element.foto;
			
			myHtml += 
				'<div class="col-sm-3 col-xs-6 device-category">' +
					'<div class="row">'+
						'<a href="' + link + '">' +
							'<div class="device-category-img col-xs-12">'+
								'<img src="'+imgSrc+'"/>'+
							'</div>'+
							'<span class="col-xs-12">'+element.nome+'<span>'+
						'</a>' +
					'</div>' +
				'</div>';
        });
		
		$("#main-categories").html(myHtml);

	}
	
});