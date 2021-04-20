window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
  }, false);

const m = document.getElementById('mode')
m.addEventListener('click', myfun)

function myfun(){
    if(m.checked == true){
        document.body.classList.add('dark-mode')
    }
    else{
        document.body.classList.remove('dark-mode')
    }
}
const nav = document.querySelector('.nav-links')
const burger = document.querySelector('.burger')
console.log(nav)
const NavSlide = ()=>{
    burger.addEventListener('click', ()=>
    {
        //console.log('click')
         nav.classList.toggle('active-nav')
        burger.classList.toggle('cross')
    });
}
NavSlide()