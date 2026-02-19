/**
 * Simple hash-based router for WatchGuard SPA
 */
const routes = {};
let currentCleanup = null;

export function registerRoute(path, handler) {
    routes[path] = handler;
}

export function navigate(path) {
    window.location.hash = path;
}

export function getCurrentRoute() {
    return window.location.hash.slice(1) || '/';
}

export function initRouter(renderTarget) {
    function handleRoute() {
        const path = getCurrentRoute();
        const handler = routes[path] || routes['/'];
        
        // Cleanup previous page
        if (currentCleanup && typeof currentCleanup === 'function') {
            currentCleanup();
        }
        
        if (handler) {
            const result = handler(renderTarget);
            currentCleanup = result && typeof result === 'function' ? result : null;
        }
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'instant' });
        
        // Re-initialize scroll animations
        setTimeout(() => initScrollAnimations(), 100);
    }

    window.addEventListener('hashchange', handleRoute);
    handleRoute(); // Initial route
}

export function initScrollAnimations() {
    const elements = document.querySelectorAll('.animate, .fade-in, .scale-in, .slide-in-left, .slide-in-right');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    elements.forEach(el => observer.observe(el));
}
