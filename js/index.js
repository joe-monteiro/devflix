console.log("Testando o arquivo index.js");

document.querySelectorAll('.profile').forEach(link => {
    link.addEventListener('click', () => {
        const name = link.dataset.name;
        const img = link.dataset.img;
        localStorage.setItem('activeProfile', JSON.stringify({ name, img }));
    });
});


window.addEventListener('load', () => {
    const splash = document.getElementById('splash');
    const logo = document.querySelector('.splash-logo');

    // Ativar glitch no momento de impacto
    setTimeout(() => {
        logo.classList.add('glitch');
    }, 1200);

    // Remover glitch
    setTimeout(() => {
        logo.classList.remove('glitch');
    }, 1800);

    // Fade out geral
    setTimeout(() => {
        splash.classList.add('fade-out');
    }, 2500);

    // Remover completamente
    setTimeout(() => {
        splash.style.display = 'none';
    }, 3300);
});

const navEntries = performance.getEntriesByType("navigation");
const isReload = navEntries.length > 0 && navEntries[0].type === "reload";

if (!sessionStorage.getItem('introPlayed') || isReload) {
    sessionStorage.setItem('introPlayed', 'true');
} else {
    document.getElementById('splash').style.display = 'none';
}
