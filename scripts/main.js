const btnTop = document.getElementById('btn-top');
const divTargetProjects = document.getElementById('projects');
const divTargetServices = document.getElementById('services');
const divTargetContact = document.getElementById('contact');
const scrollButton = document.getElementById('scroll-button');
const btnMenu = document.getElementById('btn-menu');
const menu = document.getElementById('menu');
let isMenuOpen = false;
let newDiv;

function scrollMoveDiv(name, event) {
    
    removeClasseBtn(event);

    if(name === "Projetos") {
        divTargetProjects.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    } else if(name === "Serviços") {
        divTargetServices.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
        })
    } else if(name === "Contato") {
        divTargetContact.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    }
}

function removeClasseBtn(event) {
    const allButtons = document.querySelectorAll('.buttons-scroll');

    allButtons.forEach(btn => {
        btn.classList.remove('active-btn');
    })

    event.target.classList.add('active-btn');
}

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
    window.scrollTo({top: 0, behavior: "smooth"});
})

btnMenu.addEventListener('click', () => {
    menu.classList.toggle('hidden');

    if (!isMenuOpen) {
        newDiv = document.createElement('div');
        newDiv.classList.add('flex', 'flex-col', 'items-center', 'w-40', 'h-screen', 'bg-gray200');

        newDiv.innerHTML = `
            <div class="mt-4 flex items-center">
                <h1 class="text-subtitle font-asap text-gray600">Portfólio</h1>
            </div>
            <div class="mt-5">
                <ul class="flex flex-col gap-2">
                    <li onclick="scrollMoveDiv('Projetos', event)" class="buttons-scroll text-subtitle font-asap text-gray500 hover:bg-gray300 p-2 rounded-xl transition-hover duration-300 cursor-pointer">
                        Projetos
                    </li>
                    <li onclick="scrollMoveDiv('Serviços', event)" class="buttons-scroll text-subtitle font-asap text-gray500 hover:bg-gray300 p-2 rounded-xl transition-hover duration-300 cursor-pointer">
                        Serviços
                    </li>
                    <li onclick="scrollMoveDiv('Contato', event)" class="buttons-scroll text-subtitle font-asap text-gray500 hover:bg-gray300 p-2 rounded-xl transition-hover duration-300 cursor-pointer">
                        Contato
                    </li>
                </ul>
            </div>
        `;

        menu.appendChild(newDiv);
        isMenuOpen = true;
    } else {
        isMenuOpen = false;
    }
});

window.addEventListener('click', (ev) => {
    if (!ev.target.closest('#menu') && !ev.target.closest('#btn-menu')) {
        menu.classList.add('hidden');
        newDiv.remove();
        isMenuOpen = false;
    }
});