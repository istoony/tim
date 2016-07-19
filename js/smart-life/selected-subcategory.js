$( document ).ready(function() {
	
	var url = location.href;
    var captured = /mainCategory=([^&]+)/.exec(url)[1]; // Value is in [1] ('384' in our case)
    var result = captured ? captured : 'mainCategory';
    var mainCategory = result;
    
    var captured = /subCategory=([^&]+)/.exec(url)[1]; // Value is in [1] ('384' in our case)
    var result = captured ? captured : 'subCategory';
    var subCategory = result;
	
    //LOAD SMART LIFE MENU

	printSmartLifeMainMenu("#main-categories-menu", mainCategory); 
	
	printSmartLifeSubMenu("#sub-categories-menu", mainCategory, subCategory);
	
	//LOAD BACKGROUND

	$(window).resize(applyBackground);
	
	applyBackground();
	
	function applyBackground() {
		if ($('html').width() >= 768 ){
			$("#background-elements").replaceWith(
					'<style id="background-elements">#elements { background-image: url(http://guidoantoniomatteo.altervista.org/tim/img/smart-life/'+mainCategory+'/background.png); }</style>'
					);
		} else {
			$("#background-elements").replaceWith(
					'<style id="background-elements">#elements { background-image: url(http://guidoantoniomatteo.altervista.org/tim/img/smart-life/'+mainCategory+'/background-mobile.png); }</style>'
					);
		}
	}
	
	//LOAD PAGE CONTENT
	
	$.ajax({
		url: "http://guidoantoniomatteo.altervista.org/tim/components/smart-life/query.php?request=smartLife&mainCategory="+mainCategory+"&subCategory="+subCategory, 
		dataType: "json",
		success: function(result){
	       showSmartLife(result);
		}
	});
	
	function showSmartLife(result) {

		var html= "";
		
		var i = 0;
		
		$.each(result, function(index, element) {
			
			var link = 'smart-life-single.html?id=' + element.id;
			var imgSrc = "http://guidoantoniomatteo.altervista.org/tim/img/smart-life/" + element.categoria +'/'+ element.sottocategoria + '/' + element.fotoprincipale; 
			
			
			html +=
				'<a href="'+link+'">'+
					'<div class="col-sm-4 cols-xs-12 smart-life-element smart-life-element-'+i+'">' +
						'<div class="row">' +
							'<div class="col-sm-12 col-xs-5"><img src="' + imgSrc + '"/></div>' +
							'<h3 class="col-sm-12 col-xs-5" >' + element.nome + '</h3>' +
							'<span class="col-sm-12 hidden-xs">' + element.descrizioneshort + '</span>' +
						'</div>' +
					'</div>'+
				'</a>';
			
			if(i == 0) {
				html += 
					'<div class="col-sm-4 hidden-xs"> </div>';
				i++;
			}
			
			i++;
			
			
        });
		
		$('#elements').append(html);
		
	}
	
    
});