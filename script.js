// NAV & MOBILE MENU
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const closeMobile = document.getElementById('closeMobile');

hamburger?.addEventListener('click', () => {
  mobileMenu.classList.add('open');
  mobileMenu.setAttribute('aria-hidden', 'false');
});

closeMobile?.addEventListener('click', () => {
  mobileMenu.classList.remove('open');
  mobileMenu.setAttribute('aria-hidden', 'true');
});

// close mobile menu when a link clicked
document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
  });
});

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target) target.scrollIntoView({behavior:'smooth', block:'start'});
  });
});

// Contact form handling (basic front-end)
const contactForm = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');

contactForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  const form = e.target;
  const name = form.name.value.trim();
  const phone = form.phone.value.trim();
  if (!name || !phone || !/^\d{10}$/.test(phone)) {
    formMsg.textContent = 'Please fill all fields';
    formMsg.style.color = 'crimson';
    return;
  }

  // Simulate success (replace with real AJAX to backend)
  formMsg.style.color = 'green';
  formMsg.textContent = 'Thankyou! Your enquiry submitted successfully. We will back to you soon.';
  form.reset();
});

// set year in footer
document.getElementById('year').textContent = new Date().getFullYear();
