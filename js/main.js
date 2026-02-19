/**
 * OWNS — Main Entry Point
 */
import { registerRoute, initRouter, initScrollAnimations } from './router.js';
import { renderNavbar } from './navbar.js';
import { renderFooter } from './footer.js';
import { renderHome } from './pages/home.js';
import { renderProduct } from './pages/product.js';
import { renderAlertSystem } from './pages/alert-system.js';
import { renderAbout } from './pages/about.js';
import { renderContact } from './pages/contact.js';

// App root
const app = document.getElementById('app');

// Build layout
const navbar = renderNavbar();
const pageContainer = document.createElement('main');
pageContainer.id = 'page';
pageContainer.setAttribute('role', 'main');
const footer = renderFooter();

app.appendChild(navbar);
app.appendChild(pageContainer);
app.appendChild(footer);

// Register routes
registerRoute('/', renderHome);
registerRoute('/product', renderProduct);
registerRoute('/alert-system', renderAlertSystem);
registerRoute('/about', renderAbout);
registerRoute('/contact', renderContact);

// Start router
initRouter(pageContainer);

// Initialize scroll animations
document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimations();
});
