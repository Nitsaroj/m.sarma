window.addEventListener("DOMContentLoaded", () => {
        gsap.from("#hero-heading", {
          y: 40,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
        });

        gsap.from(["#hero-box-1", "#hero-box-2", "#hero-box-3"], {
          y: 30,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
          delay: 0.6,
          stagger: 0.2,
        });

        gsap.from("#hero-name", {
          y: 50,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
          delay: 1.2,
        });
      });

      gsap.from("#skills-heading", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#skills",
          start: "top 80%",
        },
      });

      gsap.from("#skills-cards > div", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#skills",
          start: "top 85%",
        },
      });

      gsap.from("#project-list > div", {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#projects",
          start: "top 85%",
        },
      });
      // cursor
      const cursor = document.getElementById("cursor");

      window.addEventListener("mousemove", (e) => {
        gsap.to(cursor, {
          x: e.clientX - 20, // center the circle
          y: e.clientY - 20,
          duration: 0.8,
          ease: "power2.out",
        });
      });

      gsap.from("#about-img", {
        x: -100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: "#about-img",
          start: "top 80%",
        },
      });

      gsap.from("#about-text", {
        x: 100,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: "#about-text",
          start: "top 80%",
        },
      });

      document.querySelectorAll(".counter").forEach((counter) => {
        const countTo = +counter.getAttribute("data-count");

        ScrollTrigger.create({
          trigger: counter,
          start: "top 85%",
          once: true,
          onEnter: () => {
            gsap.fromTo(
              counter,
              { innerText: 0 },
              {
                innerText: countTo,
                duration: 2,
                ease: "power1.out",
                snap: { innerText: 1 },
                onUpdate: function () {
                  counter.innerText = Math.floor(counter.innerText) + "+";
                },
              }
            );
          },
        });
      });

      gsap.registerPlugin(ScrollTrigger);

      gsap.from(".project-card", {
        opacity: 0,
        y: 50,
        duration: 2,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#projects",
          start: "top 80%", // when #projects hits 80% of viewport height
          toggleActions: "play none none none", // play only once
        },
      });
      // Mobile Menu Logic
      const menuBtn = document.getElementById("menu-btn");
      const closeBtn = document.getElementById("close-btn");
      const mobileMenu = document.getElementById("mobile-menu");
      const body = document.body;

      menuBtn.addEventListener("click", () => {
        mobileMenu.classList.remove("hidden");
        body.classList.add("overflow-hidden");
      });

      closeBtn.addEventListener("click", closeMenu);

      function closeMenu() {
        mobileMenu.classList.add("hidden");
        body.classList.remove("overflow-hidden");
      }

      // Navbar hide/show on scroll
      let lastScrollTop = 0;
      const navbar = document.getElementById("navbar");

      window.addEventListener("scroll", () => {
        let currentScroll =
          window.pageYOffset || document.documentElement.scrollTop;
        if (currentScroll > lastScrollTop) {
          navbar.style.transform = "translateY(-100%)";
        } else {
          navbar.style.transform = "translateY(0)";
        }
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
      });