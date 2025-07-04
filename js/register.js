   document.getElementById('registerForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Coleta os dados do formulário
            const formData = {
                name: document.getElementById('name').value,
                surname: document.getElementById('surname').value,
                nickname: document.getElementById('nickname').value,
                email: document.getElementById('email').value,
                password: document.getElementById('password').value,
                birthdate: document.getElementById('birthdate').value,
                role: document.getElementById('role').value
            };

            // Simula o envio dos dados
            console.log('Dados do cadastro:', formData);
            
            // Feedback visual
            const btn = document.querySelector('.register-btn');
            btn.textContent = 'Registrando...';
            btn.disabled = true;
            
            setTimeout(() => {
                btn.textContent = 'Registrado com sucesso!';
                btn.style.background = 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)';
                
                setTimeout(() => {
                    btn.textContent = 'Registrar';
                    btn.disabled = false;
                    document.getElementById('registerForm').reset();
                }, 2000);
            }, 1500);
        });

        // Validação em tempo real para campos únicos
        document.getElementById('nickname').addEventListener('blur', function() {
            // Simulação de validação de apelido único
            const value = this.value;
            if (value) {
                // Aqui você faria uma requisição para verificar se o apelido já existe
                console.log('Verificando se o apelido "' + value + '" está disponível...');
            }
        });

        document.getElementById('email').addEventListener('blur', function() {
            // Simulação de validação de email único
            const value = this.value;
            if (value) {
                // Aqui você faria uma requisição para verificar se o email já existe
                console.log('Verificando se o email "' + value + '" está disponível...');
            }
        });