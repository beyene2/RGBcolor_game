var numSquares=6;
var colors=generateRandomcolors(numSquares);
var squares=document.querySelectorAll('.square');
var pickedColor=pickColor();
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton= document.querySelector("#reset");
//var easyBtn=document.querySelector("#easyBtn");
//var hardBtn=document.querySelector("#hardBtn");
var modeButtons=document.querySelectorAll(".mode");

	for(var i=0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			//this.classList.add("selected");	
			//this.textContent === "Easy" ?	numSquares = 3 : numSquares = 6;
			this.classList.add("selected");
		if (this.textContent === "Easy"){
			numSquares = 3;
		} else {
			numSquares = 6;
		}
			reset();
			//console.log(modeButtons);
		});
	}
	function reset(){
		colors=generateRandomcolors(numSquares);
		//pick a new random color from array
		pickedColor=pickColor();
		//change colorDisplay to match picked color
		colorDisplay.textContent=pickedColor;
		resetButton.textContent = "Reset";
		messageDisplay.textContent = "";
		//change color of squares
		for(var i=0; i < squares.length; i++){
			if(colors[i]){
				squares[i].style.display="block";
				squares[i].style.backgroundColor=colors[i];
			}else{
				squares[i].style.display = "none";
			}		
		}		
		h1.style.backgroundColor="steelblue";
	}
	resetButton.addEventListener('click',function(){
		
		reset();
	});

	colorDisplay.textContent = pickedColor;

	for(var i=0;i<squares.length;i++){
		//add initial colors to squares
		squares[i].style.backgroundColor=colors[i];

		squares[i].addEventListener('click',function(){
		
			var clickedColor=this.style.backgroundColor;
			//messageDisplay.textContent="Correct!";
			//reset.textContent="Play Again?";
			
			if(clickedColor===pickedColor){
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play";
				changeColors(clickedColor);
				h1.style.backgroundColor=clickedColor;	
			}else{
				//console.log("WRONG!!!");
				this.style.backgroundColor="#232323";
				messageDisplay.textContent="Try again";
				
				
			}
		});
	}
	function changeColors(color){
		for(var i = 0; i <squares.length; i++){
			squares[i].style.backgroundColor=color;
		}
	}
	function pickColor(){
		var random = Math.floor(Math.random() * colors.length);
		return colors[random];
		
	}
	function generateRandomcolors(num){
		var arr=[];	
		for(var i=0;i<num;i++){
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
		return "rgb("+ r + ", " + g + ", " + b +")";
	}
	
