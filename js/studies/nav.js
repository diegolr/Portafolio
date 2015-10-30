(function() {

var buttonExperience = $("[data-button='experience__Left']");
var buttonSelfStudy = $("[data-button='self-Study__Mid']");
var buttonDegrees = $("[data-button='degrees__Right']");

buttonExperience.on("click", showExperienceContent);
buttonSelfStudy.on("click", showSelfStudyContent);
buttonDegrees.on("click", showDegreesContent);

function  showExperienceContent(){	
	//Primero borramos todas las clases añadidas previamente (o no)
	buttonExperience.removeClass("StudiesNavButton__Active StudiesNavButton__NoActive");
	buttonSelfStudy.removeClass("StudiesNavButton__Active StudiesNavButton__NoActive");
	buttonDegrees.removeClass("StudiesNavButton__Active StudiesNavButton__NoActive");
	//Añadimos las clases correspondientes dependiendo el botón pulsado
	buttonExperience.addClass("StudiesNavButton__Active");
	buttonSelfStudy.addClass("StudiesNavButton__NoActive");
	buttonDegrees.addClass("StudiesNavButton__NoActive");
	$( "#studies" ).load( "templates/studies/experience.html" );

}

function showSelfStudyContent(){
	buttonExperience.removeClass("StudiesNavButton__Active StudiesNavButton__NoActive");
	buttonSelfStudy.removeClass("StudiesNavButton__Active StudiesNavButton__NoActive");
	buttonDegrees.removeClass("StudiesNavButton__Active StudiesNavButton__NoActive");

	buttonExperience.addClass("StudiesNavButton__NoActive");
	buttonSelfStudy.addClass("StudiesNavButton__Active");
	buttonDegrees.addClass("StudiesNavButton__NoActive");
	$( "#studies" ).load( "templates/studies/self-study.html" );
}

function showDegreesContent(){
	buttonExperience.removeClass("StudiesNavButton__Active StudiesNavButton__NoActive");
	buttonSelfStudy.removeClass("StudiesNavButton__Active StudiesNavButton__NoActive");
	buttonDegrees.removeClass("StudiesNavButton__Active StudiesNavButton__NoActive");

	buttonExperience.addClass("StudiesNavButton__NoActive");
	buttonSelfStudy.addClass("StudiesNavButton__NoActive");
	buttonDegrees.addClass("StudiesNavButton__Active");
	$( "#studies" ).load( "templates/studies/degrees.html" );
}

})();