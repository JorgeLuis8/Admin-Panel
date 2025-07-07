// Carrega a sidebar
fetch('components/sidebar.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('sidebar').innerHTML = data;
    iniciarSidebar();        // Aplica os comportamentos visuais do menu
    addSidebarListeners();   // Aplica os eventos de clique para navegação dinâmica
  });

// Função para carregar conteúdo principal dinamicamente
function loadPage(page) {
  fetch(`pages/${page}.html`)
    .then(response => response.text())
    .then(data => {
      document.getElementById('main-content').innerHTML = data;
    });
}

// Aplica os eventos de clique depois que a sidebar estiver no DOM
function addSidebarListeners() {
  document.querySelectorAll('.submenu-item').forEach(item => {
    item.addEventListener('click', () => {
      const label = item.querySelector('span:last-child').innerText.trim().toLowerCase();
      loadPage(label); // Ex: pages/estados.html
    });
  });

  document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', () => {
      const label = item.querySelector('span:last-child').innerText.trim().toLowerCase();
      if (!item.hasAttribute('data-submenu')) {
        loadPage(label); // Ex: pages/dashboard.html
      }
    });
  });
}
