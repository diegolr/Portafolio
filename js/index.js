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
	buttonMe.css("background","rgba(255,255,255,0.8)");
	buttonStudies.css("background","#DEB887");
	buttonPortfolio.css("background","#DEB887");
	buttonContact.css("background","#DEB887");
	
}

function loadStudiesContent(){
	$( "#main" ).load( "templates/studies-nav.html", function(){
		//Función repetida en studies.js. Esto es debido a que cargamos dinámicamente la página, para lograr que cuando se cargue la página se ejecute una función es necesario ejecutarla en el callback del load. Si la llamamos desde studies.js no sería capaz de ejecutarla justo después de cargarla
		var buttonExperience = $("[data-button='experience__Left']");
		var buttonSelfStudy = $("[data-button='self-Study__Mid']");
		var buttonDegrees = $("[data-button='degrees__Right']");
		showDegreesContent();
		function showDegreesContent(){
			buttonExperience.removeClass("StudiesNavButton__LeftActive StudiesNavButton__MidActiveLeftNoActive");
			buttonSelfStudy.removeClass("StudiesNavButton__LeftActiveMidNoActive StudiesNavButton__MidActive");
			buttonDegrees.removeClass("StudiesNavButton__NoActive StudiesNavButton__MidActiveRightNoActive");
			buttonExperience.addClass("StudiesNavButton__NoActive");
			buttonSelfStudy.addClass("StudiesNavButton__RightActiveMidNoActive");
			buttonDegrees.addClass("StudiesNavButton__RightActive");
			$( "#studies" ).load( "templates/studies/degrees.html" );
		}
	} );

	buttonMe.css("background","#DEB887");
	buttonStudies.css("background","rgba(255,255,255,0.8)");
	buttonPortfolio.css("background","#DEB887");
	buttonContact.css("background","#DEB887");
}

function loadPortfolioContent(){
	$( "#main" ).load( "templates/portfolio.html" );
	buttonMe.css("background","#DEB887");
	buttonStudies.css("background","#DEB887");
	buttonPortfolio.css("background","rgba(255,255,255,0.8)");
	buttonContact.css("background","#DEB887");
}

function loadContactContent(){
	$( "#main" ).load( "templates/contact.html" );
	buttonMe.css("background","#DEB887");
	buttonStudies.css("background","#DEB887");
	buttonPortfolio.css("background","#DEB887");
	buttonContact.css("background","rgba(255,255,255,0.8)");
}

})();