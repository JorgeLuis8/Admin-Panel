function iniciarSidebar() {
    // Adiciona funcionalidade ao menu
    document.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('click', function() {
            if (this.hasAttribute('data-submenu')) {
                const submenuId = 'submenu-' + this.getAttribute('data-submenu');
                const submenu = document.getElementById(submenuId);

                this.classList.toggle('open');
                submenu.classList.toggle('open');
                return;
            }

            document.querySelectorAll('.menu-item').forEach(i => i.classList.remove('active'));
            document.querySelectorAll('.submenu-item').forEach(i => i.classList.remove('active'));

            this.classList.add('active');

            console.log('Menu clicado:', this.textContent.trim());
        });
    });

    // Funcionalidade para submenu items
    document.querySelectorAll('.submenu-item').forEach(item => {
        item.addEventListener('click', function() {
            document.querySelectorAll('.menu-item').forEach(i => i.classList.remove('active'));
            document.querySelectorAll('.submenu-item').forEach(i => i.classList.remove('active'));

            this.classList.add('active');

            console.log('Submenu clicado:', this.textContent.trim());
        });
    });
}

// Deixe acessível globalmente
window.iniciarSidebar = iniciarSidebar;
