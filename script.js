var btn = document.getElementsByClassName('btn')[0],
    layer = document.getElementsByClassName('layer')[0],
    img = document.getElementsByClassName('img')[0],
    c = 0;

function layerImage() {
    if(c == 0){
        btn.innerHTML = "Cover";
        layer.style.display = "none";
        img.style.filter = "blur(0)";
        c = 1;
    }else{
        btn.innerHTML = "Remove Layer Image";
        layer.style.display = "block";
        img.style.filter = "blur(50px)";
        c = 0;
    }
}
