document.addEventListener('DOMContentLoaded',() => {const currentPage = window.location.pathname.split('/').pop();const landingPageElements = ['hero-section','highlight-section','features-benefits-section','what-simas-does-section','advantages-section','testimonials-section','footer-section'];const aboutPageElements = ['about-hero-section','our-story-section','our-values-section','footer-section'];const featuresPageElements = ['features-hero-section','core-features-section','benefits-features-section','use-cases-section','footer-section'];const contatoPageElements = ['contact-hero-section','contact-form-section','contact-info-section','footer-section'];function checkCssLoaded(elementSelector,expectedCssProperty,expectedCssValue,pageName){const element = document.querySelector(elementSelector);if(element){const computedStyle = getComputedStyle(element);if(computedStyle[expectedCssProperty]===expectedCssValue){console.log(`✅ Teste CSS: style.css parece estar carregado corretamente para ${pageName}.`);return true;}else{console.error(`❌ Teste CSS: style.css pode não estar carregado ou a propriedade ${expectedCssProperty} do elemento ${elementSelector} está incorreta em ${pageName}.`);console.error(`Cor esperada: ${expectedCssValue}, Cor obtida:`,computedStyle[expectedCssProperty]);return false;}}else{console.error(`❌ Teste CSS: Elemento ${elementSelector} não encontrado em ${pageName}.`);return false;}}function checkElementsPresence(elementsToCheck,pageName){let allElementsPresent = true;elementsToCheck.forEach(id=>{if(document.getElementById(id)){console.log(`✅ Elemento presente: #${id} em ${pageName}.`);}else{console.error(`❌ Elemento ausente: #${id} em ${pageName}.`);allElementsPresent = false;}});return allElementsPresent;}// Scroll animations
const animateOnScrollElements = document.querySelectorAll('[data-animate-on-scroll]');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {  

        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
        } else {
            entry.target.classList.remove('animated');
        }
    });
}, { threshold: 0.1 }); // Adjust threshold as needed

animateOnScrollElements.forEach(element => {
    observer.observe(element);
});


const mainHeader = document.querySelector('.main-header');
if (mainHeader) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) { // Adjust this value as needed
            mainHeader.classList.add('scrolled');
        } else {
            mainHeader.classList.remove('scrolled');
        }
    });
}function runPageTests(pageName,cssSelector,cssProperty,cssValue,elements){console.log(`Iniciando testes de integração para ${pageName}...`);checkCssLoaded(cssSelector,cssProperty,cssValue,pageName);checkElementsPresence(elements,pageName);console.log(`Testes de integração para ${pageName} concluídos.`);}if(currentPage==='Landing.Page.html'){runPageTests('Landing.Page.html','#hero-section','backgroundColor','rgb(44, 62, 80)',landingPageElements);}else if(currentPage==='About.html'){runPageTests('About.html','#about-hero-section h1','color','rgb(255, 255, 255)',aboutPageElements);}else if(currentPage==='Features.html'){runPageTests('Features.html','#features-hero-section h1','color','rgb(255, 255, 255)',featuresPageElements);}else if(currentPage==='Contato.html'){runPageTests('Contato.html','#contact-hero-section h1','color','rgb(255, 255, 255)',contatoPageElements);}});