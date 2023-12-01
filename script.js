const sidebarBtn = document.getElementById('sidebar-toggle');
const nav = document.getElementById('nav');
const media = window.matchMedia('(width < 800px)');

sidebarBtn.addEventListener('click', (e) => {
    nav.style.transition = '.3s ease-in';
    nav.classList.toggle('show-nav');
    // if (nav.classList.contains('show-nav')) {
    //         sidebarBtn.style.display = 'none';
    //     } else {
    //         sidebarBtn.style.display = 'flex';
    //     }
    const closeBtn = nav.querySelector('.close-btn');
        closeBtn.addEventListener('click', () => {
            nav.classList.remove('show-nav');
            // sidebarBtn.style.display = 'flex';
        })
})

media.addEventListener('change', (e) => {
        // console.log('window.matchMedia change = ' + e.matches);
        setupNav(e);
    
})

window.addEventListener('DOMContentLoaded', (e) => {
    nav.className = 'desktop-nav';
    sidebarBtn.style.display = 'none';
})

function setupNav(e) {
    if (e.matches) {
        console.log('is mobile');
        nav.className = 'nav';
        sidebarBtn.style.display = 'flex';
        // nav.style.transition = '.3s ease-in';
        console.log(nav.className);
        
    } else {
        console.log('is desktop');
        nav.className = 'desktop-nav';
        sidebarBtn.style.display = 'none';
        console.log(nav.className);
    }
}