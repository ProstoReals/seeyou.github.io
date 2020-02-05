

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

var thisSecond2 = new Date(2020,0,1);
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

((l)=>{
    let $ = l.getContext('2d'),
        w = l.width = window.innerWidth,
        h = l.height = window.innerHeight,
        pi2 = Math.PI*2,
        random = t=>Math.random()*t,
        binRandom = (f)=>Math.random()<f,
        arr = new Array(500).fill().map((p)=>{
            return {
                p: {x: random(w), y: random(h)},
                v: {x: random(.5) * (binRandom(.5)?1:-1), y: random(.5) * (binRandom(.5)?1:-1)},
                s: random(1)+2,
                o: random(1)+.3
            }
        });
    function draw(){
        (h !== innerHeight || w!==innerWidth) && (w=c.width=innerWidth,h=c.height=innerHeight);
        $.fillStyle="#000";
        $.fillRect(0,0,w,h);
        arr.forEach(p=>{
            p.p.x+=p.v.x;
            p.p.y+=p.v.y;
            if(p.p.x > w || p.p.x < 0) p.v.x *=-1;
            if(p.p.y > h || p.p.y < 0) p.v.y *=-1;
            $.beginPath();
            $.arc(p.p.x,p.p.y,p.s,0,pi2);
            $.closePath();
            $.fillStyle = "rgba(255,255,255,"+p.o+")";
            $.fill();
        })
        requestAnimationFrame(draw)
    }
    draw();
})(l);

((r)=>{
    let $ = r.getContext('2d'),
        w = r.width = window.innerWidth,
        h = r.height = window.innerHeight,
        pi2 = Math.PI*2,
        random = t=>Math.random()*t,
        binRandom = (f)=>Math.random()<f,
        arr = new Array(500).fill().map((p)=>{
            return {
                p: {x: random(w), y: random(h)},
                v: {x: random(.5) * (binRandom(.5)?1:-1), y: random(.5) * (binRandom(.5)?1:-1)},
                s: random(1)+2,
                o: random(1)+.3
            }
        });
    function draw(){
        (h !== innerHeight || w!==innerWidth) && (w=c.width=innerWidth,h=c.height=innerHeight);
        $.fillStyle="#fff";
        $.fillRect(0,0,w,h);
        arr.forEach(p=>{
            p.p.x+=p.v.x;
            p.p.y+=p.v.y;
            if(p.p.x > w || p.p.x < 0) p.v.x *=-1;
            if(p.p.y > h || p.p.y < 0) p.v.y *=-1;
            $.beginPath();
            $.arc(p.p.x,p.p.y,p.s,0,pi2);
            $.closePath();
            $.fillStyle = "rgba(0,0,0,"+p.o+")";
            $.fill();
        })
        requestAnimationFrame(draw)
    }
    draw();
})(r)
