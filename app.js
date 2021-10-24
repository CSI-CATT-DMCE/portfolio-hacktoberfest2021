document.addEventListener('DOMContentLoaded', () => {   
    window.addEventListener('scroll', ()=>{
        let header = document.querySelector('header');
        let windowPosition = window.scrollY > 170;
        header.classList.toggle('scrolling-active', windowPosition);        
    });
});