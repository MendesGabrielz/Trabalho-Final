document.addEventListener('DOMContentLoaded', function() {
    // 1. Seleciona os elementos pelos IDs
    const sidebar = document.getElementById('sidebarMenu');
    const openBtn = document.getElementById('openMenuButton');
    const closeBtn = document.getElementById('closeMenuButton');

    // Função para abrir o menu: adiciona a classe 'active'
    const showSidebar = (event) => {
        event.preventDefault(); // Evita que o link # mude a URL
        sidebar.classList.add('active');
        // Opcional: Travar a rolagem do corpo
        document.body.style.overflowY = 'hidden'; 
    };

    // Função para fechar o menu: remove a classe 'active'
    const hideSidebar = (event) => {
        if(event) event.preventDefault(); // Evita que o link # mude a URL
        sidebar.classList.remove('active');
        // Opcional: Restaurar a rolagem do corpo
        document.body.style.overflowY = 'auto'; 
    };

    // 2. Adiciona os Event Listeners
    openBtn.addEventListener('click', showSidebar);
    closeBtn.addEventListener('click', hideSidebar);

    // 3. Opcional: Fechar o menu ao clicar em qualquer link interno
    const menuLinks = sidebar.querySelectorAll('li a:not(.icon-close)');
    menuLinks.forEach(link => {
        link.addEventListener('click', hideSidebar);
    });
});