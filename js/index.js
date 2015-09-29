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
}

function loadStudiesContent(){
	$( "#main" ).load( "templates/studies.html" );
}

function loadPortfolioContent(){
	$( "#main" ).load( "templates/portfolio.html" );
}

function loadContactContent(){
	$( "#main" ).load( "templates/contact.html" );
}

})();