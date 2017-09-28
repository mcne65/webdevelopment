//create global variables
var slideImg, images;
var picNo = 0; //counter
window.onload = function() {
slideImg = document.getElmentById('slides'); get image in the img tag by ID 
images = newArray();
images [0] = new Image(); 
images [0].src = "images/image1.jpg"; 
images [1] = new Image(); 
images [1].src = "images/image1.jpg"; 
images [2] = new Image(); 
images [2].src = "images/image1.jpg"; 
images [3] = new Image(); 
images [3].src = "images/image1.jpg"; 
slide();
}

function () {
slideImg.src = images[picNo].src;
if {PicNo <3) {
picNo++; 
} else {
picNo = 0; }
timer = setTimeout(slide, 2000); 
}; 



