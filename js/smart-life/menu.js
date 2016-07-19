function printSmartLifeMainMenu(idHtmlTag, idCurrentCategory) {

	$.ajax({
		url: "http://guidoantoniomatteo.altervista.org/tim/components/smart-life/query.php?request=smartLifeMainCategories", 
		dataType: "json",
		success: function(result){
	       jsonMainMenuToHtml(result, idHtmlTag, idCurrentCategory);
	       smallMenuLoaded();
		}
	});
	
}



function jsonMainMenuToHtml(result, idHtmlTag, idCurrentCategory) {

	var myHtml = "";
	
	myHtml +=
	'<div class="row blu-menu">'+
			'<div class="menu-header hidden-sm hidden-md hidden-lg">'+
				'<div class="col-xs-3"> </div>'+
				'<div class="col-xs-6"><a href="">SMART LIFE</a></div>'+
				'<div class="col-xs-3">'+
					'<img src="http://guidoantoniomatteo.altervista.org/tim/img/menu-mobile-closed-white.png" class="menu-closed"/>'+
					'<img src="http://guidoantoniomatteo.altervista.org/tim/img/menu-mobile-open-white.png" class="menu-open"/>'+
				'</div>'+
			'</div>';
	
	$.each(result, function(index, element) {	

		var link = 'smart-life-sub-categories.html?mainCategory=' + element.id;
		
		if(element.id == idCurrentCategory) {
			myHtml +=
				'<div class="col-sm-3 col-xs-12 menu-link current-link"><a href="' + link +'">' +
				element.nome +
				'</a></div>';
			
		}
		
		else {			
			myHtml +=
					'<div class="col-sm-3 col-xs-12 menu-link"><a href="' + link +'">' +
					element.nome +
					'</a></div>';
		}
    });
		
	myHtml += '</div>';
	
	$(idHtmlTag).replaceWith(myHtml);
	
}


//SUB CATEGORIES

function printSmartLifeSubMenu(idHtmlTag, idMainCategory, idSubCategory) {

	$.ajax({
		url: "http://guidoantoniomatteo.altervista.org/tim/components/smart-life/query.php?request=smartLifeSubCategories&mainCategory=" + idMainCategory, 
		dataType: "json",
		success: function(result){
	       jsonSubMenuToHtml(result, idHtmlTag, idSubCategory);
	       smallMenuLoaded();
		}
	});
}



function jsonSubMenuToHtml(result, idHtmlTag, idCurrentCategory) {

	var myHtml = "";
	
	myHtml +=
	'<div class="row grey-menu">'+
			'<div class="menu-header hidden-sm hidden-md hidden-lg">'+
				'<div class="col-xs-3"> </div>'+
				'<div class="col-xs-6"><a href="">TV & FUN</a></div>'+
				'<div class="col-xs-3">'+
					'<img src="http://guidoantoniomatteo.altervista.org/tim/img/menu-mobile-closed-blu.png" class="menu-closed"/>'+
					'<img src="http://guidoantoniomatteo.altervista.org/tim/img/menu-mobile-open-blu.png" class="menu-open"/>'+
				'</div>'+
			'</div>';
	
	$.each(result, function(index, element) {	

		var link;
		
		if(element.idsmartlife == -1)
			link = 'smart-life-selected-subcategory.html?mainCategory='+element.categoria+'&subCategory=' + element.id;
		else
			link = 'smart-life-single.html?id=' + element.idsmartlife;
		
		var lenght;
		
		if(element.nome.length < 9)
			length = 2;
		else
			length = 3;
		
		if(element.id == idCurrentCategory) {
			myHtml +=
				'<div class="col-sm-'+length+' col-xs-12 menu-link current-link"><a href="' + link +'">' +
				element.nome +
				'</a></div>';
			
		}
		
		else {			
			myHtml +=
					'<div class="col-sm-'+length+' col-xs-12 menu-link"><a href="' + link +'">' +
					element.nome +
					'</a></div>';
		}
    });
		
	myHtml += '</div>';
	
	$(idHtmlTag).replaceWith(myHtml);
	
}
