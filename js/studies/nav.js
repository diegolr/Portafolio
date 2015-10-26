(function() {

var buttonExperience = $("[data-button='experience__Left']");
var buttonSelfStudy = $("[data-button='self-Study__Mid']");
var buttonDegrees = $("[data-button='degrees__Right']");

buttonExperience.on("click", showExperienceContent);
buttonSelfStudy.on("click", showSelfStudyContent);
buttonDegrees.on("click", showDegreesContent);

function  showExperienceContent(){
	//Primero borramos todas las clases añadidas previamente (o no)
	buttonExperience.removeClass("StudiesNavButton__MidActiveLeftNoActive StudiesNavButton__NoActive");
	buttonSelfStudy.removeClass("StudiesNavButton__MidActive StudiesNavButton__RightActiveMidNoActive");
	buttonDegrees.removeClass("StudiesNavButton__MidActiveRightNoActive StudiesNavButton__RightActive");
	//Añadimos las clases correspondientes dependiendo el botón pulsado
	buttonExperience.addClass("StudiesNavButton__LeftActive");
	buttonSelfStudy.addClass("StudiesNavButton__LeftActiveMidNoActive");
	buttonDegrees.addClass("StudiesNavButton__NoActive");
	$( "#studies" ).load( "templates/studies/experience.html" );

}

function showSelfStudyContent(){
	buttonExperience.removeClass("StudiesNavButton__LeftActive StudiesNavButton__NoActive");
	buttonSelfStudy.removeClass("StudiesNavButton__LeftActiveMidNoActive StudiesNavButton__RightActiveMidNoActive");
	buttonDegrees.removeClass("StudiesNavButton__NoActive StudiesNavButton__RightActive");
	buttonExperience.addClass("StudiesNavButton__MidActiveLeftNoActive");
	buttonSelfStudy.addClass("StudiesNavButton__MidActive");
	buttonDegrees.addClass("StudiesNavButton__MidActiveRightNoActive");
	$( "#studies" ).load( "templates/studies/self-study.html" );
}

function showDegreesContent(){
	buttonExperience.removeClass("StudiesNavButton__LeftActive StudiesNavButton__MidActiveLeftNoActive");
	buttonSelfStudy.removeClass("StudiesNavButton__LeftActiveMidNoActive StudiesNavButton__MidActive");
	buttonDegrees.removeClass("StudiesNavButton__NoActive StudiesNavButton__MidActiveRightNoActive");
	buttonExperience.addClass("StudiesNavButton__NoActive");
	buttonSelfStudy.addClass("StudiesNavButton__RightActiveMidNoActive");
	buttonDegrees.addClass("StudiesNavButton__RightActive");
	$( "#studies" ).load( "templates/studies/degrees.html" );
}

})();