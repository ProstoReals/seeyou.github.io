<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="style.css">
    <title id = "title"></title>
    <style>

    </style>
</head>
<body onload="time()" style="padding: 0; margin: 0; font-family: sans-serif;">
<audio  controls>
    <source src="billie-eilish-i-love-you(mp3-top.info).mp3">
</audio>
    <div class="black" style="color: #fff; background: #000; width: 50%; position:fixed; height: 100%;">
        <canvas id="l"></canvas>
    </div>
    <div class="white" style="width: 50%; position:fixed; height: 100%; margin-left: 50%">
        <canvas id="r"></canvas>
    </div>

<span id="t"></span>
    <div class="slide1" id="1">
        <img src="R.png"  />
    </div>
    <span id="block_summ"></span>
    <div class="slide2" id="2">
        <img src="l.png"  />
    </div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
<script src="script.js"></script>
</body>
</html>
