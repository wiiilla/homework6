var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	video.play();
	console.log("Play Video");
	let vol = document.querySelector("#volume").innerHTML = video.volume * 100 + '%';
}); 

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
	console.log("Pause Video");
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate *= 0.9;
	console.log("New speed is " + video.playbackRate);
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate /= 0.9;
	console.log("New speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime + 5 > video.duration) {
		video.currentTime = 0 ;
	} else {
		video.currentTime += 5;
	}
	console.log("Current location " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == true) {
		video.muted = false;
		this.innerHTML = 'Mute';
	} else {
		video.muted = true;
		this.innerHTML = 'Unmute';
	}
});

document.querySelector("#volumeSlider").addEventListener("change", function() {
	video.volume = this.value / 100;
	let vol = document.querySelector("#volume").innerHTML = this.value + '%';
	console.log(video.volume);
});

document.querySelector("#old").addEventListener("click", function() {
	video.classList.add('oldTime')
});

document.querySelector("#original").addEventListener("click", function() {
	video.classList.remove('oldTime')
});