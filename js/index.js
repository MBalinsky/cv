const DARK_MODE_BTN = document.querySelector('.dark-mode-btn');

if(localStorage.getItem('theme') === "dark"){
    DARK_MODE_BTN.classList.add('dark-mode-btn--active');
    document.body.classList.add('dark');
} else if(localStorage.getItem('theme') === "light"){
    DARK_MODE_BTN.classList.remove('dark-mode-btn--active');
    document.body.classList.remove('dark');
}

//Проверка системных настроек
if(window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches){
    DARK_MODE_BTN.classList.add('dark-mode-btn--active');
    document.body.classList.add('dark');
}

window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', (e) => {
    console.log(e.matches)
    const NEW_COLOR_THEME = e.matches ? 'dark' : 'light';

    if(NEW_COLOR_THEME === 'dark'){
        DARK_MODE_BTN.classList.add('dark-mode-btn--active');
        document.body.classList.add('dark');
        localStorage.setItem('theme', "dark");
    } else{
        DARK_MODE_BTN.classList.remove('dark-mode-btn--active');
        document.body.classList.remove('dark');
        localStorage.setItem('theme', "light");
    }
})

DARK_MODE_BTN.addEventListener('click', function() {
    this.classList.toggle('dark-mode-btn--active');
    const isDark = document.body.classList.toggle('dark');
    localStorage.clear()
    if(isDark){
        localStorage.setItem('theme', "dark");
    } else {
        localStorage.setItem('theme', "light");
    }
})

//burger 
const BURGER = document.querySelector('.nav__burger');
const POPUP = document.querySelector('.nav-list-popup')

BURGER.addEventListener('click', function(){
    this.classList.toggle('nav__burger--active');
    POPUP.classList.toggle('nav-list-popup--active');
    document.body.style.overflow = 'hidden'
})

document.querySelectorAll('.nav-list__link').forEach(el => {
    el.addEventListener("click", function(){
        BURGER.classList.remove('nav__burger--active');
        POPUP.classList.remove('nav-list-popup--active');
        document.body.style.overflow = 'visible';
    })
})

window.addEventListener("click", function(e){
    if(e.target.classList.contains('nav-list-popup')){
        BURGER.classList.remove('nav__burger--active');
        POPUP.classList.remove('nav-list-popup--active');
        document.body.style.overflow = 'visible';
    }
})