document.getElementById('background-controller').addEventListener('click', function(){
    document.body.style.background = rgbColor();

    function rgbColor(){
        let R = Math.floor(Math.random()* 256);
        let G = Math.floor(Math.random()* 256);
        let B = Math.floor(Math.random()* 256);
        let randomColor = "rgb(" + R + ","+ G + ',' + B + ")";
        return randomColor;
    }
})