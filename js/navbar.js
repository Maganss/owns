import { getCurrentRoute } from './router.js';

/**
 * Render the navigation bar
 */
export function renderNavbar() {
    const nav = document.createElement('nav');
    nav.className = 'navbar';
    nav.setAttribute('role', 'navigation');
    nav.setAttribute('aria-label', 'Main navigation');

    const links = [
        { path: '/', label: 'Início' },
        { path: '/product', label: 'Produto' },
        { path: '/alert-system', label: 'Sistema de Alerta' },
        { path: '/about', label: 'Sobre Nós' },
        { path: '/contact', label: 'Pré-registo' },
    ];

    const currentPath = getCurrentRoute();

    nav.innerHTML = `
        <div class="container">
            <div class="navbar__inner">
                <a href="#/" class="navbar__logo">
                    <img src="assets/logo.png" alt="OWNS Logo" class="navbar__logo-img" style="height: 48px; width: auto; border-radius: 8px;">
                    <span>OWNS</span>
                </a>
                <ul class="navbar__links" id="navLinks">
                    ${links.map(link => `
                        <li>
                            <a href="#${link.path}" 
                               class="navbar__link ${currentPath === link.path ? 'active' : ''} ${link.path === '/contact' ? 'btn btn--primary btn--sm navbar__cta' : ''}">
                                ${link.label}
                            </a>
                        </li>
                    `).join('')}
                </ul>
                <button class="navbar__toggle" id="navToggle" aria-label="Toggle menu" aria-expanded="false">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </div>
        <div class="mobile-menu-overlay" id="mobileOverlay"></div>
    `;

    // Setup scroll behavior

    // Setup scroll behavior
    let ticking = false;
    const onScroll = () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                if (window.scrollY > 50) {
                    nav.classList.add('scrolled');
                } else {
                    nav.classList.remove('scrolled');
                }
                ticking = false;
            });
            ticking = true;
        }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // Check initial state

    // Mobile menu toggle
    setTimeout(() => {
        const toggle = document.getElementById('navToggle');
        const navLinks = document.getElementById('navLinks');
        const overlay = document.getElementById('mobileOverlay');

        if (toggle && navLinks) {
            toggle.addEventListener('click', () => {
                navLinks.classList.toggle('open');
                if (overlay) overlay.classList.toggle('active');
                toggle.setAttribute('aria-expanded', navLinks.classList.contains('open'));
            });

            if (overlay) {
                overlay.addEventListener('click', () => {
                    navLinks.classList.remove('open');
                    overlay.classList.remove('active');
                    toggle.setAttribute('aria-expanded', 'false');
                });
            }

            navLinks.querySelectorAll('.navbar__link').forEach(link => {
                link.addEventListener('click', () => {
                    navLinks.classList.remove('open');
                    if (overlay) overlay.classList.remove('active');
                    toggle.setAttribute('aria-expanded', 'false');
                });
            });
        }
    }, 100);

    // Update active link on route change
    window.addEventListener('hashchange', () => {
        const current = getCurrentRoute();
        nav.querySelectorAll('.navbar__link').forEach(link => {
            const href = link.getAttribute('href');
            if (href) {
                const linkPath = href.slice(1); // Remove #
                link.classList.toggle('active', linkPath === current);
            }
        });
    });

    return nav;
}
