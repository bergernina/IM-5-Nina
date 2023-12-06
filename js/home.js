
// cursor & home animation
// cursor & home animation
// cursor & home animation
const cursor_circle = document.querySelector(".cursor-circle"),
    cursor = document.querySelectorAll(".cursor"),
    elements = document.querySelectorAll(".getHover"),
    image_wrap = document.querySelector(".image-wrap");

let timeline = gsap.timeline({
    defaults: { duration: 1.3, ease: "power3.inOut" },
});

timeline.to(".image-wrap", {
    height: "550px",
    backgroundSize: "105%",
    duration: 1.5,
    ease: "power4.inOut",
}).to(
    ".image-wrap", 
    {
        height: "250px",
        backgroundPosition: "50% 58%",
        y: "0",
    }, 
    1.5
    )
    .from(
    ".big-name", 
    {
        y: getYDistance(".big-name"),
    },
    1.5
    )
    .from(
    ".hide",
    {
        opacity: "0",
    },
    1.5
    );

    function getYDistance(el){
        return (
            window.innerHeight - document.querySelector(el).getBoundingClientRect().top
        );
    }

window.addEventListener("mousemove", (e) => {
    let xPosition = e.clientX;
    let yPosition = e.clientY;

    cursor.forEach(el => {
        el.style.transform = `translate(calc(-50% + ${xPosition}px), calc(-50% + ${yPosition}px))`;
        el.style.opacity = "1";
    });
});

elements.forEach(el => {
    el.addEventListener("mouseover", () => {
        cursor_circle.classList.add("biggerCursor");
    });
    el.addEventListener("mouseout", () => {
        cursor_circle.classList.remove("biggerCursor");
    });
});

image_wrap.addEventListener("mousemove", (e) => {
    let rect = image_wrap.getBoundingClientRect(),
    x = e.clientX - rect.left,
    y = e.clientY - rect.top;

    let xSpeed = 0.008,
        ySpeed = 0.02;
    
    let xMoving = x - image_wrap.clientWidth / 2;
    let yMoving = x - image_wrap.clientHeight / 2;
    
    image_wrap.style.backgroundPosition = `calc(50% + ${xMoving * xSpeed}px) calc(58% + ${yMoving * ySpeed}px)`;
});

image_wrap.addEventListener("mouseover", () => {
    image_wrap.style.transition = "0.2s background-position";
    setTimeout(() => {
        image_wrap.style.transition = "0s background-position";
    }, 200);
});

image_wrap.addEventListener("mouseout", () => {
    image_wrap.style.transition = "0.5s background-position";
    image_wrap.style.backgroundPosition = "50% 58%";
});



// Bildgalerie index
// Bildgalerie index
// Bildgalerie index
document.addEventListener('DOMContentLoaded', function () {
    const imageGallery = document.getElementById('image-gallery');
    const galleryImages = document.querySelectorAll('.gallery-image');
    let currentIndex = 0;
  
    function showNextImage() {
      if (currentIndex > 0) {
        galleryImages[currentIndex - 1].classList.remove('visible');
      } else {
        galleryImages[galleryImages.length - 1].classList.remove('visible');
      }
  
      galleryImages[currentIndex].classList.add('visible');
      currentIndex = (currentIndex + 1) % galleryImages.length;
    }
  
    // Starte mit dem ersten Bild sichtbar
    galleryImages[currentIndex].classList.add('visible');
  
    // Automatischer Wechsel alle 3 Sekunden
    setInterval(showNextImage, 3000);
  });



// faders/grid index
// faders/grid index
// faders/grid index
const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in');

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -250px 0px"
};

const appearOnScroll = new IntersectionObserver
(function(
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  })
},
appearOptions);


faders.forEach(fader => {
  appearOnScroll.observe(fader);
})

sliders.forEach(slider => {
  appearOnScroll.observe(slider);
})