    window.onload = function(){

    const title = document.querySelector(".title");
    const shape = document.querySelector("#shape");
    const circle = document.querySelector("#circle");
    const dataY = document.querySelector(".scrollY");
    //const dotContain = document.querySelector("#dotContain");
    const navMenu = document.querySelector(".navMenu");
    const moverDot = document.querySelector("#moverDot");
    const container = document.querySelector("#pageContain");
    const hamIcon = document.querySelector("#hamburgerIcon");
    const wHeight = document.body.offsetHeight;
    const numOfSlides = 5;
    //let currentSlide = 1;
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
        circle.style.transform = "translate("+ circleValueX + "px, " + circleValueY + "px)";
    }

    function autoScroll(y){
        
        if(y < wHeight/numOfSlides){
            container.style.transform = "translate(0px, 0px)";
            moverDot.style.transform = "translate(0px, 0px)";
            currentSlide = 1;
        }
        if((y >= wHeight/numOfSlides) && (y < wHeight/numOfSlides * 2)){
            container.style.transform = "translate(0px, -100vh)";
            moverDot.style.transform = "translate(0px, 64px)";
            currentSlide = 2;
        }
        if((y >= wHeight/numOfSlides * 2) && (y < wHeight/numOfSlides * 3)){
            container.style.transform = "translate(0px, -200vh)";
            moverDot.style.transform = "translate(0px, 128px)";
            currentSlide = 3;
        }
        if((y >= wHeight/numOfSlides * 3) && (y < wHeight/numOfSlides * 4)){
            container.style.transform = "translate(0px, -300vh)";
            moverDot.style.transform = "translate(0px, 192px)";
            currentSlide = 4;
        }
        if(y >= wHeight/numOfSlides * 4){
            container.style.transform = "translate(0px, -400vh)";
            moverDot.style.transform = "translate(0px, 256px)";
            currentSlide = 5;
        }
        //markerActive(currentSlide);
        markerAni(currentSlide);
    }

    /*function markerActive(s){
        for (i = 0; i < dotContain.children.length; i++) {
            dotContain.children[i].classList.remove("dotActive");
          }

        dotContain.children[s * 2 - 2].classList.add("dotActive");
    }
*/

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

    function markerAni(s){
        if(s === 1){
            moverDot.style.transform = "scale(0.5)";
            moverDot.style.transform = "translate(0px, 0px)";
        }
        if(s === 2){
            moverDot.style.transform = "scale(0.5)";
            moverDot.style.transform = "translate(0px, 64px)";
        }
        if(s === 3){
            moverDot.style.transform = "scale(0.5)";
            moverDot.style.transform = "translate(0px, 128px)";
        }
        if(s === 4){
            moverDot.style.transform = "scale(0.5)";
            moverDot.style.transform = "translate(0px, 192px)";
        }
        if(s === 5){
            moverDot.style.transform = "scale(0.5)";
            moverDot.style.transform = "translate(0px, 256px)";
        }
    }


};