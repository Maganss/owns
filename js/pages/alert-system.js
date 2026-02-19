/**
 * Alert System Page
 */
export function renderAlertSystem(target) {
    target.innerHTML = `
        <!-- Page Hero -->
        <section class="page-hero">
            <div class="container">
                <span class="badge animate" style="background: rgba(255,255,255,0.1); color: var(--color-gold-light); border: 1px solid rgba(255,255,255,0.15);">
                    🚨 O Sistema de Alerta
                </span>
                <h1 class="animate" style="margin-top: var(--space-5);">
                    Como o OWNS<br>os Mantém Seguros
                </h1>
                <p class="animate">
                    Desde a deteção até à resposta — cada segundo conta. Aqui está exatamente o que acontece 
                    quando o OWNS deteta algo fora do comum.
                </p>
            </div>
        </section>

        <!-- Timeline -->
        <section class="section">
            <div class="container">
                <div class="section__header">
                    <h2 class="animate">A Jornada do Alerta</h2>
                    <p class="section__subtitle animate">
                        Uma cadeia de eventos totalmente automática concebida para minimizar o tempo de resposta 
                        e maximizar a probabilidade de um desfecho positivo.
                    </p>
                </div>

                <div class="timeline">
                    <div class="timeline__item animate slide-in-left">
                        <div class="timeline__icon">🔍</div>
                        <div class="timeline__content">
                            <h3>1. Anomalia Detetada</h3>
                            <p>
                                Os sensores do OWNS monitorizam continuamente o movimento, a frequência cardíaca e os padrões de atividade. 
                                Quando algo invulgar é detetado — como uma queda súbita, inatividade prolongada ou 
                                ritmo cardíaco irregular — o sistema ativa-se imediatamente.
                            </p>
                        </div>
                    </div>

                    <div class="timeline__item animate slide-in-left">
                        <div class="timeline__icon">📡</div>
                        <div class="timeline__content">
                            <h3>2. Alerta Enviado Automaticamente</h3>
                            <p>
                                Poucos segundos após a deteção, o OWNS envia um alerta através da sua rede 4G segura e 
                                sempre ligada. Não é necessário premir botões — o sistema age por si só, mesmo que 
                                o utilizador não consiga responder.
                            </p>
                        </div>
                    </div>

                    <div class="timeline__item animate slide-in-left">
                        <div class="timeline__icon">👨‍👩‍👧</div>
                        <div class="timeline__content">
                            <h3>3. Família Notificada</h3>
                            <p>
                                Os seus contactos de confiança pré-configurados recebem uma notificação instantânea no seu 
                                telemóvel com detalhes sobre o evento e a localização GPS atual do utilizador. Eles 
                                podem ver exatamente o que aconteceu e onde.
                            </p>
                        </div>
                    </div>

                    <div class="timeline__item animate slide-in-left">
                        <div class="timeline__icon">🏥</div>
                        <div class="timeline__content">
                            <h3>4. Autoridades Contactadas</h3>
                            <p>
                                Se a situação for avaliada como crítica — ou se nenhum membro da família responder 
                                dentro de um prazo definido — o OWNS pode escalar automaticamente o alerta para 
                                os serviços de emergência, partilhando a localização e os dados de saúde do utilizador.
                            </p>
                        </div>
                    </div>

                    <div class="timeline__item animate slide-in-left">
                        <div class="timeline__icon">✅</div>
                        <div class="timeline__content">
                            <h3>5. A Ajuda Chega Mais Rápido</h3>
                            <p>
                                Como a cadeia de alertas é totalmente automática e inclui dados de localização precisos, 
                                os tempos de resposta são dramaticamente reduzidos. Cada segundo poupado pode fazer a diferença 
                                numa emergência.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Reassurance Section -->
        <section class="section section--alt">
            <div class="container container--narrow text-center">
                <div class="animate">
                    <div style="font-size: 48px; margin-bottom: var(--space-6);">🛡️</div>
                    <h2>Projetado com Cuidado. Construído com Confiança.</h2>
                    <div class="divider"></div>
                    <p style="font-size: var(--font-size-lg); color: var(--color-text-light); max-width: 600px; margin: 0 auto var(--space-6);">
                        Compreendemos que confiar a segurança de um ente querido à tecnologia é uma grande decisão. 
                        É por isso que o OWNS é construído com sensores de grau hospitalar, comunicações encriptadas 
                        e sistemas de alerta redundantes. Se o canal primário falhar, os sistemas de reserva garantem que o 
                        alerta chegue sempre ao destino.
                    </p>
                </div>
                <div class="grid grid--3 animate-stagger" style="margin-top: var(--space-12);">
                    <div class="card animate text-center">
                        <div style="font-size: 32px; margin-bottom: var(--space-4);">🔐</div>
                        <h4 style="margin-bottom: var(--space-2);">Encriptação de Ponta a Ponta</h4>
                        <p class="card__text">Todos os dados são encriptados do relógio para o seu telemóvel. A privacidade nunca é comprometida.</p>
                    </div>
                    <div class="card animate text-center">
                        <div style="font-size: 32px; margin-bottom: var(--space-4);">🔄</div>
                        <h4 style="margin-bottom: var(--space-2);">Sistemas Redundantes</h4>
                        <p class="card__text">Múltiplos mecanismos de segurança garantem que os alertas sejam entregues, mesmo que um canal falhe.</p>
                    </div>
                    <div class="card animate text-center">
                        <div style="font-size: 32px; margin-bottom: var(--space-4);">🧪</div>
                        <h4 style="margin-bottom: var(--space-2);">Testado Clinicamente</h4>
                        <p class="card__text">Os nossos algoritmos de deteção são validados face a dados clínicos reais para garantir a precisão.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA -->
        <section class="cta-banner">
            <div class="container">
                <h2 class="animate">Cada Segundo Conta</h2>
                <p class="animate">
                    Não espere por uma emergência. Pré-registe-se agora e dê à sua família 
                    a proteção que ela merece.
                </p>
                <a href="#/contact" class="btn btn--primary btn--lg animate">Pré-registe-se Hoje</a>
            </div>
        </section>
    `;
}
