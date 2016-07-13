
var menu = [ {className:".blu-menu", isClosed : true},
             {className:".grey-menu", isClosed : true},
             {className:".grey-red-menu", isClosed : true}];


$(document).ready(function(){

	chooseMenu();
	
	$(window).resize(chooseMenu);
	
	$(".blu-menu img").click(function() {
		menu[getIndex(".blu-menu")].isClosed = ! menu[getIndex(".blu-menu")].isClosed;
		showMobileMenu(getIndex(".blu-menu"));
	});
	
	$(".grey-menu img").click(function() {
		menu[getIndex(".grey-menu")].isClosed = ! menu[getIndex(".grey-menu")].isClosed;
		showMobileMenu(getIndex(".grey-menu"));
	});
	
	$(".grey-red-menu img").click(function() {
		menu[getIndex(".grey-red-menu")].isClosed = ! menu[getIndex(".grey-red-menu")].isClosed;
		showMobileMenu(getIndex(".grey-red-menu"));
	});
	
});

function getIndex(className) {
	var index;
	for(var i = 0; i < menu.length; i++) {
		if(menu[i].className == className)
			index = i;
	}
	return index;
}

function chooseMenu() {
	
    if ($('html').width() < 768 ){
    	
    	
    	for(var i = 0; i < menu.length; i++) {    		
    		menu[i].isClosed = true;

        	showMobileMenu(i);
    	}

    }
    
}

function showMobileMenu(index) {
	
	className = menu[index].className;
	isClosed = menu[index].isClosed;
	
	if(isClosed) {
		$(className + " .menu-open").hide();
		$(className + " .menu-link").hide();
		$(className + " .menu-closed").show();
	}
	else {
		$(className + " .menu-open").show();
		$(className + " .menu-link").show();
		$(className + " .menu-closed").hide();
	}
	
}