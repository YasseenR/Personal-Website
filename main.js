const scroll = new SmoothScroll('a[href*="#"]');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
        entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");

hiddenElements.forEach((el) => observer.observe(el));


const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function() {
  let value = window.scrollY;
  console.log(value);

  if (value >= 225 && value <= 900){
    navbar.classList.add("transparent");
  } else {
    navbar.classList.remove("transparent");
  }

});

