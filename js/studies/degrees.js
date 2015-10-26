(function() {
var buttonDegrees = $("[data-button='degrees']");
var buttonCourses = $("[data-button='courses']");
var buttonLanguages = $("[data-button='languages']");

buttonDegrees.on("click", showDegrees);
buttonCourses.on("click", showCourses);
buttonLanguages.on("click", showLanguages);

function showDegrees(){
	var className = $("#degreesSpan").attr('class');
	if(className=='icon-circle-down'){
		$("#degreesSpan").removeClass('icon-circle-down').addClass('icon-circle-up');
		$( "#degrees" ).removeClass('StudiesContainer-Item-Content__noActive').addClass('StudiesContainer-Item-Content__active');
	}
	if(className=='icon-circle-up'){
		$("#degreesSpan").removeClass('icon-circle-up').addClass('icon-circle-down');
		$( "#degrees" ).removeClass('StudiesContainer-Item-Content__active').addClass('StudiesContainer-Item-Content__noActive');
	}
	
}

function showCourses(){
	var className = $("#coursesSpan").attr('class');
	if(className=='icon-circle-down'){
		$("#coursesSpan").removeClass('icon-circle-down').addClass('icon-circle-up');
		$( "#courses" ).removeClass('StudiesContainer-Item-Content__noActive').addClass('StudiesContainer-Item-Content__active');
	}
	if(className=='icon-circle-up'){
		$("#coursesSpan").removeClass('icon-circle-up').addClass('icon-circle-down');
		$( "#courses" ).removeClass('StudiesContainer-Item-Content__active').addClass('StudiesContainer-Item-Content__noActive');
	}
}

function showLanguages(){
	var className = $("#languagesSpan").attr('class');
	if(className=='icon-circle-down'){
		$("#languagesSpan").removeClass('icon-circle-down').addClass('icon-circle-up');
		$( "#languages" ).removeClass('StudiesContainer-Item-Content__noActive').addClass('StudiesContainer-Item-Content__active');
	}
	if(className=='icon-circle-up'){
		$("#languagesSpan").removeClass('icon-circle-up').addClass('icon-circle-down');
		$( "#languages" ).removeClass('StudiesContainer-Item-Content__active').addClass('StudiesContainer-Item-Content__noActive');
	}
}

})();