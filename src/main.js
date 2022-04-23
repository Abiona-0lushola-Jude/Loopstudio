const menuBtn = document.querySelector('.menu-btn')
const menu= document.querySelector('.menu')
function toggleMenu(){
    menuBtn.classList.toggle('open')
    menu.classList.toggle('open')
}
menuBtn.addEventListener('click', toggleMenu)