const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        navbar.classList.remove('navbar-transparent');
        navbar.classList.add('navbar-colored');
      } else {
        navbar.classList.remove('navbar-colored');
        navbar.classList.add('navbar-transparent');
      }
    });
 window.onscroll = function () {
      const btn = document.getElementById("scrollTopBtn");
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        btn.style.display = "block";
      } else {
        btn.style.display = "none";
      }
    };

    // Smooth scroll to top
    function scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
