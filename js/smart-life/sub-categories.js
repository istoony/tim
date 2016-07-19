$( document ).ready(function() {

	var url = location.href;
    var captured = /mainCategory=([^&]+)/.exec(url)[1]; // Value is in [1] ('384' in our case)
    var result = captured ? captured : 'mainCategory';
    var mainCategory = result;
	
    //LOAD SMART LIFE MENU

	printSmartLifeMainMenu("#main-categories-menu", mainCategory); 
    
    
    //LOAD PAGE CONTENT
    
	$.ajax({
		url: "http://guidoantoniomatteo.altervista.org/tim/components/smart-life/query.php?request=smartLifeSubCategories&mainCategory="+mainCategory, 
		dataType: "json",
		success: function(result){
			if(result.length > 0)
				showCategories(result);
			else 
				loadSmartLife();
		}
	});
	

	function showCategories(result) {

		var html= "";
		
		var i = 0;
		
		$.each(result, function(index, element) {
			
			var link;
			
			if(element.idsmartlife == -1)
				link = 'http://guidoantoniomatteo.altervista.org/tim/smart-life/selected-subcategory.html?mainCategory=' + mainCategory + "&subCategory=" + element.id;
			
			else
				link = 'http://guidoantoniomatteo.altervista.org/tim/smart-life/single-smart-life.html?id='+element.idsmartlife;
			
			if(i % 2 == 0) {
				html += '<a href="' + link + '">' +
					'<div class="col-xs-12 background-left smart-life-sub-category" style="background: url(http://guidoantoniomatteo.altervista.org/tim/img/smart-life/'+mainCategory+'/'+element.foto+')">' + 
					'<h3><span>Scopri </span>' + element.nome +'</h3>' +
							'<div>' + 
								element.descrizione + 
							'</div>' +
						'</div></a>';
			} else {
				html += '<a href="' + link + '">' +
				'<div class="col-xs-12 background-right smart-life-sub-category" style="background: url(http://guidoantoniomatteo.altervista.org/tim/img/smart-life/'+mainCategory+'/'+element.foto+')">' + 
				'<h3><span>Scopri </span>' + element.nome +'</h3>' +
						'<div>' + 
							element.descrizione + 
						'</div>' +
					'</div></a>';		
			}
			
			i++;
			
        });
		
		$('#sub-categories').append(html);
		
	}
	
	function loadSmartLife() {
		
		$.ajax({
			url: "http://guidoantoniomatteo.altervista.org/tim/components/smart-life/query.php?request=smartLife&mainCategory="+mainCategory, 
			dataType: "json",
			success: function(result){
				showSmartLife(result);
			}
		});
		
	}
	
	function showSmartLife(result) {
		
		var html= "";
		
		var i = 0;
		
		$.each(result, function(index, element) {
			
			var link = 'http://guidoantoniomatteo.altervista.org/tim/smart-life/single-smart-life.html?id='+element.id;
			
			if(i % 2 == 0) {
				html += '<a href="' + link + '">' +
					'<div class="col-xs-12 background-left smart-life-sub-category" style="background: url(http://guidoantoniomatteo.altervista.org/tim/img/smart-life/'+mainCategory+'/'+element.fotoprincipale+')">' + 
					'<h3><span>Scopri </span>' + element.nome +'</h3>' +
							'<div>' + 
								element.descrizioneshort + 
							'</div>' +
						'</div></a>';
			} else {
				html += '<a href="' + link + '">' +
				'<div class="col-xs-12 background-right smart-life-sub-category" style="background: url(http://guidoantoniomatteo.altervista.org/tim/img/smart-life/'+mainCategory+'/'+element.fotoprincipale+')">' +
				'<h3><span>Scopri </span>' + element.nome +'</h3>' +
						'<div>' + 
							element.descrizioneshort + 
						'</div>' +
					'</div></a>';		
			}
			
			i++;
			
        });
		
		$('#sub-categories').append(html);
		
	}
	

	
});