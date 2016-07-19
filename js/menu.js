var isHidden = true;

function loadMainMenu() {

	//SMALL MENU
	
	setMainMenu();
	
	$( window ).resize(setMainMenu);
	
	$("#top-menu-button-small").on('click', hideShowMainMenu); 

}

function setMainMenu() {
	 $("#top-menu-small .first-menu").hide();
	 $("#top-menu-small .second-menu").hide();
	 $("#top-menu-button-small .menu-open").hide();
}

function hideShowMainMenu(){
	 
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
}
