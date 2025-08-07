// Mobile Menu Toggle
      const mobileMenuButton = document.getElementById("mobile-menu-button");
      const mobileNav = document.getElementById("mobile-nav");
      const menuIcon = document.getElementById("menu-icon");
      const closeIcon = document.getElementById("close-icon");

      mobileMenuButton.addEventListener("click", () => {
        mobileNav.classList.toggle("hidden");
        menuIcon.classList.toggle("hidden");
        closeIcon.classList.toggle("hidden");
      });

      // Close mobile menu when clicking on a link
      document.querySelectorAll("#mobile-nav a").forEach((link) => {
        link.addEventListener("click", () => {
          mobileNav.classList.add("hidden");
          menuIcon.classList.remove("hidden");
          closeIcon.classList.add("hidden");
        });
      });

      // Tabbed Content
      const tabButtons = document.querySelectorAll(".tab-button");
      const tabContents = document.querySelectorAll(".tab-content");

      tabButtons.forEach((button) => {
        button.addEventListener("click", () => {
          // Remove active class from all buttons and contents
          tabButtons.forEach((btn) => {
            btn.classList.remove("bg-yellow-400", "text-blue-900");
            btn.classList.add(
              "bg-blue-100",
              "dark:bg-blue-900",
              "text-blue-900",
              "dark:text-blue-200"
            );
          });
          tabContents.forEach((content) => content.classList.add("hidden"));

          // Add active class to clicked button and corresponding content
          button.classList.add("bg-yellow-400", "text-blue-900");
          button.classList.remove(
            "bg-blue-100",
            "dark:bg-blue-900",
            "text-blue-900",
            "dark:text-blue-200"
          );
          const tabId = button.getAttribute("data-tab");
          document.getElementById(tabId).classList.remove("hidden");
        });
      });

      // Flip Card
      const flipCards = document.querySelectorAll(".card-3d");
      flipCards.forEach((card) => {
        card.addEventListener("click", () => {
          card.classList.toggle("flip");
        });
      });

      // Floating Labels for Form Inputs
      const floatInputs = document.querySelectorAll(
        ".input-float input, .input-float textarea, .input-float select"
      );
      floatInputs.forEach((input) => {
        input.addEventListener("focus", () => {
          const label = input.nextElementSibling;
          label.classList.add("transform", "-translate-y-6", "scale-75");
          label.classList.add("text-secondary-500");
        });

        input.addEventListener("blur", () => {
          if (!input.value) {
            const label = input.nextElementSibling;
            label.classList.remove("transform", "-translate-y-6", "scale-75");
            label.classList.remove("text-secondary-500");
          }
        });

        // Initialize labels if inputs have values
        if (input.value) {
          const label = input.nextElementSibling;
          label.classList.add("transform", "-translate-y-6", "scale-75");
        }
      });

      // Back to Top Button
      const backToTopButton = document.getElementById("back-to-top");
      window.addEventListener("scroll", () => {
        if (window.pageYOffset > 300) {
          backToTopButton.classList.remove("opacity-0", "invisible");
          backToTopButton.classList.add("opacity-100", "visible");
        } else {
          backToTopButton.classList.add("opacity-0", "invisible");
          backToTopButton.classList.remove("opacity-100", "visible");
        }
      });

      backToTopButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });

      // Set current year in footer
      document.getElementById("current-year").textContent =
        new Date().getFullYear();

      // Form Submission
      const contactForm = document.getElementById("contact-form");
      if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
          e.preventDefault();
          // Here you would typically send the form data to your backend
          alert("Thank you for your message! We will get back to you soon.");
          contactForm.reset();

          // Reset floating labels
          const labels = contactForm.querySelectorAll(".input-float label");
          labels.forEach((label) => {
            label.classList.remove(
              "transform",
              "-translate-y-6",
              "scale-75",
              "text-secondary-500"
            );
          });
        });
      }

      // Intersection Observer for scroll animations
      const animateOnScroll = (elements, animationClass) => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add(animationClass);
                observer.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.1 }
        );

        elements.forEach((element) => {
          observer.observe(element);
        });
      };

      // owl carousel script

    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }

    });

      // Apply to elements with animate-on-scroll class
      const animatedElements = document.querySelectorAll(".animate-on-scroll");
      animateOnScroll(animatedElements, "animate-fade-in");