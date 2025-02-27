document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
  
        const targetId = this.getAttribute("href")
        const targetElement = document.querySelector(targetId)
  
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: "smooth",
          })
        }
      })
    })
  
    // Add fixed navbar on scroll
    const navbar = document.querySelector(".navbar")
  
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        navbar.classList.add("fixed-top", "bg-light", "shadow-sm")
        navbar.classList.remove("position-absolute")
      } else {
        navbar.classList.remove("fixed-top", "bg-light", "shadow-sm")
        navbar.classList.add("position-absolute")
      }
    })
  
    // Animation on scroll
    const animateElements = document.querySelectorAll(
      ".achievement-card, .timeline-item, .education-card, .certification-card, .skill-item",
    )
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate__animated", "animate__fadeInUp")
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
      },
    )
  
    animateElements.forEach((element) => {
      element.style.opacity = "0"
      observer.observe(element)
    })
  
    // Add animation class to elements
    document.head.insertAdjacentHTML(
      "beforeend",
      '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css">',
    )
  
    // Initialize animation on page load
    setTimeout(() => {
      document
        .querySelectorAll(".achievement-card, .timeline-item, .education-card, .certification-card, .skill-item")
        .forEach((el) => {
          el.style.opacity = "1"
        })
    }, 300)
  })
  
  