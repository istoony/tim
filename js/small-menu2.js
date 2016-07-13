$(document).ready(function(){

	chooseMenu();
	
	$(window).resize(chooseMenu);
	
	
	$(".blu-menu img").click(function() {
		bluMenuIsClosed = ! bluMenuIsClosed;
		showMobileMenu();
	});
	
	
});

var menu = [ {class:".blu-menu", isClosed : true} ];

var bluMenuIsClosed = true;

function chooseMenu() {
	
    if ($('html').width() < 768 ){
    	
    	bluMenuIsClosed = true;
    	
    	showMobileMenu();

    }
    
}

function showMobileMenu() {
	
	if(bluMenuIsClosed) {
		$(".blu-menu .menu-open").hide();
		$(".blu-menu .menu-link").hide();
		$(".blu-menu .menu-closed").show();
		
	}
	else {
		$(".blu-menu .menu-open").show();
		$(".blu-menu .menu-link").show();
		$(".blu-menu .menu-closed").hide();
		
		
	}
	
}