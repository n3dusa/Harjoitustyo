var image = document.getElementById("image");
            var currentPos = 0;
            var images = ["Kuvat/Picture1.jpg", "Kuvat/Picture3.jpg", "Kuvat/Picture4.jpg", "Kuvat/Picture5.jpg",]
        
            image.style.width = "280px"; 
            image.style.height = "200px"

            function volgendefoto() {
                if (++currentPos >= images.length)
                    currentPos = 0;

                image.src = images[currentPos];
            }

            setInterval(volgendefoto, 3000);