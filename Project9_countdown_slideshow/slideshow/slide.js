const slideImage = document.querySelectorAll(".slide-image");//creating(trnasporting) classes from html in javascript
const slideContainer = document.querySelector(".slide-containers");
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const navigationDots = document.querySelector('.navigation_dots');

let numberOfImages = slideImage.length;//creting dots depending on how many images we have
let slideWidth = slideImage[0].clientWidth;// count the width of first slide to move to the left
let currentSlide = 0;//defining 1st image

//Set up the slider

function init() {//this function will make possible to scroll the images
    /*

    slideImage[0] = 0
    slideImage[1] = 100%
    slideImage[2] = 200%
    */

    slideImage.forEach((img, i) =>{//every time i will be counting as a new slide 
        img.style.left = i * 100 + "%"; //this function will go throught each slide img to the left to make it slide. 
        //start from 0% and next images will do + 100% because, if it was 50% then images would stop on half way of scrolling
    });


    slideImage[0].classList.add('active')
    create_nav_dots ()//when you load the page the dots will create automaticly
}

init();//call this function every time when you reload the page

//create nav dots

function create_nav_dots (){
    for (let i = 0; i < numberOfImages; i++){
        const dot = document.createElement('div');
        dot.classList.add('single-dot');//adding single dot elemetn to the class
        navigationDots.appendChild(dot);
    }

    navigationDots.children[0].classList.add('active');//additiong posiiton of dot

}

// NEXT button

next.addEventListener('click', () =>{//this funciton making sure you can scroll images and not overscroll.
    if (currentSlide >= numberOfImages - 1) {// if current slide more or equal number of images then you can scroll to the right
        goToSlide(0);//when you reached last slide it will go back to slide number 0(1st image)
        return;
    }
    currentSlide++;//increment will let you scroll to the next image (loop)
    goToSlide(currentSlide);
});


// PREV button
prev.addEventListener('click', () =>{
    if (currentSlide <= 0) {
        goToSlide(numberOfImages - 1);
        return;
    }
    currentSlide--;
    goToSlide(currentSlide);
});

function goToSlide(slideNumber) {// depending on the value of this function the buttons will scroll the images
    slideContainer.style.transform = "translateX(-" + slideWidth * slideNumber + 'px)';
    currentSlide = slideNumber;
}