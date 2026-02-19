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
        <div class="navbar-inner">
            <a href="#/" class="navbar-logo">
                <img src="assets/logo.png" alt="OWNS Logo" class="navbar-logo-img">
                <span>OWNS</span>
            </a>
            <div class="navbar-right">
                <ul class="navbar-menu" id="navbarMenu">
                    ${links.map(link => `
                        <li>
                            <a href="#${link.path}" 
                               class="navbar-link ${currentPath === link.path ? 'active' : ''} ${link.path === '/contact' ? 'btn btn--primary btn--sm' : ''}">
                                ${link.label}
                            </a>
                        </li>
                    `).join('')}
                </ul>
                <button class="navbar-hamburger" id="navbarHamburger" aria-label="Menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </div>
    `;

    // Simple mobile menu toggle
    requestAnimationFrame(() => {
        const hamburger = nav.querySelector('#navbarHamburger');
        const menu = nav.querySelector('#navbarMenu');
        
        if (hamburger && menu) {
            hamburger.addEventListener('click', (e) => {
                e.stopPropagation();
                menu.classList.toggle('active');
                hamburger.classList.toggle('active');
            });

            // Close when clicking a link
            menu.querySelectorAll('.navbar-link').forEach(link => {
                link.addEventListener('click', () => {
                    menu.classList.remove('active');
                    hamburger.classList.remove('active');
                });
            });

            // Close when clicking outside
            document.addEventListener('click', (e) => {
                if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
                    menu.classList.remove('active');
                    hamburger.classList.remove('active');
                }
            });
        }
    });

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
    onScroll();

    // Update active link on route change
    window.addEventListener('hashchange', () => {
        const current = getCurrentRoute();
        nav.querySelectorAll('.navbar-link').forEach(link => {
            const href = link.getAttribute('href');
            if (href) {
                const linkPath = href.slice(1);
                link.classList.toggle('active', linkPath === current);
            }
        });
    });

    return nav;
}
