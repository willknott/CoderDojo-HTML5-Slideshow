var image1=new Image()
image1.src="coderdojologo1.png";
var image2=new Image()
image2.src="coderdojologo2.png";

var numberOfImages = 2;
// this number should match the number of
// image objects above

var step=1;
function slideit(){
	step++;
    document.images.slide.src=eval("image"+step+".src");
}
//call the function first time to start the image appearing
slideit()
