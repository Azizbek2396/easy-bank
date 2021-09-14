let navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((navlink) => {
  navlink.addEventListener('click', function() {
    navLinks.forEach(nlink => nlink.classList.remove('active'))
    this.classList.add('active')
  })
});