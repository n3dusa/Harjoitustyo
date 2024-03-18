function changeImage(x, image) {
    switch(x) {
        case 1:
            image.src = 'Kuvat/Karhu1.jpg';
            break;
        case 2:
            image.src = 'Kuvat/Karhu3.jpg';
            break;
        case 3:
            image.src = 'Kuvat/Karhu2.webp';
            break;
        case 4:
            image.src = 'Kuvat/Winter1.jpeg';
            break;
        case 5:
            image.src = 'Kuvat/Winter2.webp';
            break;
        case 6:
            image.src = 'Kuvat/Winter3.jpeg';
            break;
        default:
            break;
    }
}

