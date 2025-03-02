document.getElementById('background-controller').addEventListener('click', function(){
    document.body.style.background = rgbColor();

    function rgbColor(){
        let r = Math.floor(Math.random()* 256);
        let g = Math.floor(Math.random()* 256);
        let b = Math.floor(Math.random()* 256);
        let randomColor = "rgb(" + r + ","+ g + ',' + b + ")";
        // console.log(r,g,b, randomColor);
        return randomColor;
    }
})