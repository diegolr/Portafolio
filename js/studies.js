var buttonExperience = $("[data-button='experience__Left']");
var buttonSelfStudy = $("[data-button='self-Study__Mid']");
var buttonTitles = $("[data-button='titles__Right']");

buttonExperience.on("click", showExperienceContent);
buttonSelfStudy.on("click", showSelfStudyContent);
buttonTitles.on("click", showTitlesContent);

function  showExperienceContent(){
	//Primero borramos todas las clases añadidas previamente (o no)
	buttonExperience.removeClass("StudiesNavButton__MidActiveLeftNoActive StudiesNavButton__NoActive");
	buttonSelfStudy.removeClass("StudiesNavButton__MidActive StudiesNavButton__RightActiveMidNoActive");
	buttonTitles.removeClass("StudiesNavButton__MidActiveRightNoActive StudiesNavButton__RightActive");
	//Añadimos las clases correspondientes dependiendo el botón pulsado
	buttonExperience.addClass("StudiesNavButton__LeftActive");
	buttonSelfStudy.addClass("StudiesNavButton__LeftActiveMidNoActive");
	buttonTitles.addClass("StudiesNavButton__NoActive");
}

function showSelfStudyContent(){
	buttonExperience.removeClass("StudiesNavButton__LeftActive StudiesNavButton__NoActive");
	buttonSelfStudy.removeClass("StudiesNavButton__LeftActiveMidNoActive StudiesNavButton__RightActiveMidNoActive");
	buttonTitles.removeClass("StudiesNavButton__NoActive StudiesNavButton__RightActive");
	buttonExperience.addClass("StudiesNavButton__MidActiveLeftNoActive");
	buttonSelfStudy.addClass("StudiesNavButton__MidActive");
	buttonTitles.addClass("StudiesNavButton__MidActiveRightNoActive");
}

function showTitlesContent(){
	buttonExperience.removeClass("StudiesNavButton__LeftActive StudiesNavButton__MidActiveLeftNoActive");
	buttonSelfStudy.removeClass("StudiesNavButton__LeftActiveMidNoActive StudiesNavButton__MidActive");
	buttonTitles.removeClass("StudiesNavButton__NoActive StudiesNavButton__MidActiveRightNoActive");
	buttonExperience.addClass("StudiesNavButton__NoActive");
	buttonSelfStudy.addClass("StudiesNavButton__RightActiveMidNoActive");
	buttonTitles.addClass("StudiesNavButton__RightActive");
}