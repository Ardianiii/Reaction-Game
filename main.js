var circle = document.getElementById('circle');
var showTime = document.getElementById('showTime');
var timeStart = new Date().getTime()

function showCircle(){
    circle.style.display = 'block';
    circle.style.top = Math.random() * 990 + 'px';
    circle.style.left =  Math.random() * 950 + 'px';
    circle.style.backgroundColor = randomColor();
    timeStart = new Date().getTime();
}
showCircle();

circle.onclick = function(){
    circle.style.display = 'none';
    setTimeout(showCircle, 1000);
    var timeEnd = new Date().getTime();
    var time = (timeEnd - timeStart)/1000;
    showTime.innerHTML = time + 'sekona';
}
function randomColor(){
    var hexCode = '0123456789ABCDEF';
    var color = '#';

    for(var i = 0;  i <  6; i++) {
        color = color + hexCode[Math.floor(Math.random()* 16)];
    }
    return color;
}
