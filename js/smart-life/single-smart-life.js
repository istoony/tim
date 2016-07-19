var htmlDescrizione = "";
var htmlRegole = "";
var htmlFaq = "";

var htmlSpotPrezzo;
var htmlSpotFaq;
var htmlSpotRegole;
var htmlMorePhotos;

var htmlCompatibili;

$(document).ready(function(){
	
	//GET ID
	var url = location.href;
    var captured = /id=([^&]+)/.exec(url)[1]; // Value is in [1] ('384' in our case)
    var result = captured ? captured : 'id';
    var id = result;
	
    
    //LOAD PAGE CONTENT
    
	$.ajax({
		url: "http://guidoantoniomatteo.altervista.org/tim/components/smart-life/query.php?request=singleSmartLife&id="+id, 
		dataType: "json",
		success: function(result){
	       showSmartLife(result);
		}
	});
	
	function showSmartLife(result) {

		smartLife = result[0];
		
		var html= "";
		

		//LOAD MORE PHOTOS
		htmlMorePhotos = '';
		
		$.ajax({
			url: "http://guidoantoniomatteo.altervista.org/tim/components/smart-life/query.php?request=singleSmartLifeMorePhotos&id="+smartLife.id, 
			dataType: "json",
			success: function(result){
				htmlMorePhotos = '<div id="more-photos">';
				
				$.each(result, function(index, element) {
					var imgSrc = 'http://guidoantoniomatteo.altervista.org/tim/img/smart-life/single-SL/'+element.idsmartlife+'/photos/' + element.foto;
					htmlMorePhotos += '<img data-toggle="modal" data-target="#model-photo-'+element.id+'" id="photo-'+element.id+'" src="'+imgSrc+'"/>';
					htmlMorePhotos += '<div id="model-photo-'+element.id+'" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="" aria-hidden="true">'+
						 '<div class="modal-dialog">'+
						 	'<div class="modal-content">'+
						 	'<div class="modal-body">'+
				            '<img src="'+imgSrc+'" class="img-responsive">'+
				        '</div>'+
				    '</div>'+
				  '</div>'+
				'</div>';
				});
				
				htmlMorePhotos += '</div>';
				

				$("#smart-life-photos").append( htmlMorePhotos );
			}
		
		});
		
		var imageUrl = 'http://guidoantoniomatteo.altervista.org/tim/img/smart-life/single-SL/'+smartLife.id+'/background.png';
		$(".single-smart-life").css('background-image', 'url(' + imageUrl + ')');
		
		var logoUrl = 'http://guidoantoniomatteo.altervista.org/tim/img/smart-life/single-SL/'+smartLife.id+'/logo.png';
		$(".smart-life-logo img").replaceWith('<img src="'+logoUrl+'"/>');
		
		htmlSpotPrezzo = $('<div />').html( smartLife.prezzo ).text(); 
		htmlSpotFaq = '<span><h1>Domande?</h1>Siamo qui per aiutarti.</span>';
		htmlSpotRegole = '<span><h1>Informazioni</h1>su attivazione e condizioni</span>';
		
		$("#smart-life-price").html( htmlSpotPrezzo );
		
		var paddingTop = $("#smart-life-price").height() + $("#smart-life-photos").height() - $("#smart-life-buy").height() - 50;
		$("#smart-life-buy").css("padding-top", paddingTop + "px" );
		
		
		//LOAD SMART LIFE MENU     
		printSmartLifeMainMenu("#main-categories-menu", smartLife.categoria); 	
		printSmartLifeSubMenu("#sub-categories-menu", smartLife.categoria, smartLife.sottocategoria);
		
		//LOAD INFORMAZIONI
		htmlDescrizione = '<div>' + smartLife.descrizione + '</div>';		
		$("#informazioni-content div").replaceWith(htmlDescrizione);
		
		//LOAD COMPATIBILI
		$.ajax({
			url: "http://guidoantoniomatteo.altervista.org/tim/components/smart-life/query.php?request=deviceCompatibili&id="+smartLife.id, 
			dataType: "json",
			success: function(result){		
				if( result.length > 0) { 
					htmlCompatibili = '<div id="related-smartphones" class="col-sm-4 cols-xs-12>">' +
						'<a href="device-compatibili.html?id='+smartLife.id+'"><h3>Dispositivi</br>Compatibili</h3></a>' +
					'</div>';
				} 
				else {
					htmlCompatibili = '<div id="related-smartphones" class="col-sm-4 cols-xs-12>">' +
						'<h3></h3>' +
					'</div>';
				}
			}
		});
		
		//LOAD PREV LINK
		$.ajax({
			url: "http://guidoantoniomatteo.altervista.org/tim/components/smart-life/query.php?request=singleSmartLifePrev&id="+id, 
			dataType: "json",
			success: function(result){
				element = result[0];
				var href = 'smart-life-single.html?id=' + element.id;
				$("#prev-link").attr("href", href);
			}
		});
		
		//LOAD NEXT LINK
		$.ajax({
			url: "http://guidoantoniomatteo.altervista.org/tim/components/smart-life/query.php?request=singleSmartLifeNext&id="+id, 
			dataType: "json",
			success: function(result){
				element = result[0];
				var href = 'smart-life-single.html?id=' + element.id;
				$("#next-link").attr("href", href);
			}
		});
		
		
		//LOAD FAQ 
		$.ajax({
			url: "http://guidoantoniomatteo.altervista.org/tim/components/smart-life/query.php?request=singleSmartLifeFaq&id="+id, 
			dataType: "json",
			success: function(result){
				
				htmlFaq += '<div class="panel-group" id="accordion-faq">';
				
				var i = 0;
				
				$.each(result, function(index, element) {
					htmlFaq +=
						'<div class="panel panel-default">'+
					    	'<div class="panel-heading button-informazioni">'+
					        '<h4 class="panel-title">'+
					          '<a data-toggle="collapse" data-parent="#accordion-faq" href="#faq-'+element.id+'">'+element.nome+'</a>'+
					       ' </h4>'+
					      '</div>'+
					      '<div id="faq-'+element.id+'" class="panel-collapse collapse in">'+
					        '<div class="panel-body">'+element.descrizione+'</div>'+
					      '</div>'+
					    '</div>';			
				});
				

				htmlFaq += '</div>';
			}
		});
	
		$.ajax({
			url: "http://guidoantoniomatteo.altervista.org/tim/components/smart-life/query.php?request=singleSmartLifeRegole&id="+id, 
			dataType: "json",
			success: function(result){
				
				htmlRegole += '<div class="panel-group" id="accordion-regole">';
				
				var i = 0;
				
				$.each(result, function(index, element) {
					htmlRegole +=
						'<div class="panel panel-default">'+
					    	'<div class="panel-heading button-informazioni">'+
					        '<h4 class="panel-title">'+
					          '<a data-toggle="collapse" data-parent="#accordion-regole" href="#regole-'+element.id+'">'+element.nome+'</a>'+
					       ' </h4>'+
					      '</div>'+
					      '<div id="regole-'+element.id+'" class="panel-collapse collapse in">'+
					        '<div class="panel-body">'+element.descrizione+'</div>'+
					      '</div>'+
					    '</div>';			
				});
				

				htmlRegole += '</div>';
			}
		});
		
		
		$("#button-descrizione a").on('click',function(event) {
			event.preventDefault();
			$("#informazioni-content div").replaceWith(htmlDescrizione);
			$(".grey-red-menu div").removeClass("current-link");
			$("#smart-life-price").html(htmlSpotPrezzo);
		});

		$("#button-regole a").on('click',function(event) {
			event.preventDefault();
			$("#informazioni-content div").replaceWith(htmlRegole);
			$(".grey-red-menu div").removeClass("current-link");
			$("#smart-life-price").html(htmlSpotRegole);
		});
		
		$("#button-faq a").on('click',function(event) {
			event.preventDefault();
			$("#informazioni-content div").replaceWith(htmlFaq);
			$(".grey-red-menu div").removeClass("current-link");
			$("#smart-life-price").html(htmlSpotFaq);
		});
		
		
		//LOAD RELATED PLANS		
		$.ajax({
			url: "http://guidoantoniomatteo.altervista.org/tim/components/smart-life/query.php?request=singleSmartLifeRelatedPlans&id="+id, 
			dataType: "json",
			success: function(result){
				
				var html = '<div id="related-plans" class="col-sm-8 cols-xs-12>">'
					'<div class="row">';
				
				var i = 0;
				
				$.each(result, function(index, element) {
					var link = 'piano.html?id='+element.id;
					html +=
						'<div class="col-xs-6"><a href="'+ link + '">'+
					    	'<img src="'+element.foto+'"/>'+
					    	'<h3>'+element.nome+'</h3>' +
					    '</a></div>';
				});
				

				html += '</div></div>';
				
				html += htmlCompatibili;
				

				$("#related-content").append(html);
				
			}
		
		});
		
		
		
		
		
		
	}
	
	
});