console.log("???");

var random_num = function(x){
    return parseInt(Math.random()*x);
}


var obj=document.getElementById("cow");
obj.addEventListener('click',
			 function(e){
			     console.log(e);
			     console.log(this);
			 });
var button=document.getElementById("b");
button.addEventListener('click',start);

var start=function(){
    setInterval(timer,500);
    function timer(){
	console.log("printed line");
	//read up on how to display cow based on form in html (hidden, etc)
    
	//also add keyboard listener for osu play style
    }
}

button.addEventListener('click',start);

//bg music???

