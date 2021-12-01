//Scroll Navbar
window.onscroll = () => {
    scrollNavbar()
};

scrollNavbar = () => {
    const navbar = document.getElementById('navbar');
    if (document.documentElement.scrollTop > 100) {
        navbar.classList.add('change-color-nav');
    } else{
        navbar.classList.remove('change-color-nav')
    }
}


// COUNTER 
const counters = document.querySelectorAll('.counter');
const counterSection = document.querySelector('.counter-area');
const speed = 200;
function incCounter(){
counters.forEach(counter => {

    const animate = () => {

        const value = +counter.getAttribute('data-count');
        const data = +counter.innerText;
        const time = value / speed;

        if (data < value) {
            counter.innerText = Math.ceil(data + time);
            setTimeout(animate, 1);
        } else {
            counter.innerText = value;
        }
    }
    animate();
});
};

// While scrolling down counter works
const counterSectionOptions = {
    rootMargin: "0px"
};

const counterSectionObserver = new IntersectionObserver(function(entries,counterSectionObserver){
    entries.forEach(entry=>{
        if(!entry.isIntersecting){
            return;
        }else{
            incCounter();
        }
    })
},counterSectionOptions);

counterSectionObserver.observe(counterSection);

