/**
 * About Us Page
 */
export function renderAbout(target) {
    target.innerHTML = `
        <!-- Page Hero -->
        <section class="page-hero">
            <div class="container">
                <span class="badge animate" style="background: rgba(255,255,255,0.1); color: var(--color-gold-light); border: 1px solid rgba(255,255,255,0.15);">
                    🧑‍🤝‍🧑 Sobre Nós
                </span>
                <h1 class="animate" style="margin-top: var(--space-5);">
                    As Pessoas por Trás<br>do OWNS
                </h1>
                <p class="animate">
                    Somos uma equipa pequena com uma grande missão: garantir que nenhum idoso 
                    enfrente uma emergência sem ajuda.
                </p>
            </div>
        </section>

        <!-- Mission -->
        <section class="section">
            <div class="container">
                <div class="mission">
                    <div class="animate slide-in-left">
                        <span class="badge" style="margin-bottom: var(--space-5); display: inline-flex;">🎯 Nossa Missão</span>
                        <h2 style="margin-bottom: var(--space-6);">Porque Ninguém Deve Enfrentar uma Emergência Sem Ajuda</h2>
                        <p style="color: var(--color-text-light); font-size: var(--font-size-lg);">
                            O OWNS nasceu de uma história que nos alertou. Um estudo recente revelou um caso devastador: uma senhora idosa caiu em casa e não conseguiu chamar ajuda — ficou horas sozinha até ser encontrada. Esse relato mostrou-nos uma realidade que afeta milhares de famílias: quando ocorre uma emergência, cada segundo conta, e a tecnologia disponível não estava a ajudar quem mais precisa. Assim, criámos um dispositivo simples, fiável e sempre ativo — para que você e sua família tenham a tranquilidade que merecem.
                        </p>
                        <p style="color: var(--color-text-light);">
                            Desenvolvemos o OWNS para ser o dispositivo de segurança mais simples que pode oferecer aos seus ente queridos. Sem aplicações complicadas, sem menus confusos — apenas um relógio que funciona silenciosamente e avisa imediatamente quando algo precisa de atenção. A nossa missão é dar às famílias a tranquilidade que merecem, sabendo que os seus entes queridos estão protegidos 24 horas por dia, 7 dias por semana — mesmo quando você não pode estar lá.
                        </p>
                    </div>
                    <div class="mission__visual animate scale-in">
                        <div class="mission__visual-icon">💛</div>
                        <div class="mission__visual-text">
                            "E se a ajuda pudesse chegar em minutos, não em horas?"
                        </div>
                        <div style="margin-top: var(--space-6); font-size: var(--font-size-sm); opacity: 0.6;">
                            — A pergunta que começou tudo
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Values -->
        <section class="section section--alt">
            <div class="container">
                <div class="section__header">
                    <h2 class="animate">No que Acreditamos</h2>
                </div>
                <div class="values animate-stagger">
                    <div class="card value-card animate">
                        <div class="card__icon">🤝</div>
                        <h3 class="value-card__title">Simplicidade Primeiro</h3>
                        <p class="value-card__text">
                            A tecnologia deve ser invisível. O melhor sistema de segurança é aquele que 
                            funciona sem ser necessário pensar nele.
                        </p>
                    </div>
                    <div class="card value-card animate">
                        <div class="card__icon">❤️</div>
                        <h3 class="value-card__title">Centrado na Família</h3>
                        <p class="value-card__text">
                            Cada funcionalidade que construímos começa com uma pergunta: isto 
                            aproxima as famílias e reduz a preocupação?
                        </p>
                    </div>
                    <div class="card value-card animate">
                        <div class="card__icon">🔒</div>
                        <h3 class="value-card__title">Confiança e Privacidade</h3>
                        <p class="value-card__text">
                            Os dados de saúde são profundamente pessoais. Utilizamos encriptação de ponta a ponta e 
                            nunca vendemos dados a terceiros. Nunca.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA -->
        <section class="cta-banner">
            <div class="container">
                <h2 class="animate">Junte-se a Nós nesta Missão</h2>
                <p class="animate">
                    Quer seja uma família à procura de proteção ou um investidor que partilha 
                    a nossa visão — adoraríamos ouvi-lo.
                </p>
                <a href="#/contact" class="btn btn--primary btn--lg animate">Entre em Contacto</a>
            </div>
        </section>
    `;
}
