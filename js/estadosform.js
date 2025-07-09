 document.getElementById('form-estados').addEventListener('submit', function (e) {
            e.preventDefault();
            
            const nome = document.getElementById('nome').value;
            const sigla = document.getElementById('sigla').value;
            const messageDiv = document.getElementById('message');

            // Simular validação
            if (nome.trim() === '' || sigla.trim() === '') {
                showMessage('Por favor, preencha todos os campos obrigatórios.', 'error');
                return;
            }

            if (sigla.length !== 2) {
                showMessage('A sigla deve ter exatamente 2 caracteres.', 'error');
                return;
            }

            // Simular salvamento
            showMessage(`Estado salvo com sucesso!\nNome: ${nome}\nSigla: ${sigla.toUpperCase()}`, 'success');
            
            // Limpar formulário
            this.reset();
        });

        function showMessage(text, type) {
            const messageDiv = document.getElementById('message');
            messageDiv.textContent = text;
            messageDiv.className = `message ${type}`;
            messageDiv.style.display = 'block';
            
            // Esconder mensagem após 5 segundos
            setTimeout(() => {
                messageDiv.style.display = 'none';
            }, 5000);
        }

        // Converter sigla para maiúsculas automaticamente
        document.getElementById('sigla').addEventListener('input', function(e) {
            e.target.value = e.target.value.toUpperCase();
        });