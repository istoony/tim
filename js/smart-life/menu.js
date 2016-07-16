
function printMainMenu(idHtmlTag, idCurrentCategory) {

	$.ajax({
		url: "http://guidoantoniomatteo.altervista.org/tim/components/smart-life/query.php?request=smartLifeMainCategories", 
		dataType: "json",
		success: function(result){
	       jsonMenuToHtml(result, idHtmlTag, idCurrentCategory);
		}
	});
}

function jsonMenuToHtml(result, idHtmlTag, idCurrentCategory) {

	var myHtml = "";
	
	myHtml +=
	'<div class="row blu-menu">'+
			'<div class="menu-header hidden-sm hidden-md hidden-lg">'+
				'<div class="col-xs-3"> </div>'+
				'<div class="col-xs-6"><a href="">SMART LIFE</a></div>'+
				'<div class="col-xs-3">'+
					'<img src="../img/menu-mobile-closed-white.png" class="menu-closed"/>'+
					'<img src="../img/menu-mobile-open-white.png" class="menu-open"/>'+
				'</div>'+
			'</div>';
	
	$.each(result, function(index, element) {	
		
		if(element.id == idCurrentCategory) {
			myHtml +=
				'<div class="col-sm-3 col-xs-12 menu-link current-link"><a href="">' +
				element.nome +
				'</a></div>';
			
		}
		
		else {			
			myHtml +=
					'<div class="col-sm-3 col-xs-12 menu-link"><a href="">' +
					element.nome +
					'</a></div>';
		}
    });
		
	myHtml += '</div>';
	
	$(idHtmlTag).replaceWith(myHtml);
	
}