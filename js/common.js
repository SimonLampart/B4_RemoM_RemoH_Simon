      const burgerMenu = document.querySelector('.burger-menu');
        const nav = document.querySelector('header nav');
        const footer = document.querySelector('footer');

        const contactForm = document.querySelector('.two-columns form');
        const throbberOverlay = document.getElementById('throbberOverlay');
        const rouletteWrapper = document.getElementById('rouletteWrapper');
        const rouletteWheel = document.getElementById('rouletteWheel');
        const rouletteResult = document.getElementById('rouletteResult');
        const winningMessageSpan = document.getElementById('winningMessage');
        const winningCodeParagraph = document.getElementById('winningCode');
        const closeRouletteButton = document.getElementById('closeRouletteButton');

        // Definition der möglichen Gewinne und ihrer Codes
        const prizes = [
            { name: "5.- Gutschein", code: "GUTSCHEIN5", type: "gutschein" },
            { name: "Gratis Versand", code: "GRATISVERSAND", type: "gratis_versand" },
            { name: "Niete", code: "", type: "niete" },
            { name: "100.- Gutschein", code: "GUTSCHEIN100", type: "gutschein" },
            { name: "Gratis Versand", code: "GRATISVERSAND", type: "gratis_versand" },
            { name: "Niete", code: "", type: "niete" }
        ];

        burgerMenu.addEventListener('click', () => {
            nav.classList.toggle('open');
        });

        function checkFooterVisibility() {
            const documentHeight = document.documentElement.scrollHeight;
            const windowHeight = window.innerHeight;
            const scrollY = window.scrollY;
            const footerHeight = footer.offsetHeight;

            if (scrollY + windowHeight >= documentHeight - footerHeight) {
                footer.classList.add('visible');
            } else {
                footer.classList.remove('visible');
            }
        }

        window.addEventListener('scroll', checkFooterVisibility);
        window.addEventListener('resize', checkFooterVisibility);
        checkFooterVisibility();

        document.addEventListener('DOMContentLoaded', () => {
            const navLinks = document.querySelectorAll('header nav ul li a');
            const currentPath = window.location.pathname.split('/').pop();

            navLinks.forEach(link => {
                const linkPath = link.getAttribute('href').split('/').pop();
                if (linkPath === currentPath) {
                    link.classList.add('active');
                }
            });
        });
