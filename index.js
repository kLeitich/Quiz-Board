// var correctAnswer = {
//     q1: "100%",
//     q2: "Markup Language",
//     q3:"/* a comment */",
//     q4: "p {color: red;}",
//     q5: "a {text-decoration:none;}"
// }


//get data from userinfo
let userInfo = document.getElementById("#userInfo")


//move to the next slide

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("Slide");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}
// userInfo.addEventListener("submit", function (event){
// event
// };


// //get data from questionform

// let questionForm = document.getElementById("#questionform")


