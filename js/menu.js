$(document).ready(function(){

	//SMALL MENU
	var isHidden = true;
	
	$("#top-menu-small .first-menu").hide();
	$("#top-menu-small .second-menu").hide();
	$("#top-menu-button-small .menu-open").hide();
	
	
	 $("#top-menu-button-small").click(function(){
		 
		 if(isHidden == true ) {
			 isHidden = false;
			 $("#top-menu-button-small .menu-closed").hide();
			 $("#top-menu-button-small .menu-open").show();
			 $("#top-menu-small .first-menu").fadeIn(500);
			 $("#top-menu-small .second-menu").fadeIn(800);
		 }
		 else {	
			 isHidden = true;
			 $("#top-menu-button-small .menu-open").hide();
			 $("#top-menu-button-small .menu-closed").show();
			 $("#top-menu-small .first-menu").fadeOut(500);
			 $("#top-menu-small .second-menu").fadeOut(800);
		 }
	 });

});


function loadPage(url)	//the function that loads pages via AJAX
{
	$('#loading').css('visibility','visible');	//show the rotating gif animation

	$.ajax({	//create an ajax request to load_page.php
		type: "POST",
		url: "http://192.168.56.101/tim/pages/load-page.php",
		data: 'url='+url,	//with the page number as a parameter
		dataType: "html",	//expect html to be returned
		success: function(msg){

			alert(msg);
			
			if(parseInt(msg)!=0)	//if no errors
			{
				
				$('#content').html(msg);	//load the returned html into pageContet
				$('#loading').css('visibility','hidden');	//and hide the rotating gif
			}
		}

	});

}