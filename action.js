console.log("???");

var cow=document.getElementById("cow");

//add moving cow
    
var toInt = function(e){
    return parseInt(e.substring(0,e.length-2));
}

var random_num = function(x){
    return parseInt(Math.random()*x);
}

var obj=document.getElementById("cow");
obj.addEventListener('click',
		     function(e){
			 //console.log(e);
			 //console.log(this);
			 console.log("swiggity swag clicked circle");
			 document.getElementById("trap").play();
		     });
//also add keyboard listener for osu play style


var start=function(){

    console.log("started your stupid game");
    music = new Audio("cantina.mp3");
    music.addEventListener("ended",function () {
	this.currentTime = 0;
	this.play();
    }, false);
    music.play();
    //setInterval(timer,50);
    var width = document.documentElement.clientWidth;
    var height = document.documentElement.clientHeight;
    
    cow.style.position= 'absolute';
    cow.style.left=random_num(width-128)+'px';
    cow.style.top=random_num(height-128)+'px';
    //cow.style.left='100%';
    //cow.style.top='100%';
    window.addEventListener("mousemove",function(e){
	//console.log(e.pageX+" "+e.pageY);
	mouseX = e.pageX;
	mouseY = e.pageY;
	updateVolume();
    });
    function updateVolume(){
	var cowX = toInt(cow.style.left)+64;
	var cowY = toInt(cow.style.top)+64;
	var deltaX = (cowX-mouseX)/(width-64);
	var deltaY = (cowY-mouseY)/(height-64);	
	var dist = Math.sqrt((deltaX*deltaX)+(deltaY*deltaY));
	var newVol = 1-dist;
	console.log(newVol);
	music.volume = newVol;
    }
}
var button=document.getElementById("b");
button.addEventListener('click',start);

//bg music???

