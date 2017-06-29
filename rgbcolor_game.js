var numSquares=6;
var colors=generateRandomcolors(numSquares);

var squares=document.querySelectorAll('.square');
var pickedColor=pickColor();
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var reset = document.querySelector("#reset");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");

	colorDisplay.textContent = pickedColor;
	easyBtn.addEventListener('click', function(){
		easyBtn.classList.add("selected");
		hardBtn.classList.remove("selected");
		numSquares=3;
		colors=generateRandomcolors(numSquares);
		pickedColor=pickColor();
		colorDisplay.textContent = pickedColor;
		for(var i=0;i<squares.length;i++){
			if(colors[i]){
			squares[i].style.backgroundColor=colors[i];
			
			}else{
				squares[i].style.display="none";
			}
		}
	});
	hardBtn.addEventListener('click', function(){
		hardBtn.classList.add("selected");
		easyBtn.classList.remove("selected");
		numSquares=6;
		colors=generateRandomcolors(numSquares);
		pickedColor=pickColor();
		colorDisplay.textContent = pickedColor;
		for(var i = 0; i <squares.length; i++){			
			squares[i].style.backgroundColor = colors[i];		
			squares[i].style.display="block";
			}
		
		
	});
	
	
	reset.addEventListener('click',function(){
		//reset.style.backgroundColor="green";
		//generate all new colors
		colors=generateRandomcolors(numSquares);
		//pick a new random color from array
		pickedColor=pickColor();
		//change colorDisplay to match picked color
		colorDisplay.textContent=pickedColor;
		//change color of squares
		for(var i=0;i < squares.length; i++){
			squares[i].style.backgroundColor=colors[i];
		}
		
		h1.style.backgroundColor="#232323";
		
		
	});

	
	
	for(var i=0;i<squares.length;i++){
		//console.log(squares[i]);
		squares[i].style.backgroundColor=colors[i];
		squares[i].addEventListener('click',function(){
		
			var clickedColor=this.style.backgroundColor;
			messageDisplay.textContent="Correct!";
			reset.textContent="Play Again?";
			//console.log(clickedColor);
			//console.log(clickedColor, pickedColor);
			if(clickedColor===pickedColor){
				//console.log("Correct!");
				changeColor(clickedColor);
				h1.style.backgroundColor=clickedColor;	
			}else{
				console.log("WRONG!!!");
				this.style.backgroundColor="#232323";
				messageDisplay.textContent="try again";
				
				
			}
		})
	}
	function changeColor(color){
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
