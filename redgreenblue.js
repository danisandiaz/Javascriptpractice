var flimg = new SimpleImage("hippieflower.jpg");  //SimpleImage is from Duke Learning Lib
var flH = flimg.getHeight();                      // flimg is image selected
var flW = flimg.getWidth();
var flH = (flH/12);
var flW = (flW/12);

flimg.setSize(flW, flH);


for (var pixel of flimg.values()){
    var x = pixel.getX()
    if (x <= flW/3){
     pixel.setRed(255);
    }
    if (x >flW/3 && x ()< (2*(flW/3))){
     pixel.setGreen(255);
    }
    if (x >= (2*(flW/3))){
     pixel.setBlue(255);
    }
}
print(flimg);
