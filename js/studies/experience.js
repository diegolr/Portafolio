(function() {
var buttonIncibe= $("[data-button='incibe']");
var buttonFaitic = $("[data-button='faitic']");
var buttonPeritos = $("[data-button='peritos']");

buttonIncibe.on("click", showIncibe);
buttonFaitic.on("click", showFaitic);
buttonPeritos.on("click", showPeritos);

function showIncibe(){
	var className = $("#incibeSpan").attr('class');
	if(className=='icon-circle-down'){
		$("#incibeSpan").removeClass('icon-circle-down').addClass('icon-circle-up');
		$( "#incibe" ).removeClass('StudiesContainer-Item-Content__noActive').addClass('StudiesContainer-Item-Content__active');
	}
	if(className=='icon-circle-up'){
		$("#incibeSpan").removeClass('icon-circle-up').addClass('icon-circle-down');
		$( "#incibe" ).removeClass('StudiesContainer-Item-Content__active').addClass('StudiesContainer-Item-Content__noActive');
	}
	
}

function showFaitic(){
	var className = $("#faiticSpan").attr('class');
	if(className=='icon-circle-down'){
		$("#faiticSpan").removeClass('icon-circle-down').addClass('icon-circle-up');
		$( "#faitic" ).removeClass('StudiesContainer-Item-Content__noActive').addClass('StudiesContainer-Item-Content__active');
	}
	if(className=='icon-circle-up'){
		$("#faiticSpan").removeClass('icon-circle-up').addClass('icon-circle-down');
		$( "#faitic" ).removeClass('StudiesContainer-Item-Content__active').addClass('StudiesContainer-Item-Content__noActive');
	}
	
}

function showPeritos(){
	var className = $("#peritosSpan").attr('class');
	if(className=='icon-circle-down'){
		$("#peritosSpan").removeClass('icon-circle-down').addClass('icon-circle-up');
		$( "#peritos" ).removeClass('StudiesContainer-Item-Content__noActive').addClass('StudiesContainer-Item-Content__active');
	}
	if(className=='icon-circle-up'){
		$("#peritosSpan").removeClass('icon-circle-up').addClass('icon-circle-down');
		$( "#peritos" ).removeClass('StudiesContainer-Item-Content__active').addClass('StudiesContainer-Item-Content__noActive');
	}
	
}

})();