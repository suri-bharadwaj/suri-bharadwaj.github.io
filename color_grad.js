var colors = []
var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var h3 = document.querySelector("h3");
var body = document.querySelector("body");
var button = document.querySelector("button");


function setGradient(){
	body.style.background = "linear-gradient(to right,"+color1.value+","+color2.value+")";
	h3.textContent = body.style.background;
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", randomColors);

function randomColors(){
	for(i = 0; i<2; i++){	
	var red = Math.floor(Math.random()*258);
	var green = Math.floor(Math.random()*258);
	var blue = Math.floor(Math.random()*258);
	colors[i] = "rgb("+red+", "+green+", "+blue+")";
	}
	//linear-gradient(to right, rgb(0, 0, 0), rgb(0, 0, 0))
	body.style.background = "linear-gradient(to right,"+colors[0]+","+colors[1]+")";
	h3.textContent = body.style.background;
}

//Print reverse
var numbers = [1,2,3,4,5];
for(var i = numbers.length - 1; i>=0; i--){
	console.log(numbers[i])
}

//Isuniform
var id = [1,1,1,1];
function isUniform(){
	var first = id[0];
	for(i=1;i<id.length;i++){
		if(first !== id[i]){
			return false;
		}
	}
	return  true;
}
function isUniform1(){
	var first = id[0];
	id.forEach(function(){
		if(first !== element){
			return false;
		}return true;
	})
}

//sunArray
var num = [1,2,3,4,5]
sum = 0;
for(i=0;i<num.length;i++){
	sum = sum + num[i];
}

var integers = [1,2,3,4,5,6,5,10]
math.max(integers)

var movies = [
	{
		title: "Mungaru male",
		rating: "5 star",
		hasWatched: true
	},
	{
		title: "Duniya",
		rating: "3 star",
		hasWatched: true
	},
	{
		title: "thithi",
		rating: "3.5 star",
		hasWatched: false
	},
	
]

movies.forEach(function(element){
	console.log(buildString(element))
})

function buildString(element){
	var result = "You have ";
	if(element.hasWatched)
		{
			result += "watched ";
		} else {
			result += "not watched "
		}
		result += "\""+element.title+"\""+" - "+element.rating;
		return result;
}