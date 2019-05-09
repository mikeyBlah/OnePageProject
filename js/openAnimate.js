    window.onload = function(){

    const title = document.querySelector(".title");
    const shape = document.querySelector("#shape");
    const circle = document.querySelector("#circle");
    const dataY = document.querySelector(".scrollY");
    const dotContain = document.querySelector("#dotContain");
    const navMenu = document.querySelector(".navMenu");
    const dot = document.querySelectorAll(".dot");
    const container = document.querySelector("#pageContain");
    const hamIcon = document.querySelector("#hamburgerIcon");
    const wHeight = document.body.offsetHeight;
    const numOfSlides = 5;
    let currentSlide = 1;
    let menuOpen = false;
    let p = 0;
    let txt = 'Title here'; /* The text */
    let speed = 100; /* The speed/duration of the effect in milliseconds */
    typeWriter();

    function typeWriter() {
    if (p < txt.length) {
        title.innerHTML += txt.charAt(p);
        p++;
        setTimeout(typeWriter, speed);
        }
    }

    getScroll();
    shapeMove();

    function getScroll(){
        let y = window.scrollY;
        shapeMove(y);
        autoScroll(y);
        dataY.innerHTML = y + "px";
        window.requestAnimationFrame(getScroll);
    }

    function shapeMove(y){
        let rotationValue = y * 0.2;
        let circleValueY = -y * 0.5;
        let circleValueX = y * 0.5;
        shape.style.transform = "rotate("+ rotationValue + "deg)";
        //shape.style.webkitTransform = "rotate("+ rotationValue + "deg)";
        //shape.style.mozTransform = "rotate("+ rotationValue + "deg)";
        //shape.style.transform = "rotate("+ rotationValue + "deg)";
        circle.style.transform = "translate("+ circleValueX + "px, " + circleValueY + "px)";
    }

    function autoScroll(y){
        
        if(y < wHeight/numOfSlides){
            container.style.transform = "translate(0px, 0px)";
            currentSlide = 1;
        }
        if((y >= wHeight/numOfSlides) && (y < wHeight/numOfSlides * 2)){
            container.style.transform = "translate(0px, -100vh)";
            currentSlide = 2;
        }
        if((y >= wHeight/numOfSlides * 2) && (y < wHeight/numOfSlides * 3)){
            container.style.transform = "translate(0px, -200vh)";
            currentSlide = 3;
        }
        if((y >= wHeight/numOfSlides * 3) && (y < wHeight/numOfSlides * 4)){
            container.style.transform = "translate(0px, -300vh)";
            currentSlide = 4;
        }
        if(y >= wHeight/numOfSlides * 4){
            container.style.transform = "translate(0px, -400vh)";
            currentSlide = 5;
        }
        markerActive(currentSlide);
    }

    function markerActive(s){
        for (i = 0; i < dotContain.children.length; i++) {
            dotContain.children[i].classList.remove("dotActive");
          }

        dotContain.children[s * 2 - 2].classList.add("dotActive");
    }


    //------------------> MENU

    hamIcon.addEventListener("click", toggleMenu);

    function toggleMenu(){
        if(menuOpen == false){
            navMenu.classList.add("navShow");
            menuOpen = true;
        }else{
            navMenu.classList.remove("navShow");
            menuOpen = false;
        }
    }




};