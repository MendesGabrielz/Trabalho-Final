document.addEventListener('DOMContentLoaded', initMenu);

document.addEventListener('DOMContentLoaded', initMenu);

function initMenu() {
    setupSidebarMenu();
    showWelcome(); // mostra Bem-vindo ou Usuário
}

function setupSidebarMenu() {
    const sidebar = document.getElementById('sidebarMenu');
    const openBtn = document.getElementById('openMenuButton');
    const closeBtn = document.getElementById('closeMenuButton');

    const showSidebar = (e) => {
        e.preventDefault();
        sidebar.classList.add('active');
    };

    const hideSidebar = (e) => {
        if (e) e.preventDefault();
        sidebar.classList.remove('active');
    };

    openBtn.addEventListener('click', showSidebar);
    closeBtn.addEventListener('click', hideSidebar);

    sidebar.querySelectorAll('li a:not(.icon-close)').forEach(link => {
        link.addEventListener('click', hideSidebar);
    });
}

function showWelcome() {
    const area = document.getElementById('welcome');
    if (!area) return;

    const user = localStorage.getItem('userName');

    if (user) {
        area.innerHTML = `Bem-vindo, ${user}`;
    } else {
        area.innerHTML = `Bem-vindo,<a href="login.html"> Usuário</a>`;
    }

    console.log("JS CARREGOU!");

}

