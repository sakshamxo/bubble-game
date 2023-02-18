var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var bubbles = [];

setInterval(function() {
  var x = Math.random() * canvas.width;
  var y = Math.random() * canvas.height;
  var radius = Math.random() * 50 + 10;
  var bubble = {
    x: x,
    y: y,
    radius: radius
  };
  bubbles.push(bubble);
}, 1000);

function drawBubbles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < bubbles.length; i++) {
      ctx.beginPath();
      ctx.arc(bubbles[i].x, bubbles[i].y, bubbles[i].radius, 0, Math.PI * 2);
      ctx.fillStyle = "blue";
      ctx.fill();
    }
    requestAnimationFrame(drawBubbles);
  }
  
  drawBubbles();

  var timeLeft = 60;
var timerElement = document.getElementById("timer");

function countdown() {
  timeLeft--;
  timerElement.innerHTML = "Time left: " + timeLeft;
  if (timeLeft <= 0) {
    clearInterval(timer);
    alert("Game over!");
  }
}

var timer = setInterval(countdown, 1000);

if (timeLeft <= 0) {
    clearInterval(timer);
    alert("Game over! Final score: " + score);
  }

  function updateScore() {
    var scoreElement = document.getElementById("score");
    var score = parseInt(scoreElement.innerHTML.split(" ")[1]);
    score++;
    scoreElement.innerHTML = "Score: " + score;
  }

  var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var bubbles = [];
var score = 0;

canvas.addEventListener("click", function(event) {
  var mouseX = event.clientX - canvas.offsetLeft;
  var mouseY = event.clientY - canvas.offsetTop;
  for (var i = 0; i < bubbles.length; i++) {
    var dx = mouseX - bubbles[i].x;
    var dy = mouseY - bubbles[i].y;
    var distance = Math.sqrt(dx * dx + dy * dy);
    if (distance < bubbles[i].radius) {
      bubbles.splice(i, 1);
      score++;
      updateScore();
    }
  }
});

function updateScore() {
  var scoreElement = document.getElementById("score");
  scoreElement.innerHTML = "Score: " + score;
}

setInterval(function() {
  var x = Math.random() * canvas.width;
  var y = Math.random() * canvas.height;
  var radius = Math.random() * 50 + 10;
  var bubble = {
    x: x,
    y: y,
    radius: radius
  };
  bubbles.push(bubble);
}, 1000);

function drawBubbles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < bubbles.length; i++) {
    ctx.beginPath();
    ctx.arc(bubbles[i].x, bubbles[i].y, bubbles[i].radius, 0, Math.PI * 2);
    ctx.fillStyle = "#3f51b5";
    ctx.fill();
  }
  requestAnimationFrame(drawBubbles);
}

drawBubbles();

var timeLeft = 60;
var timerElement = document.getElementById("timer");

function countdown() {
  timeLeft--;
  timerElement.innerHTML = "Time left: " + timeLeft;
  if (timeLeft <= 0) {
    clearInterval(timer);
    alert("Game over! Final score: " + score);
  }
}

var timer = setInterval(countdown, 1000);
