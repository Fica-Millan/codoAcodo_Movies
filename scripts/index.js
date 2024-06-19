// M E N U   H A M B U R G U E S A 

document.addEventListener("DOMContentLoaded", function(){
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('#nav-list');

    menuToggle.addEventListener('click', function () {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
});