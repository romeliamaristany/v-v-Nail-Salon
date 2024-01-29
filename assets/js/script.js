let menu = document.getElementById('menu')
let mainPage = document.getElementById('wrapper')
let mainPageLink = document.querySelector('.main-page-link')


/////////////////////////////HOME TRANSITIONS//////////////////////////////////////////////////////
ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2500,
    delay:100
});
ScrollReveal().reveal('.title-scroll', {delay:100 , origin: 'right'})
ScrollReveal().reveal('.diamond', {delay: 600 , origin: 'left'})
ScrollReveal().reveal('.p-scroll', {delay:600 , origin: 'left'})
ScrollReveal().reveal('.logo-img', {delay: 500, origin: 'rigth'})
ScrollReveal().reveal('.img-salon', {delay:300 , origin:'left'})
ScrollReveal().reveal('.img-desings', {delay:300, origin: 'rigth'})
//ScrollReveal().reveal('.nail-price' , {delay:300, origin: 'bottom'})

///////////////////////////SHOW MENU/////////////////////////////////////////////
document.getElementById('button-menu').addEventListener('click', ()=>{
    console.log('dsfdsfsdf')
    menu.classList.toggle('active')
    mainPage.classList.toggle('blur')
});

///////////////////////////CLOSE MENU/////////////////////////////////////////////////////
document.getElementById('close-icon').addEventListener('click', ()=>{
    menu.classList.remove('active')
    mainPage.classList.remove('blur')
});

////////////////////////////CLOSE MENU WHEN SCROLLING/////////////////////////////////////////////////////////
window.onscroll = () =>{
    menu.classList.remove('active')
    mainPage.classList.remove('blur')
};
