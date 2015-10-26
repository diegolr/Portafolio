(function() {
var buttonFaitic = $("[data-button='faitic']");
var buttonPeritos = $("[data-button='peritos']");

buttonFaitic.on("click", showFaitic);
buttonPeritos.on("click", showPeritos);

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