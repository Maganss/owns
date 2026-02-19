/**
 * Contact / Pre-register Page
 */
export function renderContact(target) {
    target.innerHTML = `
        <!-- Page Hero -->
        <section class="page-hero">
            <div class="container">
                <span class="badge animate" style="background: rgba(255,255,255,0.1); color: var(--color-gold-light); border: 1px solid rgba(255,255,255,0.15);">
                    ✉️ Pré-registo
                </span>
                <h1 class="animate" style="margin-top: var(--space-5);">
                    Seja o Primeiro a Saber<br>Quando Lançarmos
                </h1>
                <p class="animate">
                    Registe-se agora e notificá-lo-emos assim que o OWNS estiver disponível. 
                    Sem spam, apenas um email quando for importante.
                </p>
            </div>
        </section>

        <!-- Contact Form -->
        <section class="section">
            <div class="container">
                <div class="contact-layout">
                    <div class="contact-form animate slide-in-left" id="contactFormWrapper">
                        <h3>Pré-registe o seu Interesse</h3>
                        <p>Preencha os seus dados e manter-nos-emos em contacto.</p>
                        
                        <form id="preregisterForm" novalidate>
                            <div class="form-group">
                                <label class="form-label" for="name">Nome Completo *</label>
                                <input type="text" id="name" name="name" class="form-input" 
                                       placeholder="ex: Maria Silva" required
                                       aria-describedby="nameError">
                                <div class="form-error" id="nameError" role="alert"></div>
                            </div>

                            <div class="form-group">
                                <label class="form-label" for="email">Endereço de Email *</label>
                                <input type="email" id="email" name="email" class="form-input" 
                                       placeholder="ex: maria@email.com" required
                                       aria-describedby="emailError">
                                <div class="form-error" id="emailError" role="alert"></div>
                            </div>

                            <div class="form-group">
                                <label class="form-label" for="relationship">Eu sou... *</label>
                                <select id="relationship" name="relationship" class="form-select" required
                                        aria-describedby="relationshipError">
                                    <option value="">Por favor selecione</option>
                                    <option value="self">Um potencial utilizador (para mim)</option>
                                    <option value="family">Um familiar / cuidador</option>
                                    <option value="professional">Um profissional de saúde</option>
                                    <option value="investor">Um investidor / parceiro</option>
                                    <option value="other">Outro</option>
                                </select>
                                <div class="form-error" id="relationshipError" role="alert"></div>
                            </div>

                            <div class="form-group">
                                <label class="form-label" for="message">Mensagem (opcional)</label>
                                <textarea id="message" name="message" class="form-textarea" 
                                          placeholder="Diga-nos qualquer coisa — perguntas, sugestões ou apenas um olá!"></textarea>
                            </div>

                            <button type="submit" class="btn btn--primary btn--lg" style="width: 100%;" id="submitBtn">
                                Pré-registe-se Agora
                            </button>
                        </form>
                    </div>

                    <div class="contact-info animate slide-in-right">
                        <h3>Outras Formas de nos Contactar</h3>
                        
                        <div class="contact-info__item">
                            <div class="contact-info__icon">📧</div>
                            <div class="contact-info__text">
                                <strong>Email</strong>
                                <span>ola@watchguard.com</span>
                            </div>
                        </div>

                        <div class="contact-info__item">
                            <div class="contact-info__icon">📍</div>
                            <div class="contact-info__text">
                                <strong>Localização</strong>
                                <span>Lisboa, Portugal</span>
                            </div>
                        </div>

                        <div class="contact-info__item">
                            <div class="contact-info__icon">🕐</div>
                            <div class="contact-info__text">
                                <strong>Tempo de Resposta</strong>
                                <span>Respondemos em 24 horas</span>
                            </div>
                        </div>

                        <div style="margin-top: var(--space-12); padding: var(--space-8); background: hsla(38, 85%, 55%, 0.08); border-radius: var(--radius-lg);">
                            <h4 style="margin-bottom: var(--space-3);">🤝 Para Investidores</h4>
                            <p style="font-size: var(--font-size-sm); color: var(--color-text-light); margin-bottom: var(--space-4);">
                                Interessado em estabelecer uma parceria ou investir no OWNS? 
                                Adoraríamos partilhar a nossa visão e roteiro consigo.
                            </p>
                            <a href="mailto:investors@watchguard.com" class="btn btn--outline btn--sm">
                                Contactar Relações com Investidores
                            </a>
                        </div>

                        <div style="margin-top: var(--space-8); padding: var(--space-8); background: hsla(175, 50%, 42%, 0.08); border-radius: var(--radius-lg);">
                            <h4 style="margin-bottom: var(--space-3);">🏥 Para Profissionais de Saúde</h4>
                            <p style="font-size: var(--font-size-sm); color: var(--color-text-light); margin-bottom: var(--space-4);">
                                Trabalha em cuidados a idosos? Adoraríamos discutir como o OWNS 
                                poderia apoiar os seus pacientes e residentes.
                            </p>
                            <a href="mailto:clinical@watchguard.com" class="btn btn--outline btn--sm">
                                Contactar Equipa Clínica
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;


    // Form validation and submission
    setupForm();
}

function setupForm() {
    setTimeout(() => {
        const form = document.getElementById('preregisterForm');
        if (!form) return;

        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const relationship = document.getElementById('relationship');

            let valid = true;

            // Reset errors
            clearError('nameError', name);
            clearError('emailError', email);
            clearError('relationshipError', relationship);

            // Validate name
            if (!name.value.trim()) {
                showError('nameError', 'Por favor insira o seu nome.', name);
                valid = false;
            }

            // Validate email
            if (!email.value.trim()) {
                showError('emailError', 'Por favor insira o seu endereço de email.', email);
                valid = false;
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
                showError('emailError', 'Por favor insira um endereço de email válido.', email);
                valid = false;
            }

            // Validate relationship
            if (!relationship.value) {
                showError('relationshipError', 'Por favor selecione uma opção.', relationship);
                valid = false;
            }

            if (valid) {
                // Show success state
                const wrapper = document.getElementById('contactFormWrapper');
                wrapper.innerHTML = `
                    <div class="form-success">
                        <div class="form-success__icon scale-in visible">✅</div>
                        <h3>Está na Lista!</h3>
                        <p>
                            Obrigado, <strong>${name.value.trim()}</strong>! Enviaremos um email para 
                            <strong>${email.value.trim()}</strong> assim que o WatchGuard estiver pronto para envio.
                        </p>
                        <p style="margin-top: var(--space-6);">
                            <a href="#/" class="btn btn--outline">Voltar ao Início</a>
                        </p>
                    </div>
                `;
            }
        });

        // Real-time validation on blur
        ['name', 'email', 'relationship'].forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                el.addEventListener('blur', () => {
                    clearError(id + 'Error', el);
                });
            }
        });
    }, 100);
}

function showError(errorId, message, inputEl) {
    const errorEl = document.getElementById(errorId);
    if (errorEl) {
        errorEl.textContent = message;
    }
    if (inputEl) {
        inputEl.style.borderColor = 'var(--color-error)';
    }
}

function clearError(errorId, inputEl) {
    const errorEl = document.getElementById(errorId);
    if (errorEl) {
        errorEl.textContent = '';
    }
    if (inputEl) {
        inputEl.style.borderColor = '';
    }
}
