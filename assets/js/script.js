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
ScrollReveal().reveal('.img-salon', {delay:500 , origin:'left'})
ScrollReveal().reveal('.img-desings', {delay:500, origin: 'rigth'})
ScrollReveal().reveal('.indications-scroll', {delay:500, origin: 'rigth'})

///////////////////////////SHOW MENU/////////////////////////////////////////////
document.getElementById('button-menu').addEventListener('click', ()=>{
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

//////////////////////////////CHANGE HEADER BACKGROUND///////////////////////////////////////////////
window.addEventListener('scroll', ()=>{
    let header = document.getElementById('header');
    let appoinment = document.getElementById('appointment');
    let headerApair = appoinment.getBoundingClientRect().top;

    if(headerApair <=0 ){
        header.classList.add('header-bg');
    }else{
        header.classList.remove('header-bg')
    }
})