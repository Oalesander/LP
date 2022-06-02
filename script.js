//menu mobile
const menu = document.querySelector('.menu')
const close = document.querySelector('.close')
const nav = document.querySelector('nav')
const li = document.querySelectorAll('li>a')

menu.addEventListener("click", () => {
    nav.classList.add('open-nav')
    li[0].classList.remove('hover')
    li[1].classList.remove('hover')
    li[2].classList.remove('hover')
})

close.addEventListener("click", () => {
    nav.classList.remove('open-nav')
    setTimeout (function (){
        li[0].classList.add('hover')
        li[1].classList.add('hover')
        li[2].classList.add('hover')
    },500);
});

