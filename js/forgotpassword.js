  document.getElementById('forgotPasswordForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Coleta os dados do formulário
            const email = document.getElementById('email').value;
            
            console.log('Email para recuperação:', email);
            
            // Feedback visual
            const btn = document.querySelector('.submit-btn');
            const originalText = btn.textContent;
            
            btn.textContent = 'Enviando...';
            btn.disabled = true;
            
            // Simula o envio do email
            setTimeout(() => {
                btn.textContent = 'Link Enviado!';
                btn.style.background = 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)';
                
                // Mostra mensagem de sucesso
                const infoBox = document.querySelector('.info-box');
                infoBox.innerHTML = '<span class="info-box-icon">✅</span>Email de recuperação enviado com sucesso! Verifique sua caixa de entrada.';
                infoBox.style.background = '#f0fff4';
                infoBox.style.borderColor = '#c6f6d5';
                
                // Desabilita o formulário
                document.getElementById('email').disabled = true;
                
                setTimeout(() => {
                    // Aqui você pode redirecionar para uma página de confirmação
                    console.log('Redirecionando para página de confirmação...');
                }, 2000);
                
            }, 2000);
        });

    

        // Validação de email em tempo real
        document.getElementById('email').addEventListener('input', function() {
            const email = this.value;
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (email && !emailRegex.test(email)) {
                this.style.borderColor = '#e53e3e';
                this.style.boxShadow = '0 0 0 3px rgba(229, 62, 62, 0.1)';
            } else {
                this.style.borderColor = '#e2e8f0';
                this.style.boxShadow = 'none';
            }
        });