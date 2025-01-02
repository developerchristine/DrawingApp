//function to create linetotool
function LineToTool(){
	this.icon = "assets/lineTo.jpg";
	this.name = "LineTo";

	//variable naming for mouse starting points, encapsulated variables
	var startMouseX = -1;
	var startMouseY = -1;
	var drawing = false; //variable to identify active drawing

	//functions that handles drawing lines
	this.draw = function(){

		//mouse event that is true if mouse pressed
		if(mouseIsPressed){ //if mouse is pressed, perform the logic
			if(startMouseX == -1){
				startMouseX = mouseX; //tracks horizontal
				startMouseY = mouseY; //tracks vertical
				drawing = true; //once we have coordinates X,Y start drawing
				loadPixels(); //must be called before reading from or writing to pixels
			}

			else{
				updatePixels();//only needs to be called after changing values in the pixels array. 
				line(startMouseX, startMouseY, mouseX, mouseY); //first 2 parameters are anchor point, and other 2 parameters are end points
				
			}

		}

		else if(drawing){
			drawing = false; //turn off drawing mode
			startMouseX = -1; //reset back to default values
			startMouseY = -1; //resent back to default values
		}
	};


}
