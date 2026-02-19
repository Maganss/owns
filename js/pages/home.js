/**
 * Home Page
 */
export function renderHome(target) {
    target.innerHTML = `
        <!-- Hero Section -->
        <section class="hero" id="hero">
            <div class="container">
                <div class="hero__inner">
                    <div class="hero__content">
                        <span class="badge hero__badge animate">🛡️ Dispositivo de Segurança Autónomo</span>
                        <h1 class="hero__title animate">
                            <span style="white-space: nowrap;">Segurança para si,</span><br>
                            <span>Tranquilidade</span> para toda a família.
                        </h1>
                        <p class="hero__subtitle animate">
                            O OWNS é um smartwatch inteligente concebido para idosos. 
                            Monitoriza, deteta anomalias e alerta automaticamente a família — para que a ajuda 
                            chegue quando mais importa.
                        </p>
                        <div class="hero__actions animate">
                            <a href="#/product" class="btn btn--primary btn--lg">Descubra o Relógio</a>
                            <a href="#/contact" class="btn btn--secondary btn--lg">Pré-registe-se Agora</a>
                        </div>
                    </div>
                    <div class="hero__image animate scale-in">
                        <div class="hero__watch-visual float">
                            <div class="watch-band-top"></div>
                            <div class="watch-body">
                                <div class="watch-screen">
                                    <div class="watch-time">10:42</div>
                                    <div class="watch-heart">❤️</div>
                                    <div class="watch-heart-rate">72 bpm</div>
                                </div>
                                <div class="watch-button"></div>
                            </div>
                            <div class="watch-band-bottom"></div>
                            <div class="watch-notification pulse">
                                <span class="watch-notification__dot"></span>
                                Sinais vitais normais
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Feature Highlights -->
        <section class="section features" id="features">
            <div class="container">
                <div class="section__header">
                    <span class="badge animate">✨ Principais Características</span>
                    <h2 class="animate">Feito para Segurança.<br>Concebido para Simplicidade.</h2>
                    <p class="section__subtitle animate">
                        O OWNS funciona de forma autónoma — sem configurações complexas, sem menus confusos. 
                        Basta colocá-lo e sentir-se seguro.
                    </p>
                </div>
                <div class="grid grid--3 animate-stagger">
                    <div class="card animate">
                        <div class="card__icon card__icon--gold">🤖</div>
                        <h3 class="card__title">Monitorização Autónoma</h3>
                        <p class="card__text">
                            O relógio monitoriza continuamente a atividade e os padrões de saúde sem exigir 
                            qualquer intervenção do utilizador. Basta usá-lo e continuar o seu dia.
                        </p>
                    </div>
                    <div class="card animate">
                        <div class="card__icon card__icon--rose">🚨</div>
                        <h3 class="card__title">Alertas Instantâneos</h3>
                        <p class="card__text">
                            Quando uma anomalia é detetada — como uma queda ou batimentos irregulares — o relógio 
                            notifica automaticamente os seus contactos de confiança. Não precisa de carregar em botões.
                        </p>
                    </div>
                    <div class="card animate">
                        <div class="card__icon card__icon--teal">🧓</div>
                        <h3 class="card__title">Concebido para Conforto</h3>
                        <p class="card__text">
                            Leve, fácil de usar e feito especificamente para idosos. 
                            Ecrã grande, interface simples e bracelete macia para conforto durante todo o dia.
                        </p>
                    </div>
                </div>
            </div>
        </section>


        <!-- CTA Banner -->
        <section class="cta-banner">
            <div class="container">
                <h2 class="animate">Pronto para dar paz de espírito à sua família?</h2>
                <p class="animate">
                    Junte-se a centenas de famílias que já estão à espera do OWNS. 
                    Pré-registe-se hoje e seja o primeiro a saber quando lançarmos.
                </p>
                <a href="#/contact" class="btn btn--primary btn--lg animate pulse">Pré-registe-se Gratuitamente</a>
            </div>
        </section>
    `;
}
