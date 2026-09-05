document.addEventListener('DOMContentLoaded', function() {
  // Mobile Menu
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileNav = document.getElementById('mobile-nav');
  const menuIconOpen = document.getElementById('menu-icon-open');
  const menuIconClose = document.getElementById('menu-icon-close');
  let menuOpen = false;

  if (menuBtn && mobileNav) {
    menuBtn.addEventListener('click', function() {
      menuOpen = !menuOpen;
      mobileNav.classList.toggle('active', menuOpen);
      if (menuIconOpen) menuIconOpen.style.display = menuOpen ? 'none' : 'block';
      if (menuIconClose) menuIconClose.style.display = menuOpen ? 'block' : 'none';
      menuBtn.setAttribute('aria-label', menuOpen ? 'Fechar menu' : 'Abrir menu');
    });
  }

  // Close mobile menu when clicking a link
  document.querySelectorAll('#mobile-nav a').forEach(function(link) {
    link.addEventListener('click', function() {
      menuOpen = false;
      if (mobileNav) mobileNav.classList.remove('active');
      if (menuIconOpen) menuIconOpen.style.display = 'block';
      if (menuIconClose) menuIconClose.style.display = 'none';
      if (menuBtn) menuBtn.setAttribute('aria-label', 'Abrir menu');
    });
  });

  // FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  let openFaqIndex = 0; // First one open by default

  // Open the first FAQ by default
  if (faqItems.length > 0) {
    faqItems[0].classList.add('active');
  }

  faqItems.forEach(function(item, index) {
    const btn = item.querySelector('.faq-question');
    if (!btn) return;
    btn.addEventListener('click', function() {
      const isCurrentlyOpen = item.classList.contains('active');

      // Close all
      faqItems.forEach(function(i) {
        i.classList.remove('active');
      });

      // If clicking a different one, open it
      if (!isCurrentlyOpen) {
        item.classList.add('active');
        openFaqIndex = index;
      } else {
        openFaqIndex = null;
      }
    });
  });

  // Contact Form
  const contactForm = document.getElementById('contact-form');
  const contactSuccess = document.getElementById('contact-success');

  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();

      const nomeInput = document.getElementById('contact-nome');
      const assuntoInput = document.getElementById('contact-assunto');
      const mensagemInput = document.getElementById('contact-mensagem');

      const nome = nomeInput ? nomeInput.value : '';
      const assunto = assuntoInput ? assuntoInput.value : '';
      const mensagem = mensagemInput ? mensagemInput.value : '';

      const textoFormatado = encodeURIComponent(
        'Olá, equipe do Conecta Arte!\n\n*Nome:* ' + nome + '\n*Assunto:* ' + assunto + '\n*Mensagem:* ' + mensagem
      );

      window.open('https://wa.me/5516996380740?text=' + textoFormatado, '_blank');

      // Show success
      contactForm.style.display = 'none';
      if (contactSuccess) contactSuccess.style.display = 'block';

      // Reset after 3 seconds
      setTimeout(function() {
        if (contactSuccess) contactSuccess.style.display = 'none';
        contactForm.style.display = 'block';
        contactForm.reset();
        // Reset select to default
        if (assuntoInput) {
          assuntoInput.value = 'Dúvida sobre o projeto';
        }
      }, 3000);
    });
  }
});
