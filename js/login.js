 document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Coleta os dados do formulário
            const formData = {
                email: document.getElementById('email').value,
                password: document.getElementById('password').value,
                remember: document.getElementById('remember').checked
            };

            // Simula o envio dos dados
            console.log('Dados do login:', formData);
            
            // Feedback visual
            const btn = document.querySelector('.login-btn');
            btn.textContent = 'Entrando...';
            btn.disabled = true;
            
            setTimeout(() => {
                btn.textContent = 'Login realizado!';
                btn.style.background = 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)';
                
                setTimeout(() => {
                    btn.textContent = 'Entrar';
                    btn.disabled = false;
                    // Aqui você redirecionaria para o dashboard
                    console.log('Redirecionando para o dashboard...');
                }, 1500);
            }, 1500);
        });


 
