const btnTop = document.getElementById('btn-top');
const divTargetProjects = document.getElementById('projects');
const divTargetServices = document.getElementById('services');
const divTargetContact = document.getElementById('contact')
const scrollButtons = document.querySelectorAll('.buttons-scroll')
const scrollButton = document.getElementById('scroll-button');

scrollButtons.forEach(btn => {
    btn.addEventListener('click', (ev) => {
        scrollButtons.forEach(button => {
            button.classList.remove('active-btn');
        });
        
        ev.target.classList.add('active-btn')

        if(ev.target.innerText === 'Serviços') {
            divTargetServices.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            })
        } else if(ev.target.innerText === 'Projetos') {
            divTargetProjects.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            })
        } else {
            divTargetContact.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            })
        }
    })
})

scrollButton.addEventListener('click', () => {
    divTargetProjects.scrollIntoView({
        behavior: "smooth",
        block: "start"
    })
})

const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('opacity-show');
        } else {
            entry.target.classList.remove('opacity-show');
        }
    })
});

const elements = document.querySelectorAll('.opacity-hidden');

elements.forEach((element) => myObserver.observe(element));


document.addEventListener('scroll', () => {

    const posicaoDiv = document.body.getBoundingClientRect().top;

    if(posicaoDiv < -900) {
        btnTop.classList.remove('hidden');
        btnTop.classList.add('block');
    } else {
        btnTop.classList.add('hidden');
        btnTop.classList.remove('block');
    }
});

btnTop.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: "smooth"})
})