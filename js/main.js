document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('header');
  
  // Handle header shadow on scroll
  window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', function(event) {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const navbarToggler = document.querySelector('.navbar-toggler');
    
    if (!navbarCollapse.contains(event.target) && !navbarToggler.contains(event.target)) {
      if (navbarCollapse.classList.contains('show')) {
        navbarToggler.click();
      }
    }
  });
});