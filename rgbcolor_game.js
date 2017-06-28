
    var colors=[
    	"rgb(255, 0, 0)  ",
    	"rgb(255, 255, 0)  ",
    	"rgb(0, 255, 0) ",
    	"rgb(0, 255, 255)  ",
    	"rgb(0, 0, 255)  ",
    	"rgb(255, 0, 255)  "   
    ];
    var square=document.querySelectorAll(".square");
    var pickedColor = colors[3];
    var colorDisplay=document.getElementById("colorDisplay");
    
      
    for(var i=0;i<square.length;i++){
    //add initial colors to squares
    	square[i].style.backgroundColor=colors[i];
    	//add click linstener
    	square[i].addEventListener("click", function(){	
    		//grab color of picked square
    		var clickedColor=this.style.backgroundColor;
    		//compare color to pickedColor
    		if(pickedColor===clickedColor){
    			alert("Correct");
    			//console.log(pickedColor);
    		}else{
    			alert("wrong!!!");
    		}
    	});
    }
    
       
 