
	var decreaseBrightness = function(){
		console.log('decreaseBrightness');
		document.getElementById('movieHeader').style.filter = "brightness(0%)";

		setTimeout(function(){increaseBrightness();},1000)
	};

	var increaseBrightness = function(){
		console.log('increaseBrightness')
		document.getElementById('movieHeader').style.filter = "brightness(100%)";
	};

	var loopSmoother = function(){
		console.log('loop smoother')
		setInterval(decreaseBrightness, 16000);
	};

	var initiateLoopSmoother = function(){
		console.log('initiate loop smoother')
		decreaseBrightness();
		loopSmoother();
	};

	console.log('begin timeout function')
	setTimeout(function(){ initiateLoopSmoother(); }, 16000);
	setTimeout(function(){ $("#customImage").fadeIn(500); }, 3100);
	setTimeout(function(){ $("#customHeader").fadeIn(1500); }, 1000);
	

	//MyShare Center Icon
	$(document).ready(function(){
        $("#customImage").fadeOut(0);
        $("#customHeader").fadeOut(0); 
    });

