/**
 * Render the footer
 */
export function renderFooter() {
    const footer = document.createElement('footer');
    footer.className = 'footer';
    footer.setAttribute('role', 'contentinfo');

    footer.innerHTML = `
        <div class="container">
            <div class="footer__grid">
                <div class="footer__brand">
                    <a href="#/" class="navbar__logo" style="margin-bottom: var(--space-4); display: flex;">
                        <img src="assets/logo.png" alt="OWNS Logo" style="height: 40px; width: auto; border-radius: 4px; margin-right: 12px;">
                        <span style="color: white; font-size: 1.5rem; font-weight: bold;">OWNS</span>
                    </a>
                    <p>
                        A redefinir a segurança e independência para a próxima geração de idosos.
                    </p>
                </div>
                <div>
                    <h4 class="footer__heading">Páginas</h4>
                    <ul class="footer__list">
                        <li><a href="#/">Início</a></li>
                        <li><a href="#/product">Produto</a></li>
                        <li><a href="#/alert-system">Sistema de Alerta</a></li>
                        <li><a href="#/about">Sobre Nós</a></li>
                        <li><a href="#/contact">Pré-registo</a></li>
                    </ul>
                </div>

                <div>
                    <h4 class="footer__heading">Mantenha-se Atualizado</h4>
                    <p style="font-size: var(--font-size-sm); color: rgba(255,255,255,0.5);">
                        Seja notificado quando o OWNS for lançado.
                    </p>
                    <div class="footer__newsletter-input">
                        <input type="email" placeholder="O seu email" aria-label="Email para newsletter">
                        <button type="button">Aderir</button>
                    </div>
                </div>
            </div>
            <div class="footer__bottom">
                <span>&copy; ${new Date().getFullYear()} OWNS. All rights reserved.</span>
                <div class="footer__socials">
                    <a href="#" aria-label="Twitter">𝕏</a>
                    <a href="#" aria-label="LinkedIn">in</a>
                    <a href="#" aria-label="Instagram">📷</a>
                </div>
            </div>
        </div>
    `;

    return footer;
}
