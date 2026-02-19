/**
 * Product Page
 */
export function renderProduct(target) {
    target.innerHTML = `
        <!-- Page Hero -->
        <section class="page-hero">
            <div class="container">
                <span class="badge animate" style="background: rgba(255,255,255,0.1); color: var(--color-gold-light); border: 1px solid rgba(255,255,255,0.15);">
                    ⌚ O Produto
                </span>
                <h1 class="animate" style="margin-top: var(--space-5);">O Smartwatch que<br>Cuida Deles</h1>
                <p class="animate">
                    Um dispositivo maravilhosamente simples, repleto de tecnologia que salva vidas. 
                    Concebido para os seus entes queridos idosos, impulsionado por segurança inteligente.
                </p>
            </div>
        </section>

        <!-- Feature Grid -->
        <section class="section">
            <div class="container">
                <div class="section__header">
                    <h2 class="animate">Tudo o que Precisam. Nada do que não Precisam.</h2>
                    <p class="section__subtitle animate">
                        Cada funcionalidade foi concebida com um objetivo: manter os seus entes queridos seguros 
                        enquanto mantém a experiência sem esforço.
                    </p>
                </div>
                <div class="grid grid--3 animate-stagger">
                    <div class="card animate">
                        <div class="card__icon card__icon--gold">🔋</div>
                        <h3 class="card__title">Bateria de 7 Dias</h3>
                        <p class="card__text">
                            Uma carga dura uma semana inteira. Sem o incómodo do carregamento diário — 
                            apenas proteção fiável e interrupta.
                        </p>
                    </div>
                    <div class="card animate">
                        <div class="card__icon card__icon--teal">💧</div>
                        <h3 class="card__title">Resistente à Água</h3>
                        <p class="card__text">
                            A classificação IP68 significa que é seguro no duche, na chuva 
                            ou enquanto lavam as mãos. Não é necessário tirá-lo.
                        </p>
                    </div>
                    <div class="card animate">
                        <div class="card__icon card__icon--rose">🆘</div>
                        <h3 class="card__title">Botão SOS Único</h3>
                        <p class="card__text">
                            Um único toque no botão lateral envia um alerta de emergência imediato 
                            para todos os contactos de confiança. Simples quando mais importa.
                        </p>
                    </div>
                    <div class="card animate">
                        <div class="card__icon card__icon--navy">🤖</div>
                        <h3 class="card__title">Deteção Automática</h3>
                        <p class="card__text">
                            Quedas, inatividade prolongada e ritmos cardíacos irregulares são 
                            detetados automaticamente — não é necessário premir botões.
                        </p>
                    </div>
                    <div class="card animate">
                        <div class="card__icon card__icon--gold">📍</div>
                        <h3 class="card__title">Rastreamento GPS</h3>
                        <p class="card__text">
                            A partilha de localização em tempo real permite que os membros da família saibam onde 
                            o seu ente querido está, proporcionando uma camada extra de tranquilidade.
                        </p>
                    </div>
                    <div class="card animate">
                        <div class="card__icon card__icon--teal">☁️</div>
                        <h3 class="card__title">Sempre Ligado</h3>
                        <p class="card__text">
                            A conectividade 4G integrada significa que o relógio funciona em qualquer lugar — 
                            sem necessidade de emparelhamento com smartphone. Verdadeira independência.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- How It Works -->
        <section class="section section--alt">
            <div class="container">
                <div class="section__header">
                    <h2 class="animate">Como Funciona</h2>
                    <p class="section__subtitle animate">Três passos simples para a segurança.</p>
                </div>
                <div class="how-it-works__steps animate">
                    <div class="how-it-works__step">
                        <div class="how-it-works__number">1</div>
                        <h4>Configurar Contactos</h4>
                        <p class="text-muted" style="font-size: var(--font-size-sm); margin-top: var(--space-2);">
                            Adicione membros da família ou cuidadores que devem ser notificados em caso de evento.
                        </p>
                    </div>
                    <div class="how-it-works__arrow">→</div>
                    <div class="how-it-works__step">
                        <div class="how-it-works__number">2</div>
                        <h4>Usar o Relógio</h4>
                        <p class="text-muted" style="font-size: var(--font-size-sm); margin-top: var(--space-2);">
                            Coloque-o e esqueça-se dele. O OWNS faz tudo o resto automaticamente.
                        </p>
                    </div>
                    <div class="how-it-works__arrow">→</div>
                    <div class="how-it-works__step">
                        <div class="how-it-works__number">3</div>
                        <h4>Ficar Protegido</h4>
                        <p class="text-muted" style="font-size: var(--font-size-sm); margin-top: var(--space-2);">
                            O relógio monitoriza constantemente e alerta a família instantaneamente se algo parecer errado.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Specifications -->
        <section class="section">
            <div class="container container--narrow">
                <div class="section__header">
                    <h2 class="animate">Especificações Técnicas</h2>
                </div>
                <div class="card animate" style="padding: 0; overflow: hidden;">
                    <table class="specs-table">
                        <tbody>
                            <tr><td>Duração da Bateria</td><td>Até 7 dias com uma única carga</td></tr>
                            <tr><td>Resistência à Água</td><td>IP68 — seguro em duches e chuva</td></tr>
                            <tr><td>Peso</td><td>38g — ultra-leve</td></tr>
                            <tr><td>Ecrã</td><td>1.4" AMOLED, sempre ligado, alto contraste</td></tr>
                            <tr><td>Conectividade</td><td>4G LTE, Bluetooth 5.2, GPS</td></tr>
                            <tr><td>Sensores</td><td>Frequência cardíaca, acelerómetro, giroscópio, SpO2</td></tr>
                            <tr><td>Botão SOS</td><td>Botão lateral dedicado para alertas de emergência</td></tr>
                            <tr><td>Carregamento</td><td>Base magnética — encaixar e carregar</td></tr>
                            <tr><td>Material da Bracelete</td><td>Silicone hipoalergénico de grau médico</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>

        <!-- CTA -->
        <section class="cta-banner">
            <div class="container">
                <h2 class="animate">Interessado no WatchGuard?</h2>
                <p class="animate">Pré-registe-se hoje para garantir o seu lugar quando lançarmos.</p>
                <a href="#/contact" class="btn btn--primary btn--lg animate">Pré-registe-se Agora</a>
            </div>
        </section>
    `;
}
