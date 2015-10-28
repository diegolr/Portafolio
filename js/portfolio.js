(function() {

	var buttonUvigo = $("[data-button='uvigo']");
	var buttonMistic =  $("[data-button='mistic']");
	var buttonMyportfolio = $("[data-button='my-portfolio']");
	var buttonBack = $("[data-button='back']");

	buttonUvigo.on("click", loadUvigo);
	buttonMistic.on("click", loadMistic);
	buttonMyportfolio.on("click", loadMyportfolio);
	buttonBack.on("click", loadMain);

	function loadUvigo(){
		$( "#portfolio" ).load( "templates/portfolio/uvigo.html" );
	}

	function loadMistic(){
		$( "#portfolio" ).load( "templates/portfolio/mistic.html" );
	}

	function loadMyportfolio(){
		$( "#portfolio" ).load( "templates/portfolio/my-portfolio.html" );
	}

	function loadMain(){
		$( "#main" ).load( "templates/portfolio.html" );
	}

})();