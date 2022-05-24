function reveal(){
    var reveals = document.querySelectorAll('#reveal');
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
}

window.addEventListener('scroll', reveal);
// To check the scroll position on page load
reveal();