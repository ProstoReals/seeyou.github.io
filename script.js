

timeend= new Date();
timeend= new Date(timeend.getYear()>1900?(timeend.getYear()+1):(timeend.getYear()+1901),0,1);
function time() {
    today = new Date();
    today = Math.floor((timeend - today) / 1000);
    tsec = today % 60;
    today = Math.floor(today / 60);
    if (tsec < 10) tsec = '0' + tsec;
    tmin = today % 60;
    today = Math.floor(today / 60);
    if (tmin < 10) tmin = '0' + tmin;
    thour = today % 24;
    today = Math.floor(today / 24);
    timestr = today + " Дней " + thour + " Часа " + tmin + " Минут " + tsec + " Секунд ";
    document.getElementById('t').innerHTML = timestr;
    document.getElementById('title').innerHTML = "Осталось дней: " + today;
    window.setTimeout("time()", 1000);
}

var block = document.getElementById(1);
var block2 = document.getElementById(2);

var thisSecond2 = new Date(2023,0,1);

console.log("Date - " + thisSecond2);
today = new Date();
var times = today - thisSecond2;
times = Math.round(times) / 3600000 / 24;
times = Math.round(times);
// console.log("Разница - " + times);
var steps = times * 50 / 366;
// console.log("Шаг - " + steps);
step = 50 / 366;

move(block2, block, 0, 50, step, 31536000000, steps);

function move(element2, element, from2, to, step, delay, startbb = -1) {

    let position = parseFloat(element.style.left, 10);
    var from22 = from2;
    var from = from22;
    if (startbb > 0 ) {from = startbb;}

    position = isNaN(position) ? from : position;

    if (position >= to) {
        position = from;
        ourStep = 0;
    } else {
        position += step;

    }


    element.style.left = position + "%";
    element2.style.right = position + "%";
    //    setInterval(function () {
    var timerId = setTimeout(function () {
        move(element2, element, from22, to, step, delay);
    }, delay);

    if(position == 49.99641202185792) {
    position = Math.round(position);
    clearTimeout(timerId);
    summ = 100;
}
    var summ =  document.getElementById('block_summ').innerHTML= "Пройдено " + parseInt(position * 2) + "%";


}

var canvas;
var context;
var screenH;
var screenW;
var stars = [];
var fps = 60;
var numStars = 500;

$('document').ready(function() {
  
  // Calculate the screen size
    screenH = $(window).height();
    screenW = $(window).width();
    
    // Get the canvas
    canvas = $('#space');
    
    // Fill out the canvas
    canvas.attr('height', screenH);
    canvas.attr('width', screenW);
    context = canvas[0].getContext('2d');
    
    // Create all the stars
    for(var i = 0; i < numStars; i++) {
        var x = Math.round(Math.random() * screenW);
        var y = Math.round(Math.random() * screenH);
        var length = 1 + Math.random() * 1.5;
        var opacity = Math.random();
        
        // Create a new star and draw
        var star = new Star(x, y, length, opacity);
        
        // Add the the stars array
        stars.push(star);
    }
    
    animateInterval = setInterval(animate, 1000 / fps);
});

/**
 * Animate the canvas
 */
function animate() {
    context.clearRect(0, 0, screenW, screenH);
    $.each(stars, function() {
        this.draw(context);
    })
}

/* stop Animation */
function stopAnimation()
{
     clearInterval(animateInterval);
}

//stopAnimation();

function Star(x, y, length, opacity) {
    this.x = parseInt(x);
    this.y = parseInt(y);
    this.length = parseInt(length);
    this.opacity = opacity;
    this.factor = 1;
    this.increment = Math.random() * .10;
}

Star.prototype.draw = function() {
    context.rotate((Math.PI * 1 / 10));
    
    // Save the context
    context.save();
    
    // move into the middle of the canvas, just to make room
    context.translate(this.x, this.y);
    
    // Change the opacity
    if(this.opacity > 1) {
        this.factor = -1;
    }
    else if(this.opacity <= 0) {
        this.factor = 1;
        
        this.x = Math.round(Math.random() * screenW);
        this.y = Math.round(Math.random() * screenH);
    }
        
    this.opacity += this.increment * this.factor;
    
    context.beginPath()
    for (var i = 5; i--;) {
        context.lineTo(0, this.length);
        context.translate(0, this.length);
        context.rotate((Math.PI * 2 / 10));
        context.lineTo(0, - this.length);
        context.translate(0, - this.length);
        context.rotate(-(Math.PI * 6 / 10));
    }
    context.lineTo(0, this.length);
    context.closePath();
    context.fillStyle = "rgba(255, 255, 255, " + this.opacity + ")";
    context.shadowBlur = 5;
    context.shadowColor = '#fff';
    context.fill();
    
    context.restore();
}
