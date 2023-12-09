const sidebarBtn = document.getElementById('sidebar-toggle');
const nav = document.getElementById('nav');
const media = window.matchMedia('(width < 800px)');

function setupNav(e) {
    if (e.matches) {
        // console.log('is mobile');
        nav.className = 'nav';
        sidebarBtn.style.display = 'flex';
        console.log(nav.className);
        
    } else {
        // console.log('is desktop');
        nav.className = 'desktop-nav';
        sidebarBtn.style.display = 'none';
    }
}


// Event Listeners
window.addEventListener('DOMContentLoaded', (e) => {
    nav.className = 'desktop-nav';
    sidebarBtn.style.display = 'none';
})

media.addEventListener('change', (e) => {
        setupNav(e);
})

sidebarBtn.addEventListener('click', (e) => {
    nav.style.transition = '.3s ease-in';
    nav.classList.toggle('show-nav');
    const closeBtn = nav.querySelector('.close-btn');
        closeBtn.addEventListener('click', () => {
            nav.classList.remove('show-nav');
        })
})