var element = document.getElementById('image');
var opacity = 0.1;
var direction = 1; 

var intervalId = setInterval(function() {
    opacity += direction * 0.1; // 
    element.style.opacity = opacity;

    if (opacity >= 0.9 || opacity <= 0.1) { // 
        direction *= -1;
    }
}, 150);
