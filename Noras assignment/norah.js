var i = 0;
var image=[];
var time=3000;

images[0]='server.jpg';
images[1]='programing.jpg';
images[2]='programer.jpg';

function changing(){

    document.norah.src=image[i];
    if(i<images.length -1) {
        i++
    }
    else{
        i=0;
    }
    setTimeout("changing()", time);
}
window.onload=changing;