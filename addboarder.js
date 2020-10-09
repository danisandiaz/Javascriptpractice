var spimg = new SimpleImage("smallpanda.png");
var iH = spimg.getHeight();      
var iW = spimg.getWidth();

for (var pixel of spimg.values()){
     var x = pixel.getX()
     var y = pixel.getY()
    if (x <=10 || x>= iW-10 ){
     pixel.setRed(0);
     pixel.setBlue(0);
     pixel.setGreen(0);
    }
    if (y <=10 || y>= iH-10 ){
     pixel.setRed(0);
     pixel.setBlue(0);
     pixel.setGreen(0);
    }
}
print(spimg)
