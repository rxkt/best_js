console.log("???");

var cow=document.getElementById("cow");

//add moving cow
    
var toInt = function(e){
    return parseInt(e.substring(0,e.length-2));
}

var random_num = function(x){
    return parseInt(Math.random()*x);
}
function toRad(Value) {
    /** Converts numeric degrees to radians */
    return Value * Math.PI / 180;
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
    setInterval(timer,50);
    var width = document.documentElement.clientWidth;
    var height = document.documentElement.clientHeight;
    cow.style.position= 'absolute';
    cow.style.left=random_num(width-128)+'px';
    cow.style.top=random_num(height-128)+'px';
    cow.speed=10;
    cow.heading=random_num(360);
    window.addEventListener("mousemove",function(e){
	//console.log(e.pageX+" "+e.pageY);
	mouseX = e.pageX;
	mouseY = e.pageY;
	updateVolume();
    });
    function timer(){
	var x = cow.style.top;
	x = parseInt(x.substring(0,x.length-2));
	x = x + cow.speed*Math.cos(toRad(cow.heading));
	var y = cow.style.top;
	y = parseInt(y.substring(0,y.length-2));
	y = y + cow.speed*Math.sin(toRad(cow.heading));
	
	if(x<0 || y<0 || x>width || y>height){
	    cow.heading=(cow.heading+180)%360;//still buggy, bounds uncertain?
	}
	cow.style.top= y+"px";
	cow.style.left= x+"px";
	cow.heading=(cow.heading+random_num(10)-5);
	console.log(cow.heading);
	
    }

    function updateVolume(){
	var cowX = toInt(cow.style.left)+64;
	var cowY = toInt(cow.style.top)+64;
	var deltaX = (cowX-mouseX)/(width-64);
	var deltaY = (cowY-mouseY)/(height-64);	
	var dist = Math.sqrt((deltaX*deltaX)+(deltaY*deltaY));
	var newVol = 1-dist;
	//console.log(newVol);
	music.volume = newVol;
    }
}
var button=document.getElementById("b");
button.addEventListener('click',start);

//bg music???

