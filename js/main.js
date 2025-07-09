// js/main.js

document.addEventListener('DOMContentLoaded', async () => {
    const sidebarContainer = document.getElementById('sidebar-container');
    const mainContent = document.getElementById('mainContent');

    /**
     * Função para carregar o conteúdo de um arquivo HTML em um contêiner.
     * @param {string} url O caminho para o arquivo HTML.
     * @param {HTMLElement} container O elemento HTML onde o conteúdo será carregado.
     * @param {boolean} reExecuteScripts Define se os scripts dentro do HTML carregado devem ser re-executados.
     * @returns {Promise<void>}
     */
    async function loadHtmlIntoContainer(url, container, reExecuteScripts = false) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Erro HTTP! Status: ${response.status} ao carregar ${url}`);
            }
            const html = await response.text();
            container.innerHTML = html;

            if (reExecuteScripts) {
                // Re-executa scripts dentro do HTML carregado.
                // Essencial porque scripts inseridos via innerHTML não são executados automaticamente.
                container.querySelectorAll('script').forEach(oldScript => {
                    const newScript = document.createElement('script');
                    // Copia atributos do script original
                    Array.from(oldScript.attributes).forEach(attr => newScript.setAttribute(attr.name, attr.value));
                    // Copia o conteúdo do script
                    newScript.appendChild(document.createTextNode(oldScript.innerHTML));
                    // Substitui o script antigo pelo novo para forçar a execução
                    oldScript.parentNode.replaceChild(newScript, oldScript);
                });
            }
        } catch (error) {
            console.error('Erro ao carregar conteúdo:', error);
            container.innerHTML = `<p style="color: red;">Erro ao carregar o conteúdo de ${url}. Por favor, tente novamente.</p>`;
        }
    }

    /**
     * Função para anexar os event listeners aos itens da sidebar.
     * Esta função é chamada após a sidebar ser carregada.
     */
    function attachSidebarEventListeners() {
        // Seleciona os itens do menu dentro do container da sidebar
        const menuItems = document.querySelectorAll('.sidebar .menu-item');

        menuItems.forEach(item => {
            item.addEventListener('click', () => {
                // Remove a classe 'active' de todos os itens
                menuItems.forEach(i => i.classList.remove('active'));
                // Adiciona a classe 'active' ao item clicado
                item.classList.add('active');

                const formToLoad = item.dataset.form; // Obtém o nome do arquivo/ação do atributo data-form
                if (formToLoad) {
                    handleMainContentLoad(formToLoad);
                }
            });
        });
    }

    /**
     * Gerencia o carregamento do conteúdo principal (formulários ou dashboard/logout).
     * @param {string} contentIdentifier O identificador do conteúdo a ser carregado (nome do arquivo ou 'dashboard'/'logout').
     */
    async function handleMainContentLoad(contentIdentifier) {
        if (contentIdentifier === 'dashboard') {
            mainContent.innerHTML = `
                <h2>Bem-vindo ao Painel Administrativo</h2>
                <p>Selecione uma opção no menu lateral para começar.</p>
                `;
            return;
        }
        if (contentIdentifier === 'logout') {
            alert('Saindo...');
            // Em uma aplicação real, você faria uma chamada para o backend para encerrar a sessão
            window.location.href = 'pages/login.html'; // Exemplo de redirecionamento para a página de login
            return;
        }

        // Para formulários, o caminho é 'components/{nomeDoArquivo}.html'
        await loadHtmlIntoContainer(`components/${contentIdentifier}`, mainContent, true);
    }

    // --- Fluxo de inicialização ao carregar a página ---

    // 1. Carrega a sidebar primeiro
    await loadHtmlIntoContainer('components/sidebar.html', sidebarContainer);

    // 2. Anexa os event listeners aos itens da sidebar recém-carregada
    attachSidebarEventListeners();

    // 3. Carrega um conteúdo padrão na área principal (ex: dashboard)
    handleMainContentLoad('dashboard'); // Ou 'estadosform.html' se preferir começar com o formulário de estados
});