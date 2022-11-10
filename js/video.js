var video = document.getElementById("player1");

window.addEventListener("load", pageLoad());

function pageLoad(){
	video.autoplay = false;
	video.muted = true;
	video.loop = false;
	video.load();
}

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.muted = false;
	var volInfo = document.getElementById("slider").value / 100;
	video.volume = volInfo;
	document.getElementById("volume").innerHTML = volInfo*100 + '%';
	video.play();
});

document.querySelector("#pause").addEventListener("click", function(){
	console.log("Pause Video");
	video.pause();
})

document.querySelector("#slower").addEventListener("click", function(){
	console.log("Slow down");
	video.playbackRate = video.playbackRate * 0.9;
	console.log(video.playbackRate);
})

document.querySelector("#faster").addEventListener("click", function(){
	console.log("Speed up");
	video.playbackRate = video.playbackRate * 1.1;
	console.log(video.playbackRate);
})

document.querySelector("#skip").addEventListener("click", function(){
	console.log("skip");
	var skipTime = video.currentTime + 10;

	if(skipTime >= video.duration){
		video.currentTime = 0;
		console.log("The current video time is: " + video.currentTime);
	}
	else{
		video.currentTime = skipTime;
		console.log("The current video time is: " + video.currentTime);
	}

	
})

document.querySelector("#mute").addEventListener("click", function(){
	if(video.muted === true){
		video.muted = false;
		document.getElementById("mute").innerHTML = "Mute";
	}
	else{
		video.muted = true;
		document.getElementById("mute").innerHTML = "Unmute";
	}
})

document.querySelector("#slider").addEventListener("change", function(){
	var volInfo = document.getElementById("slider").value / 100;
	video.volume = volInfo;
	document.getElementById("volume").innerHTML = volInfo*100 + '%';
})


const list = video.classList;

document.querySelector("#vintage").addEventListener("click", function(){
	console.log("vintage");
	list.add("oldSchool");
})

document.querySelector("#orig").addEventListener("click", function(){
	console.log("original");
	list.remove("oldSchool");
})




