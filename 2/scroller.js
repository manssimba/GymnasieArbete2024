const slides = document.querySelectorAll('.slide');
var slidesNr = -1;

//make each slide have a value of top thats 100% higher than the previous slide
slides.forEach((slide, index) => {
    slide.style.top = `${index * 100}%`;
    slidesNr++;
});

var currentSlide = 0;

//TODO: Use scroll snapping to make the scrolling more intuitive, making the statusbar scroll with the user and snap back or forward to the correct slide when user stopped scrolling, make background div into slidesNr amount with scroll snapping.
function renderSlide() {
    //calculate the percentage of the scroll
    var slidePercent = currentSlide * 100;

    //update the progress bar
    document.getElementById("loadingBarFill").style.width = `${slidePercent / slidesNr}%`;

    //update the slide position
    slides.forEach(slide => {
        slide.style.transform = `translateY(-${slidePercent}%)`;

        slideTopWithoutPercent = slide.style.top.replace('%', '');
        slideTopWithoutPercent = parseInt(slideTopWithoutPercent);
        if (slidePercent > slideTopWithoutPercent){
            slide.style.transform = `translateY(-${slideTopWithoutPercent}%)`;
        }
    });
}


    //listen for arrow keys
    document.addEventListener('keydown', function(event) {
        if (event.key === "ArrowRight") {
            currentSlide++;
        }
        if (event.key === "ArrowLeft") {
            currentSlide--;

        }
        if (currentSlide < 0) {
            currentSlide = 0;
        }
        if (currentSlide > slidesNr) {
            currentSlide = slidesNr;
        }
        renderSlide();
        const pageHeight = document.body.scrollHeight - window.innerHeight;
        //change scroll position to the correct corresponding slide
        window.scrollTo(0, (pageHeight / slidesNr) * currentSlide);
    });

    //set the scroll position to the top
    window.scrollTo(0, 0);
    //listen for scroll
    document.addEventListener('scroll', function(event) {
        //get the scroll position
        const scrollTop = window.scrollY;

        //get the height of page minus the height of the window to get scrollable height
        const pageHeight = document.body.scrollHeight - window.innerHeight;

        //calculate the percentage of the scroll
        const slide = Math.round(scrollTop / pageHeight * slidesNr);

        //update the current slide
        currentSlide = slide;
        //render the slide
        renderSlide();
    });

