
var image1 = new Image();
image1.src = 'gallery1.jpg';
var image2 = new Image();
image2.src = 'gallery2.jpg';
var image3 = new Image();
image3.src = 'gallery3.jpg';
var image4 = new Image();
image4.src = 'gallery4.jpg';


var step = 1;
function slideit(){
    if(!document.images)
        return;

    if (step < 4){
        step++;
        document.images.slide.src = eval('image'+ step + '.src');

    }
    else
        step = 1;
    setTimeout("slideit()",2500);
    
}

slideit();

