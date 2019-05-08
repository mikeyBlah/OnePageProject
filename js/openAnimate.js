    window.onload = function(){

    const title = document.querySelector(".title");
    const shape = document.querySelector("#shape");
    const circle = document.querySelector("#circle");
    const dataY = document.querySelector(".scrollY");
    const dot = document.querySelector(".dot");
    const container = document.querySelector("#pageContain");
    const wHeight = document.body.offsetHeight;
    const numOfSlides = 5;
    //title.classList.remove('hide');
    //title.classList.add('show');
    let i = 0;
    let txt = 'Title here'; /* The text */
    let speed = 100; /* The speed/duration of the effect in milliseconds */
    typeWriter();

    function typeWriter() {
    if (i < txt.length) {
        title.innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
        console.log(wHeight);
    }
    }
    console.log("triggered");

    getScroll();
    shapeMove();

    function getScroll(){
        let y = window.scrollY;
        console.log(y);
        shapeMove(y);
        autoScroll(y);
        dataY.innerHTML = y + "px";
        window.requestAnimationFrame(getScroll);
    }

    function shapeMove(y){
        let rotationValue = y * 0.2;
        let circleValueY = -y * 1;
        let circleValueX = y * 1;
        shape.style.transform = "rotate("+ rotationValue + "deg)";
        //shape.style.webkitTransform = "rotate("+ rotationValue + "deg)";
        //shape.style.mozTransform = "rotate("+ rotationValue + "deg)";
        //shape.style.transform = "rotate("+ rotationValue + "deg)";
        circle.style.transform = "translate("+ circleValueX + "px, " + circleValueY + "px)";
    }

    function autoScroll(y){
        
        if(y < wHeight/numOfSlides){
            container.style.transform = "translate(0px, 0px)";
        }
        if((y >= wHeight/numOfSlides) && (y < wHeight/numOfSlides * 2)){
            container.style.transform = "translate(0px, -100vh)";
        }
        if((y >= wHeight/numOfSlides * 2) && (y < wHeight/numOfSlides * 3)){
            container.style.transform = "translate(0px, -200vh)";
        }
        if((y >= wHeight/numOfSlides * 3) && (y < wHeight/numOfSlides * 4)){
            container.style.transform = "translate(0px, -300vh)";
        }
        if(y >= wHeight/numOfSlides * 4){
            container.style.transform = "translate(0px, -400vh)";
        }
    }

};