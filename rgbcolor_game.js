var colors=generateRandomecolors(6);

var squares=document.querySelectorAll('.square');
var pickedColor=pickColor();
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#message");

	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++){
		//console.log(squares[i]);
		squares[i].style.backgroundColor=colors[i];
		squares[i].addEventListener('click',function(){
			var clickedColor=this.style.backgroundColor;
			messageDisplay.textContent="Correct!";
			//console.log(clickedColor);
			if(clickedColor===pickedColor){
				console.log("Correct!");
				changeColor(clickedColor);
				console.log(clickedColor);
			}else{
				console.log("WRONG!!!");
				this.style.backgroundColor="black";
				messageDisplay.textContent="try again";
				
			}
		})
	}
	function changeColor(color){
		for(var i=0;i<squares.length;i++){
			squares[i].style.backgroundColor=color;
		}
	}
	function pickColor(){
		var random=Math.floor(Math.random()*colors.length);
		return colors[random];
		
	}
	function generateRandomcolors(num){
		var arr=[];
		
		for(var i=0;i<num.length;i++){
			//num[i].push(arr);
			//console.log(arr[i]);
		}
		return arr;
	}
	
	function randomColor(){
		//pick a red from 0-255;
		var r=Math.floor(Math.random()*256);
		//pick a green from 0-255;
		var g=Math.floor(Math.random()*256);
		//pick a blue from 0-255;
		var b=Math.floor(Math.random()*256);
		return "rgb("+r+","+g+","+b+")";
	}
