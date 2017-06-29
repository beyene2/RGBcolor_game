
var colors = generateRandomeColors(6);


var squares=document.querySelectorAll(".square");
var pickedColor=pickColor();
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");


	colorDisplay.textContent=pickedColor;

	for(var i = 0; i < squares.length; i++){
		//console.log(squares[i]);
		squares[i].style.backgroundColor=colors[i];

		squares[i].addEventListener('click',function(){
			var clickedColor=this.style.backgroundColor;
			console.log(clickedColor, pickedColor);
			
			//console.log(clickedColor);
			if(clickedColor===pickedColor){
				messageDisplay.textContent="Correct!";
				//console.log("Correct!");
				changeColors(clickedColor);
				//console.log(clickedColor);
				h1.style.backgroundColor = clickedColor;
			}else{
				//console.log("WRONG!!!");
				this.style.backgroundColor="#232323";
				messageDisplay.textContent="try again";
				
			}
		});
	}

	function changeColors(color){
		for(var i = 0;i <  squares.length; i++){
			squares[i].style.backgroundColor=color;
		}
	}
	function pickColor(){
		var random=Math.floor(Math.random() * colors.length);
		return colors[random];
		
	}

	function generateRandomeColors(num){
		var arr=[];
		//get random color and push to arr
		for(var i = 0;i < num; i++){
			arr.push(randomColor());
		}
		return arr;
	}
	
	function randomColor(){
		//pick a red from 0-255;
		var r = Math.floor(Math.random() * 256);
		//pick a green from 0-255;
		var g = Math.floor(Math.random() * 256);
		//pick a blue from 0-255;
		var b = Math.floor(Math.random() * 256);
		return "rgb(" + r +", " + g +", " + b + ")";
		
	}
