console.log("???");
var toInt = function(e){
    return parseInt(e.substring(0,e.length-2));
}
var random_num = function(x){
    return parseInt(Math.random()*x);
}
function toRad(value) {
    /** Converts numeric degrees to radians */
    return (value * Math.PI) / 180;
}
function abs_value_from(value1,value2){
    /** Finds the difference between the 2 values **/
    /** used in heading changing **/
    return Math.abs(value1-value2);
}

var width = document.documentElement.clientWidth;
var height = document.documentElement.clientHeight;
    

var cow=document.getElementById("cow");
cow.speed=3;
cow.heading=0;
cow.style.position="absolute";
cow.style.left="200px";
cow.style.top="200px";
cow.addEventListener('click',
		     function(e){
			 console.log("swigity swag clicked circle");
			 document.getElementById("trap").play();
		     });
var changeLoc = function(x,y){
    cow.style.left=x;
    cow.style.top=y;
}
setInterval(timer,50);

function timer(e){
    var x = cow.style.left;
    x =  parseInt(x.substring(0,x.length-2));
    x = Math.floor(x + cow.speed*Math.cos(toRad(cow.heading)));
    var y = cow.style.top;
    y = parseInt(y.substring(0,y.length-2));
    y = Math.floor(y + cow.speed*Math.sin(toRad(cow.heading)));
    //console.log(Math.sin(toRad(cow.heading)));
    //console.log(Math.cos(toRad(cow.heading)));
    //console.log("heading"+cow.heading);
    if(x<0 && abs_value_from(180,cow.heading) < 90){
	cow.heading=(180-cow.heading)%360;
    }else if (x>width-128 &&abs_value_from(0,cow.heading) <90){
	cow.heading=(180-cow.heading)%360;
    }else if (y<0 && abs_value_from(90,cow.heading) < 90){
	cow.heading=(360-cow.heading)%360;
    }else if(y>height-128 && abs_value_from(270,cow.heading)<90){
	cow.heading=(360-cow.heading)%360;
    }
    changeLoc(x+"px",y+"px")
    //console.log("cow is at:"+x+","+y);
    //cow.heading=(cow.heading+random_num(2)-1);
    //console.log(cow.heading);
    //console.log(width);	
}   
function updateVolume(){
    
}
var button=document.getElementById("b");
var start=function(){
    console.log("started your stupid game");
    music = new Audio("cantina.mp3");
    music.addEventListener("ended",function () {
	this.currentTime = 0;
	this.play();
    }, false);
    music.play();
    window.addEventListener("mousemove",function(e){
	//console.log(e.pageX+" "+e.pageY);
	mouseX = e.pageX;
	mouseY = e.pageY;	
	var x = cow.style.left.substring(0,cow.style.left.length-2);
	var y = cow.style.top.substring(0,cow.style.top.length-2);
	x = parseInt(x)+64;
	y = parseInt(y)+64;
	var deltaX = (x-mouseX)/(width-64);
	var deltaY = (y-mouseY)/(height-64);	
	var dist = Math.sqrt((deltaX*deltaX)+(deltaY*deltaY));
	var newVol = 1-dist;
	console.log(newVol);
	music.volume = newVol;
    });
}
button.addEventListener('click',start);
