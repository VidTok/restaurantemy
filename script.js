gsap.to ('.smallHeadingBoxDis', {duration: 2, delay:3, opacity: 1})
gsap.from ('.logo', {y:-100, duration: 2, delay: 1, opacity: 0, ease: 'bounce'})
gsap.from ('.promoPar', {duration: 20, x:2000, repeat:-1})
gsap.from ('.headingBox', {x:-100, duration: 2, delay: 4, opacity: 0})


const btns = document.querySelectorAll ('#btn');
const order = document.querySelector ('.orderTotalPar');
let hope = [];

btns.forEach (function (item)  {
    item.addEventListener ('click', function () {
        hope.push (item.textContent);
        order.textContent = hope;
    })
})