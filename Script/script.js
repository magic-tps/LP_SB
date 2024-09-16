// Variable para almacenar el estado del scroll
let hasScrolled = false;

window.addEventListener('scroll', function() {
    const header = document.querySelector('.header'); // Cambié 'header' por '.header'

    if (window.scrollY > 20) {
        if (!hasScrolled) {
            header.classList.add('scrolled');
            hasScrolled = true;
        }
    } else {
        if (hasScrolled) {
            header.classList.remove('scrolled');
            hasScrolled = false;
        }
    }

    // Para depurar
    console.log('Scroll Y:', window.scrollY, 'Has Scrolled:', hasScrolled);
});

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    // Agregamos un evento de click a cada pregunta
    item.querySelector('.faq-question').addEventListener('click', () => {
        // Alternamos la clase 'active' al hacer clic
        item.classList.toggle('active');
    });
});


const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_fox8xzr';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});