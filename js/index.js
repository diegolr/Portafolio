 (function() {

// Cargamos la página principal cuando se accede a la página
window.onload = loadMeContent;

var buttonMe = $("[data-button='me']");
var buttonStudies = $("[data-button='studies']");
var buttonPortfolio = $("[data-button='portfolio']");
var buttonContact = $("[data-button='contact']");

buttonMe.on("click", loadMeContent);
buttonStudies.on("click", loadStudiesContent);
buttonPortfolio.on("click", loadPortfolioContent);
buttonContact.on("click", loadContactContent);

function loadMeContent(){
	$( "#main" ).load( "templates/me.html" );
	buttonMe.css("background","#FF9C00");
	buttonStudies.css("background","white");
	buttonPortfolio.css("background","white");
	buttonContact.css("background","white");
	
}

function loadStudiesContent(){
	$( "#main" ).load( "templates/studies.html" );
	buttonMe.css("background","white");
	buttonStudies.css("background","#FF9C00");
	buttonPortfolio.css("background","white");
	buttonContact.css("background","white");
}

function loadPortfolioContent(){
	$( "#main" ).load( "templates/portfolio.html" );
	buttonMe.css("background","white");
	buttonStudies.css("background","white");
	buttonPortfolio.css("background","#FF9C00");
	buttonContact.css("background","white");
}

function loadContactContent(){
	$( "#main" ).load( "templates/contact.html" );
	buttonMe.css("background","white");
	buttonStudies.css("background","white");
	buttonPortfolio.css("background","white");
	buttonContact.css("background","#FF9C00");
}

})();