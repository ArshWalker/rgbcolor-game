// var colors = [
//     "rgb(255, 0, 0)",
//     "rgb(255, 255, 0)",
//     "rgb(0, 255, 0)",
//     "rgb(0, 255, 255)",
//     "rgb(0, 0, 255)",
//     "rgb(255, 0, 255)"
// ]

// var squares = document.querySelectorAll(".square");
// var pickedColor = colors[3];
// console.log(pickedColor);
// var colorDisplay = document.querySelector("#colorDisplay");

// colorDisplay.textContent = pickedColor;

// for (var i = 0; i < squares.length; i++){
//     squares[i].style.background = colors[i];

//     squares[i].addEventListener("click", function(){
//       var clickedColor = this.style.background;

//       if(clickedColor === pickedColor){
//         alert("correct");
//       } else {
//         alert("wrong");
//       }
//     });
// }

	
	var numOfSquares = 6;
	var colors = genrateRandomColors(numOfSquares);
    var squares = document.querySelectorAll(".square");
    var pickedColor = pickColor();
    var colorDisplay = document.getElementById("colorDisplay");
    var messageDisplay = document.querySelector("#message"); 
    var h1 = document.querySelector("h1");
    var resetButton = document.querySelector("#reset");
    var easyBtn = document.querySelector("#easyBtn");
	var hardBtn = document.querySelector("#hardBtn");


	easyBtn.addEventListener("click" , function(){
		hardBtn.classList.remove("selected");
		this.classList.add("selected");
		numOfSquares = 3;
		colors = genrateRandomColors(numOfSquares);
		pickedColor = pickColor();
		colorDisplay.textContent = pickedColor;	
		for(var i = 0; i < squares.length; i++){ 
        // add initial colors to squares
        if(colors[i]){
        	squares[i].style.background = colors[i];
        	squares[i].classList.add(colors[i]);
     }else{
     	squares[i].style.display = "none"; 
     }
    }
	});

	hardBtn.addEventListener("click" , function(){
		easyBtn.classList.remove("selected");
		this.classList.add("selected");
		numOfSquares = 6; 
		colors = genrateRandomColors(numOfSquares);
		pickedColor = pickColor();
		colorDisplay.textContent = pickedColor;	
		for(var i = 0; i < squares.length; i++){ 
        // add initial colors to squares
        
        	squares[i].style.background = colors[i];
        	squares[i].classList.add(colors[i]);
    		squares[i].style.display = "block"; 
     }
	});

    resetButton.addEventListener("click" , function(){

    	colors = genrateRandomColors(numOfSquares);

    	pickedColor = pickColor();

    	colorDisplay.textContent = pickedColor;

    	resetButton.textContent = "New Colors";

    	messageDisplay.textContent = "";
    	for(var i = 0; i < squares.length; i++){ 
        // add initial colors to squares
        squares[i].style.background = colors[i];
         squares[i].classList.add(colors[i]);
    }
    	h1.style.background = "steelblue";
    });
    
     colorDisplay.textContent = pickedColor;

    for(var i = 0; i <squares.length;i++){ 
        // add initial colors to squares
        squares[i].style.background = colors[i];
        // add as class
        squares[i].classList.add(colors[i]);
        // add click listeners to squares
        squares[i].addEventListener ("click",function() {
          // compare color to pickedColor
          if(this.classList.contains(pickedColor)){ 
              messageDisplay.textContent = "Correct!";
              resetButton.textContent = "Play Again?";
              changeColors(pickedColor);
              h1.style.background = pickedColor;
			} else {
			 this.style.background = "#232323";
			 messageDisplay.textContent = "Try Again";
          }
        });
     }

     function changeColors(color){
     	for(var i = 0; i < squares.length; i++){
     		squares[i].style.background = color;
     	}
     }

     function pickColor(){
     	var random = Math.floor(Math.random() * colors.length);
     	return colors[random];
     }

     function genrateRandomColors(num){
     	var arr = [];

     	for(var i = 0; i < num; i++){
     		arr.push(randomColor());
     	}

     	return arr;
     }

     function randomColor(){
     	//pick red,greeen,blue frm 0 - 255
     	var r = Math.floor(Math.random() * 256);
     	var g = Math.floor(Math.random() * 256);
     	var b = Math.floor(Math.random() * 256);
     	return "rgb(" + r + "," + g + "," + b + ")"	;
     }