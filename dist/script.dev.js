"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var currentPage = window.location.pathname.split('/').pop();
  var landingPageElements = ['hero-section', 'highlight-section', 'features-benefits-section', 'what-simas-does-section', 'advantages-section', 'testimonials-section', 'footer-section'];
  var aboutPageElements = ['about-hero-section', 'our-story-section', 'our-values-section', 'footer-section'];
  var featuresPageElements = ['features-hero-section', 'core-features-section', 'benefits-features-section', 'use-cases-section', 'footer-section'];
  var contatoPageElements = ['contact-hero-section', 'contact-form-section', 'contact-info-section', 'footer-section'];

  function checkCssLoaded(elementSelector, expectedCssProperty, expectedCssValue, pageName) {
    var element = document.querySelector(elementSelector);

    if (element) {
      var computedStyle = getComputedStyle(element);

      if (computedStyle[expectedCssProperty] === expectedCssValue) {
        console.log("\u2705 Teste CSS: style.css parece estar carregado corretamente para ".concat(pageName, "."));
        return true;
      } else {
        console.error("\u274C Teste CSS: style.css pode n\xE3o estar carregado ou a propriedade ".concat(expectedCssProperty, " do elemento ").concat(elementSelector, " est\xE1 incorreta em ").concat(pageName, "."));
        console.error("Cor esperada: ".concat(expectedCssValue, ", Cor obtida:"), computedStyle[expectedCssProperty]);
        return false;
      }
    } else {
      console.error("\u274C Teste CSS: Elemento ".concat(elementSelector, " n\xE3o encontrado em ").concat(pageName, "."));
      return false;
    }
  }

  function checkElementsPresence(elementsToCheck, pageName) {
    var allElementsPresent = true;
    elementsToCheck.forEach(function (id) {
      if (document.getElementById(id)) {
        console.log("\u2705 Elemento presente: #".concat(id, " em ").concat(pageName, "."));
      } else {
        console.error("\u274C Elemento ausente: #".concat(id, " em ").concat(pageName, "."));
        allElementsPresent = false;
      }
    });
    return allElementsPresent;
  } // Scroll animations


  var animateOnScrollElements = document.querySelectorAll('[data-animate-on-scroll]');
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
      } else {
        entry.target.classList.remove('animated');
      }
    });
  }, {
    threshold: 0.1
  }); // Adjust threshold as needed

  animateOnScrollElements.forEach(function (element) {
    observer.observe(element);
  });
  var mainHeader = document.querySelector('.main-header');

  if (mainHeader) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
        // Adjust this value as needed
        mainHeader.classList.add('scrolled');
      } else {
        mainHeader.classList.remove('scrolled');
      }
    });
  }

  function runPageTests(pageName, cssSelector, cssProperty, cssValue, elements) {
    console.log("Iniciando testes de integra\xE7\xE3o para ".concat(pageName, "..."));
    checkCssLoaded(cssSelector, cssProperty, cssValue, pageName);
    checkElementsPresence(elements, pageName);
    console.log("Testes de integra\xE7\xE3o para ".concat(pageName, " conclu\xEDdos."));
  }

  if (currentPage === 'Landing.Page.html') {
    runPageTests('Landing.Page.html', '#hero-section', 'backgroundColor', 'rgb(44, 62, 80)', landingPageElements);
  } else if (currentPage === 'About.html') {
    runPageTests('About.html', '#about-hero-section h1', 'color', 'rgb(255, 255, 255)', aboutPageElements);
  } else if (currentPage === 'Features.html') {
    runPageTests('Features.html', '#features-hero-section h1', 'color', 'rgb(255, 255, 255)', featuresPageElements);
  } else if (currentPage === 'Contato.html') {
    runPageTests('Contato.html', '#contact-hero-section h1', 'color', 'rgb(255, 255, 255)', contatoPageElements);
  }
});
//# sourceMappingURL=script.dev.js.map
