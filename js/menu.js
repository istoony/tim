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
