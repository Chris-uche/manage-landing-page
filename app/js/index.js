//console.log('console')

var hamburgerMenu = document.querySelector('.hamburger-menu')
var modal = document.querySelector('.modal')
var logo  = document.querySelector('.nav-logo');
//console.log(logo)
hamburgerMenu.addEventListener('click', function menuIcon(){
    modal.style.display = 'block';
    hamburger.style.display = 'none';
    logo.style.display = 'none';
   
});

var closeIcon = document.querySelector('.closeIcon')
closeIcon.addEventListener('click', function closIcon(){
    modal.style.display = 'none';
    hamburgerMenu.style.display = 'block';
    logo.style.display = 'block';

}) 


/*Function for the slide or scrcoll menu in mobile view  */

var bodyE = document.querySelector('body')
var cardE = document.querySelector(".cards")
var  testimonialIndex = 1;
//console.log(cards)

if (window.innerWidth < 750) {
    showTestimonials(testimonialIndex);
}
window.addEventListener("resize", function () {
    if (window.innerWidth < 750) {
      showTestimonials(testimonialIndex);
    }
});
  


/*
*/
function plusTestimonial(n) {
    showTestimonials((testimonialIndex += n));
}

function currentTestimonial(n) {
    showTestimonials((testimonialIndex = n));
}


function showTestimonials(n) {
    var i;
    var testimonials = document.getElementsByClassName("testimonial_single");
    var dots = document.getElementsByClassName("dot");
    //What happened here is if n is greater than the length of the testimonials(which is the number of images) set the testimonila index to 1.hamburger-menu
    if (n > testimonials.length) {
      testimonialIndex = 1;
    }
     //if the n is less than 1, set the testimoniaIIndex to testiminials.length
    if (n < 1) {
      testimonialIndex = testimonials.length;
    }
  
    for (i = 0; i < testimonials.length; i++) {
      testimonials[i].style.display = "none";
    }
  
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  
    testimonials[testimonialIndex - 1].style.display = "block";
    dots[testimonialIndex - 1].className += " active";
}

// testimonials slideshow
cardE.addEventListener("click", function(e){
    var clickedDotId = Number(e.target.id);
    if (
      clickedDotId === 1 ||
      clickedDotId === 2 ||
      clickedDotId === 3 ||
      clickedDotId === 4
    ) {
      currentTestimonial(clickedDotId);
    }
});
  





