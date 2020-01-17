timeend= new Date();
timeend= new Date(timeend.getYear()>1900?(timeend.getYear()+1):(timeend.getYear()+1901),0,1);
alert("dfdf");
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
    timestr = today + " Дней " + thour + " Часов " + tmin + " Минут " + tsec + " Секунд ";
    document.getElementById('t').innerHTML = timestr;
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
console.log("Разница - " + times);
var steps = times * 50 / 366;
console.log("Шаг - " + steps);
step = 50 / 366;

move(block2, block, 0, 50, step, 31, steps);

function move(element2, element, from2, to, step, delay, startbb = -1) {

    let position = parseFloat(element.style.left, 10);
    var from22 = from2;
    var from = from22;
    console.log("from - " + from);
    console.log("from2 - " + from2);
    if (startbb > 0 ) {from = startbb;}

    position = isNaN(position) ? from : position;

    if (position >= to) {
        position = from;
        ourStep = 0;
    } else {
        position += step;
        console.log("Позиция - " + position);

    }


    element.style.left = position + "%";
    element2.style.right = position + "%";
    //    setInterval(function () {
    var timerId = setTimeout(function () {
        move(element2, element, from22, to, step, delay);
    }, delay);
    document.getElementById('block_summ').innerHTML= "Пройдено " + parseInt(position * 2) + "%";
    if(position == 100) {
    clearTimeout(timerId);
        console.log(timerId);
    steps = 50;
}
}
