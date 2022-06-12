const imagesArr = [
    'https://chandler.on.ge/2022/06/12/b81ebefdffd967164b5649903ea73298-resize_crop_1Xquality_100Xallow_enlarge_0Xw_1200Xh_630_62a5fc357cc1f.jpg',
    'https://monica.on.ge/2019/04/27/11-17.jpg',
    'https://chandler.on.ge/2017/07/25/russia-border-south-ossetia.jpg',
    'https://rachel.on.ge/2022/04/20/elene_khoshtaria_1_625fd7e00a108.jpeg',
    'https://images.wallpaperscraft.com/image/single/forest_trees_fog_110131_1920x1080.jpg'
]

const sliderImage = document.getElementById('slider-img');
let index = 0
sliderImage.src = imagesArr[index];

function goLeft() {
    index--;
    if (index < 0) {
        index = imagesArr.length - 1;
    }
    sliderImage.src = imagesArr[index];
}

function goRight() {
    index++;
    if (index > imagesArr.length - 1) {
        index = 0;
    }
    sliderImage.src = imagesArr[index];
}

setInterval(goRight, 5000);

//პრომისების გაკეთება ვერ შევძელი :(((