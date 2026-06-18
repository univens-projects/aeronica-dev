document.addEventListener('DOMContentLoaded', () => {

  // ─── Loading Screen ───
  const loadingScreen = document.getElementById('loadingScreen');
  if (loadingScreen) {
    setTimeout(() => {
      loadingScreen.classList.add('hidden');
    }, 1200);
  }

  // ─── Custom Cursor ───
  const cursor = document.getElementById('cursor');
  if (cursor) {
    let cursorVisible = false;

    document.addEventListener('mousemove', (e) => {
      if (!cursorVisible) {
        cursor.classList.add('is-visible');
        cursorVisible = true;
      }
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    });

    document.addEventListener('mouseleave', () => {
      cursor.classList.remove('is-visible');
      cursorVisible = false;
    });

    const hoverTargets = document.querySelectorAll('a, button, .service-card, .project-card, .news-card, .product-card, .industry-card, .stat-item, .process-step, .form-input, .cta-btn-primary, .back-to-top, .newsletter-submit');
    hoverTargets.forEach((el) => {
      el.addEventListener('mouseenter', () => {
        cursor.style.width = '10rem';
        cursor.style.height = '4.4rem';
      });
      el.addEventListener('mouseleave', () => {
        cursor.style.width = '4.4rem';
        cursor.style.height = '4.4rem';
        cursor.querySelector('.cursor-label').textContent = 'View';
      });
    });
  }

  // ─── Nano Particle System (Satin Texture) ───
  const canvas = document.getElementById('heroCanvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let particles = [];
    let mouse = { x: null, y: null };

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 0.8 + 0.2;
        this.baseX = this.x;
        this.baseY = this.y;
        this.vx = (Math.random() - 0.5) * 0.2;
        this.vy = (Math.random() - 0.5) * 0.2;
        this.density = (Math.random() * 30) + 1;
      }

      update() {
        this.x += this.vx + Math.sin(Date.now() * 0.0005 + this.baseX) * 0.1;
        this.y += this.vy + Math.cos(Date.now() * 0.0005 + this.baseY) * 0.1;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        if (mouse.x !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            const angle = Math.atan2(dy, dx);
            const force = (150 - distance) / 150;
            this.x += Math.cos(angle) * force * 2.5;
            this.y += Math.sin(angle) * force * 2.5;
          }
        }
        
        this.vx *= 0.98;
        this.vy *= 0.98;
        this.vx += (Math.random() - 0.5) * 0.01;
        this.vy += (Math.random() - 0.5) * 0.01;
      }

      draw() {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function connectParticles() {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 60) {
            let opacity = 1 - (distance / 60);
            let color = `rgba(255, 255, 255, ${opacity * 0.15})`;
            
            if (mouse.x !== null) {
              const mdx = mouse.x - particles[a].x;
              const mdy = mouse.y - particles[a].y;
              const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
              if (mdist < 150) {
                color = `rgba(0, 123, 255, ${opacity * 0.6})`;
              }
            }

            ctx.strokeStyle = color;
            ctx.lineWidth = 0.3;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    }

    function initParticles() {
      particles = [];
      const count = Math.floor((canvas.width * canvas.height) / 4000);
      for (let i = 0; i < count; i++) {
        particles.push(new Particle());
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      connectParticles();
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      requestAnimationFrame(animate);
    }

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    resizeCanvas();
    initParticles();
    animate();
  }

  // ─── Navbar Scroll State ───
  const navbar = document.getElementById('navbar');
  if (navbar) {
    const hero = document.getElementById('hero');
    const navbarLogo = document.getElementById('navbarLogo');
    let heroHeight = hero ? hero.offsetHeight : window.innerHeight;

    function updateNavbar() {
      const isScrolled = window.scrollY > heroHeight * 0.7;
      if (isScrolled) {
        navbar.classList.add('is-scrolled');
        if (navbarLogo) navbarLogo.src = 'public/assets/img/logo1.png';
      } else {
        navbar.classList.remove('is-scrolled');
        if (navbarLogo) navbarLogo.src = 'public/assets/img/logo-lite.png';
      }
    }

    updateNavbar();
    window.addEventListener('scroll', updateNavbar, { passive: true });
    window.addEventListener('resize', () => {
      if (hero) heroHeight = hero.offsetHeight;
    });
  }

  // ─── Mobile Menu Toggle ───
  const toggle = document.getElementById('navbarToggle');
  const overlay = document.getElementById('navOverlay');
  if (toggle && overlay) {
    toggle.addEventListener('click', () => {
      const isOpen = overlay.classList.toggle('is-open');
      toggle.classList.toggle('is-active', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    overlay.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        overlay.classList.remove('is-open');
        toggle.classList.remove('is-active');
        document.body.style.overflow = '';
      });
    });
  }

  // ─── Scroll-Animated Sections ───
  const hiddenSections = document.querySelectorAll('.section-hidden');
  if (hiddenSections.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    hiddenSections.forEach((section) => observer.observe(section));
  }

  // ─── Testimonials Carousel ───
  const carousel = document.getElementById('testimonialCarousel');
  const dots = document.querySelectorAll('.dot');
  if (carousel && dots.length) {
    let currentIndex = 0;
    let autoRotateInterval;

    function showSlide(index) {
      const slides = carousel.querySelectorAll('.testimonial-slide');
      slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
      });
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
      });
      currentIndex = index;
    }

    function nextSlide() {
      const slides = carousel.querySelectorAll('.testimonial-slide');
      showSlide((currentIndex + 1) % slides.length);
    }

    function startAutoRotate() {
      stopAutoRotate();
      autoRotateInterval = setInterval(nextSlide, 6000);
    }

    function stopAutoRotate() {
      if (autoRotateInterval) {
        clearInterval(autoRotateInterval);
        autoRotateInterval = null;
      }
    }

    dots.forEach((dot) => {
      dot.addEventListener('click', () => {
        showSlide(parseInt(dot.dataset.index, 10));
        startAutoRotate();
      });
    });

    showSlide(0);
    startAutoRotate();
  }

  // ─── Hero Scroll Parallax ───
  const heroBg = document.querySelector('.hero-bg');
  const heroContainer = document.querySelector('.hero-container');
  if (heroBg && heroContainer) {
    let ticking = false;

    function updateHeroParallax() {
      const scrollY = window.scrollY;
      const hero = document.getElementById('hero');
      if (!hero) return;
      const heroRect = hero.getBoundingClientRect();
      const heroTop = heroRect.top + scrollY;
      const progress = Math.min(scrollY / hero.offsetHeight, 1);

      heroBg.style.transform = `translateY(${progress * -60}px)`;
      heroContainer.style.transform = `translateY(${progress * 20}px)`;
    }

    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateHeroParallax();
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  // ─── 3D Card Tilt (Mouse Parallax) ───
  const tiltCards = document.querySelectorAll('.service-card, .product-card, .project-card, .industry-card, .stat-item, .process-step, .news-card');

  tiltCards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;
      card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  });

  // ─── Scroll Parallax (data-parallax-speed) ───
  const parallaxLayers = document.querySelectorAll('.parallax-layer');
  if (parallaxLayers.length) {
    let parallaxTicking = false;

    function updateParallax() {
      const scrollY = window.scrollY;
      parallaxLayers.forEach((layer) => {
        const speed = parseFloat(layer.dataset.parallaxSpeed) || 0;
        const rect = layer.getBoundingClientRect();
        const layerCenter = rect.top + rect.height / 2;
        const viewportCenter = window.innerHeight / 2;
        const offset = (layerCenter - viewportCenter) * speed;
        layer.style.transform = `translateY(${offset * -1}px)`;
      });
    }

    window.addEventListener('scroll', () => {
      if (!parallaxTicking) {
        requestAnimationFrame(() => {
          updateParallax();
          parallaxTicking = false;
        });
        parallaxTicking = true;
      }
    }, { passive: true });
  }

  // ─── Staggered Reveal ───
  const staggerContainers = document.querySelectorAll('[data-stagger]');
  if (staggerContainers.length) {
    const staggerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const container = entry.target;
            const items = container.children;
            Array.from(items).forEach((item, index) => {
              item.classList.add('stagger-item');
              setTimeout(() => {
                item.classList.add('is-visible');
              }, index * 100);
            });
            staggerObserver.unobserve(container);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    staggerContainers.forEach((container) => staggerObserver.observe(container));
  }

  // ─── Stats Counter ───
  const statNumbers = document.querySelectorAll('.stat-number');
  if (statNumbers.length) {
    let countersAnimated = false;

    function animateCounters() {
      if (countersAnimated) return;
      countersAnimated = true;

      statNumbers.forEach((el) => {
        const target = parseInt(el.dataset.count, 10);
        const duration = 2000;
        const start = performance.now();

        function update(now) {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.round(eased * target);
          if (progress < 1) requestAnimationFrame(update);
        }

        requestAnimationFrame(update);
      });
    }

    const statsSection = document.getElementById('stats');
    if (statsSection) {
      const statsObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animateCounters();
              statsObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.3 }
      );
      statsObserver.observe(statsSection);
    }
  }

  // ─── Products Horizontal Scroll & Magnetic Snapping ───
  const productsWrapper = document.getElementById('products');
  const productsSlider = document.querySelector('.products-slider');
  const productsCount = document.querySelector('.products-footer-count');

  if (productsWrapper && productsSlider) {
    let productsTicking = false;
    let isSnapping = false;

    function updateProductsScroll() {
      const rect = productsWrapper.getBoundingClientRect();
      const wrapperHeight = productsWrapper.offsetHeight;
      const stickyHeight = window.innerHeight;
      
      const scrolled = -rect.top;
      const scrollRange = wrapperHeight - stickyHeight;
      let progress = scrolled / scrollRange;
      progress = Math.max(0, Math.min(1, progress));

      const translateX = progress * -300; 
      productsSlider.style.transform = `translateX(${translateX}vw)`;

      if (productsCount) {
        const slideIndex = Math.round(progress * 3) + 1;
        productsCount.textContent = `0${slideIndex} / 04`;
      }
    }

    window.addEventListener('scroll', () => {
      if (!productsTicking) {
        requestAnimationFrame(() => {
          updateProductsScroll();
          productsTicking = false;
        });
        productsTicking = true;
      }
    }, { passive: true });

    // Magnetic Snap Logic
    window.addEventListener('wheel', (e) => {
      const rect = productsWrapper.getBoundingClientRect();
      
      // Only trigger if the sticky content is currently visible
      if (rect.top <= 0 && rect.bottom >= window.innerHeight) {
        if (isSnapping) return;

        const currentScroll = window.scrollY;
        const wrapperTop = productsWrapper.offsetTop;
        const relativeScroll = currentScroll - wrapperTop;
        const slideHeight = window.innerHeight;
        const currentSlide = Math.round(relativeScroll / slideHeight);
        
        if (e.deltaY > 0 && currentSlide < 3) {
          isSnapping = true;
          window.scrollTo({
            top: wrapperTop + (currentSlide + 1) * slideHeight,
            behavior: 'smooth'
          });
          setTimeout(() => { isSnapping = false; }, 800);
        } else if (e.deltaY < 0 && currentSlide > 0) {
          isSnapping = true;
          window.scrollTo({
            top: wrapperTop + currentSlide * slideHeight,
            behavior: 'smooth'
          });
          setTimeout(() => { isSnapping = false; }, 800);
        }
      }
    }, { passive: false });
  }

  // ─── Smooth Anchor Scroll ───
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const offset = navbar ? navbar.offsetHeight + 10 : 0;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // ─── Active Nav Link on Scroll ───
  const navLinks = document.querySelectorAll('.navbar-link');
  const sections = document.querySelectorAll('section[id]');
  if (navLinks.length && sections.length) {
    let activeTicking = false;

    function updateActiveLink() {
      const scrollY = window.scrollY;
      const offset = 150;

      let currentId = 'hero';
      sections.forEach((section) => {
        const top = section.offsetTop - offset;
        const bottom = top + section.offsetHeight;
        if (scrollY >= top && scrollY < bottom) {
          currentId = section.getAttribute('id');
        }
      });

      navLinks.forEach((link) => {
        const href = link.getAttribute('href').replace('#', '');
        link.classList.toggle('active', href === currentId);
      });
    }

    window.addEventListener('scroll', () => {
      if (!activeTicking) {
        requestAnimationFrame(() => {
          updateActiveLink();
          activeTicking = false;
        });
        activeTicking = true;
      }
    }, { passive: true });
  }

  // ─── Back to Top ───
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    let bttTicking = false;

    function updateBackToTop() {
      if (window.scrollY > window.innerHeight * 0.5) {
        backToTop.classList.add('is-visible');
      } else {
        backToTop.classList.remove('is-visible');
      }
    }

    window.addEventListener('scroll', () => {
      if (!bttTicking) {
        requestAnimationFrame(() => {
          updateBackToTop();
          bttTicking = false;
        });
        bttTicking = true;
      }
    }, { passive: true });

    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ─── CTA Button (removed) ───

  // ─── Contact Form Handler ───
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('.form-submit');
      const originalText = btn.innerHTML;
      btn.innerHTML = '<span>Message Sent!</span>';
      btn.style.pointerEvents = 'none';
      setTimeout(() => {
        btn.innerHTML = originalText;
        btn.style.pointerEvents = '';
        contactForm.reset();
      }, 3000);
    });
  }

  // ─── Newsletter Form Handler ───
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = newsletterForm.querySelector('.newsletter-input');
      const btn = newsletterForm.querySelector('.newsletter-submit');
      const originalText = btn.textContent;
      btn.textContent = 'Subscribed!';
      btn.style.pointerEvents = 'none';
      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.pointerEvents = '';
        input.value = '';
      }, 3000);
    });
  }
});