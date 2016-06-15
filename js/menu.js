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
	
	
	
	
	//CONTROL LOGIC
	
	
	
	checkURL();	//check if the URL has a reference to a page and load it

	$('#top ul li a, #footer ul li a').click(function (e){

            alert(this.hash);
			checkURL(this.hash);	//.. and assign them a new onclick event, using their own hash as a parameter (#page1 for example)

	});

	setInterval("checkURL()",250);	//check for a change in the URL every 250 ms to detect if the history buttons have been used

});

var lasturl="";	//here we store the current URL hash

function checkURL(hash)
{
	if(!hash) hash=window.location.hash;	//if no parameter is provided, use the hash value from the current address

	if(hash != lasturl)	// if the hash value has changed
	{
		lasturl=hash;	//update the current hash
		loadPage(hash);	// and load the new page
	}
}

function loadPage(url)	//the function that loads pages via AJAX
{
	url=url.replace('#page','');	//strip the #page part of the hash and leave only the page number

	$('#loading').css('visibility','visible');	//show the rotating gif animation

	$.ajax({	//create an ajax request to load_page.php
		type: "POST",
		url: "libs/load_page.php",
		data: 'page='+url,	//with the page number as a parameter
		dataType: "html",	//expect html to be returned
		success: function(msg){

			if(parseInt(msg)!=0)	//if no errors
			{
				$('#pageContent').html(msg);	//load the returned html into pageContet
				$('#loading').css('visibility','hidden');	//and hide the rotating gif
			}
		}

	});

}