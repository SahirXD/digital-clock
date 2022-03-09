var hourTag = document.getElementById('hours');
var minutesTag = document.getElementById('minutes');
var secondsTag = document.getElementById('seconds');
var typeTag = document.getElementById('type');

function getCurrentTime(){
	let today = new Date();
	let hours = today.getHours();
	let minutes = today.getMinutes();
	let seconds = today.getSeconds();
	hourTag.innerHTML = hours;
	//convert 24 hours to 12 hours format
	if(hours==13){
		hourTag.innerHTML = "1"
	}
	if(hours>14){
		hourTag.innerHTML = "2"
	}
	if(hours==15){
		hourTag.innerHTML = "3"
	}
	if(hours==16){
		hourTag.innerHTML = "4"
	}
	if(hours==17){
		hourTag.innerHTML = "5"
	}
	if(hours==18){
		hourTag.innerHTML = "6"
	}
	if(hours==19){
		hourTag.innerHTML = "7"
	}
	if(hours==20){
		hourTag.innerHTML = "8"
	}
	if(hours==21){
		hourTag.innerHTML = "9"
	}
	if(hours==22){
		hourTag.innerHTML = "10"
	}
	if(hours==23){
		hourTag.innerHTML = "11"
	}
	if(hours==24){
		hourTag.innerHTML = "12"
	}
	
	//check its AM or PM
	if(hours>12){
		typeTag.innerHTML = "PM"
	}else{
		typeTag.innerHTML = "AM"
	}
	minutesTag.innerHTML = minutes;
	secondsTag.innerHTML = seconds;
	let audio = new Audio();
	audio.src = "Assets/Audio/clock-beep.wav";
	audio.play();
}
function beautifyClock(){
	hourTag.style.color = "green"
	minutesTag.style.color = "red"
	secondsTag.style.color = "blue"
}
document.body.onload = function(){
	beautifyClock();
}
setInterval(getCurrentTime,1000)