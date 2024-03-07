//TODO: Trigger change of slide after scrolling a certain amount
var currentSlide = slidesNr;
renderSlide();
//run after 0.5s
setTimeout(function() {
    for (const slide of slides) {
        slide.style.transition = "transform 1.5s ease-in-out";
    }
    currentSlide = 0;
    renderSlide();
    setTimeout(function() {
        for (const slide of slides) {
            slide.style.transition = "transform 1s ease-in-out";

            
        }

        //remove the css link to contentHider.css
        document.getElementById("contentHider").remove();

        //set loading bar opacity to 1
        document.getElementById("loadingBar").style.opacity = 1;

        activateKeys();
        

    }, 1500);
}, 500);