console.log("???");


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
    setInterval(timer,500);
    function timer(){
	//console.log("printed line");
	//try hiding the cow
    }
}
var button=document.getElementById("b");
button.addEventListener('click',start);

//bg music???

