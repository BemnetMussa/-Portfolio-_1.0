
let nav_bar = document.querySelector('.nav-links');

document.querySelector('#menu-btn').onclick = () => {
    nav_bar.classList.toggle('active');
}


window.onscroll = () => {
    nav_bar.classList.remove('active');
};
