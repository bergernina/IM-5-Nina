

// slider text seite-a ???
// slider text seite-a ???
// slider text seite-a ???
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));





// faders/grid seite-b
// faders/grid seite-b
// faders/grid seite-b
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
});

sliders.forEach(slider => {
  appearOnScroll.observe(slider);
});






// Kontaktformular
// Kontaktformular
// Kontaktformular
function submitForm() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (!name || !email || !message) {
    alert('Bitte füllen Sie alle Felder aus.');
    return;
  }

  console.log('Name:', name);
  console.log('E-Mail:', email);
  console.log('Nachricht:', message);

  zeigeBenachrichtigung('Formular erfolgreich abgeschickt!');

  setTimeout(() => {
    window.location.reload();
  }, 4000);
}

function zeigeBenachrichtigung(text) {
  const notification = document.createElement('div');
  notification.textContent = text;
  notification.className = 'notification';

  // Setze den z-index-Wert
  notification.style.zIndex = '999';

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.display = 'none';
  }, 3000);
}


// Cursor
// Cursor
// Cursor
const cursor_circle = document.querySelector(".cursor-circle"),
    cursor = document.querySelectorAll(".cursor"),
    elements = document.querySelectorAll(".getHover");


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


// nachoben
// nachoben
// nachoben
document.getElementById('scroll-to-top').addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});