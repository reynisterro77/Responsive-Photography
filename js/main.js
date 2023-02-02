//change nav style on scroll
window.addEventListener('scroll',()=>{
    document.querySelector('nav').classList.toggle('window-scrolled', window.scrollY>0);
})

//CONTACT BUTTONS (circular text buttons)
const textButtons=document.querySelectorAll('.contact_btn');
textButtons.forEach(textButton=> {
    let text=textButton.querySelector('p');

    text.innerHTML=text.innerHTML.split('').map((character,index)=>`<span style="transform: rotate(${index*12}deg)">${character}</span>`).join('');
})


// GAllery Swiper+
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints:{
        599:{
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1023:{
            slidesPerView: 3,
            spaceBetween: 60,
        }
    }
});

const nav=document.querySelector('.nav_links');
const openNavBtn=document.querySelector('#nav_toggle-open');
const closeNavBtn=document.querySelector('#nav_toggle-close');

const opanNav=()=>{
    nav.style.display='flex';
    openNavBtn.style.display='none';
    closeNavBtn.style.display='inline-block';
}
openNavBtn.addEventListener('click',opanNav);

const closeNav=()=>{
    nav.style.display='none';
    openNavBtn.style.display='inline-block';
    closeNavBtn.style.display='none';
}
closeNavBtn.addEventListener('click',closeNav);

//close nav menu on click of menu link
if (document.body.clientWidth<1024){
    nav.querySelectorAll('li a').forEach(navlink=>{
        navlink.addEventListener('click',closeNav);
    })
}










