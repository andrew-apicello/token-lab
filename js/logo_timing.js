 $(window).on('load', function () {

 	document.getElementById('movieHeader').style.display = "block";

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

 	// console.log('begin timeout function')
 	// setTimeout(function(){ initiateLoopSmoother(); }, 15900);
 	// setTimeout(function(){ $("#customImage").fadeIn(500); }, 3000);
 	// setTimeout(function(){ $("#customHeader").fadeIn(1500); }, 1000);

 	setTimeout(function(){
 		document.getElementById('movieHeader').style.filter = "brightness(0%)";
 		document.getElementById('movieHeaderTwo').style.opacity = 1;

 		var vid = document.getElementById("movieHeaderTwo"); 
 		var vidOne = document.getElementById("movieHeader"); 


 		function playVid() { 
 			vid.play(); 
 		} 
 		playVid();

 		function pauseVid() { 
 			vidOne.pause(); 
 		}

 	}, 11000);


	//MyShare Center Icon
	$(document).ready(function(){
		$("#customImage").fadeOut(0);
		$("#customHeader").fadeOut(0); 
	});
});
