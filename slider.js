const sliderCarusel = document.querySelector('.slider-carusel');
const sliderImeges = document.querySelectorAll(".slider-carusel img");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let counter = 1;


const size= sliderImeges[0].clientWidth;

sliderCarusel.style.transform = 'translateX(' + (-size * counter)+ 'px)';


next.addEventListener('click', () => {
    if(counter >= sliderImeges.length-1) return;
    sliderCarusel.style.transition  = 'transform 0.4s ease-in-out'
    counter++;
    sliderCarusel.style.transform = 'translateX(' + (-size * counter)+ 'px)';
})


prev.addEventListener('click', () => {
    if(counter <= 0) return;
    sliderCarusel.style.transition  = 'transform 0.4s ease-in-out'
    counter--;
    sliderCarusel.style.transform = 'translateX(' + (-size * counter)+ 'px)';
})

sliderCarusel.addEventListener('transitionend', () => {
    if(sliderImeges[counter].id == 'lastClon'){
        sliderCarusel.style.transition  = 'none'
        counter = sliderImeges.length - 2;
        sliderCarusel.style.transform = 'translateX(' + (-size * counter)+ 'px)';
    }
    if(sliderImeges[counter].id == 'nextClon'){
        sliderCarusel.style.transition  = 'none'
        counter = sliderImeges.length - counter;
        sliderCarusel.style.transform = 'translateX(' + (-size * counter)+ 'px)';
    }
})