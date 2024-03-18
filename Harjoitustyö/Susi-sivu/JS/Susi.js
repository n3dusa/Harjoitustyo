var currentImage = 1;

function changeImage() {
    if (currentImage === 1) {
        document.getElementById("Susi").src = "Kuvat/wolf1.webp";
        currentImage = 2; 
    } else if (currentImage === 2) {
        document.getElementById("Susi").src = "Kuvat/Wolf2.jpg";
        currentImage = 3; 
    }   else if (currentImage === 3) {
            document.getElementById("Susi").src = "Kuvat/Wolf4.jpg";
            currentImage = 4; 
    } else {
        document.getElementById("Susi").src = "Kuvat/wolf3.jpg";
        currentImage = 1; 
    }
}

