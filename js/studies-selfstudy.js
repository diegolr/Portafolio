(function() {
var buttonBackend = $("[data-button='backend']");
var buttonBBDD = $("[data-button='BBDD']");
var buttonFrontend = $("[data-button='frontend']");
var buttonPhone = $("[data-button='phone']");
var buttonSecurity = $("[data-button='security']");

buttonBackend.on("click", showBackend);
buttonBBDD.on("click", showBBDD);
buttonFrontend.on("click", showFrontend);
buttonPhone.on("click", showPhone);
buttonSecurity.on("click", showSecurity);

function showBackend(){
	var className = $("#backendSpan").attr('class');
	if(className=='icon-circle-down'){
		$("#backendSpan").removeClass('icon-circle-down').addClass('icon-circle-up');
		$( "#backend" ).removeClass('StudiesContainer-Item-Content__noActive').addClass('StudiesContainer-Item-Content__active');
	}
	if(className=='icon-circle-up'){
		$("#backendSpan").removeClass('icon-circle-up').addClass('icon-circle-down');
		$( "#backend" ).removeClass('StudiesContainer-Item-Content__active').addClass('StudiesContainer-Item-Content__noActive');
	}
	
}

function showBBDD(){
	var className = $("#BBDDSpan").attr('class');
	if(className=='icon-circle-down'){
		$("#BBDDSpan").removeClass('icon-circle-down').addClass('icon-circle-up');
		$( "#BBDD" ).removeClass('StudiesContainer-Item-Content__noActive').addClass('StudiesContainer-Item-Content__active');
	}
	if(className=='icon-circle-up'){
		$("#BBDDSpan").removeClass('icon-circle-up').addClass('icon-circle-down');
		$( "#BBDD" ).removeClass('StudiesContainer-Item-Content__active').addClass('StudiesContainer-Item-Content__noActive');
	}
	
}

function showFrontend(){
	var className = $("#frontendSpan").attr('class');
	if(className=='icon-circle-down'){
		$("#frontendSpan").removeClass('icon-circle-down').addClass('icon-circle-up');
		$( "#frontend" ).removeClass('StudiesContainer-Item-Content__noActive').addClass('StudiesContainer-Item-Content__active');
	}
	if(className=='icon-circle-up'){
		$("#frontendSpan").removeClass('icon-circle-up').addClass('icon-circle-down');
		$( "#frontend" ).removeClass('StudiesContainer-Item-Content__active').addClass('StudiesContainer-Item-Content__noActive');
	}
}

function showPhone(){
	var className = $("#phoneSpan").attr('class');
	if(className=='icon-circle-down'){
		$("#phoneSpan").removeClass('icon-circle-down').addClass('icon-circle-up');
		$( "#phone" ).removeClass('StudiesContainer-Item-Content__noActive').addClass('StudiesContainer-Item-Content__active');
	}
	if(className=='icon-circle-up'){
		$("#phoneSpan").removeClass('icon-circle-up').addClass('icon-circle-down');
		$( "#phone" ).removeClass('StudiesContainer-Item-Content__active').addClass('StudiesContainer-Item-Content__noActive');
	}
}

function showSecurity(){
	var className = $("#securitySpan").attr('class');
	if(className=='icon-circle-down'){
		$("#securitySpan").removeClass('icon-circle-down').addClass('icon-circle-up');
		$( "#security" ).removeClass('StudiesContainer-Item-Content__noActive').addClass('StudiesContainer-Item-Content__active');
	}
	if(className=='icon-circle-up'){
		$("#securitySpan").removeClass('icon-circle-up').addClass('icon-circle-down');
		$( "#security" ).removeClass('StudiesContainer-Item-Content__active').addClass('StudiesContainer-Item-Content__noActive');
	}
}

})();