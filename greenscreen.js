var fgImage = new SimpleImage("drewRobert.png");
var bgImage = new SimpleImage("dinos.png");
var outPut = new SimpleImage(fgImage.getWidth(), fgImage.getHeight());

for(var pixel of fgImage.values()){
    if (pixel.getGreen()> 225){
        var x = pixel.getX();
        var y = pixel.getY();
        var bgPixel = bgImage.getPixel(x, y);
        outPut.setPixel(x, y, bgPixel);
    }
    else {
        outPut.setPixel(pixel.getX(), pixel.getY(), pixel);
    }
    }
print(outPut);
