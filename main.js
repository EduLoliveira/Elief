// Efeito de Click para exibir Menu com opções
const menuNav = document.querySelector('.header_span--input');
const menuNavbar = document.querySelector('.menu-bar--check');

menuNav.addEventListener('click', () => {
    if (menuNav.checked == true){
        menuNavbar.style.left = '0';
    } 
});

document.addEventListener('click', (event) => { 
    if (!menuNavbar.contains(event.target) && event.target !== menuNav) { 
        menuNavbar.style.left = '-100%'; 
    } 
});



// Efeito de Click para exibir option de filter
const buttonFilter = document.querySelector('#checked');
const filter = document.querySelector('.menu-filtered');
const ico = document.querySelector('#iconFilter');

buttonFilter.addEventListener ('click',() => {
    if(buttonFilter.checked == true){
        filter.style.top = '50%'
        setTimeout(() => {
            ico.classList.remove('fa-chevron-down');
            ico.classList.add('fa-chevron-up');
            console.log('final')
        }, 350);
    } else {
        filter.style.top = '-100%'
        ico.classList.add('fa-chevron-down');
        ico.classList.remove('fa-chevron-up');
        console.log('inicio')
    }
})



// Condição para calcular a posição os elementos filhos de elementos com position fixed
const topElement = document.querySelector('.header');
const section = document.querySelector('.section');
const sec = document.querySelector('.section_container');
const main = document.querySelector('.main_container');


// Atualizar a posição quando a página carregar
let hasExecuted = false; // Variável de controle
function updateFixedElementPosition() {
    if (hasExecuted)
         return; 

    const topElementRect = topElement.getBoundingClientRect();
    const secSectionRect = section.getBoundingClientRect();

    // Guardando e Calculando os valores
    const headerBottom = topElementRect.bottom;
    section.style.top = `${headerBottom}px`;
    console.log('Header Bottom:', headerBottom);

    const sectionBottom = secSectionRect.bottom;
    sec.style.top = `${sectionBottom}px`;
    console.log('Section Bottom:', sectionBottom);

    const calculatedMainTop = headerBottom + sectionBottom;
    main.style.top = `${calculatedMainTop}px`;
    console.log('Calculated Main Top:', calculatedMainTop);
    console.log('Depurei Um');

    hasExecuted = true; 
}
updateFixedElementPosition();

const directory = './assets/images';
const items = [
    { filename: 'Notas_Nilistas.jpg', book: 'Notas Nilis...', fullNameBook:'Notas Nilistas', price: 69.90, information: 'Uma obra sobre lorem ipson lorem ipson lorel ipson lorem ipson...' },
    { filename: 'Ano_Zero.jpg', book: 'Ano Zero', price: 59.90, fullNameBook:'Ano Zero', information: 'A narrativa de um mundo lorem ipson lorem ipson lorel ipson lorem ipson...' },
    { filename: 'Uma_Poesia_Pra_Cada_Dia.jpg', book: 'Uma poesia...', fullNameBook:'Uma Poesia Pra Cada Dia', price: 69.90, information: 'Uma coleção inspiradora lorem ipson lorem ipson lorel ipson lorem ipson...' },
    { filename: 'Mamae_Erotica.jpg', book: 'Mamãe eró...', fullNameBook:'Mamãe Erótica', price: 69.90, information: 'Um conto sensual e lorem ipson lorem ipson lorel ipson lorem ipson...' },
];

const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalClose = document.querySelector('.modal-content-close');

// Função para abrir o modal
const openModal = (item) => {
    modalImg.src = `${directory}/${item.filename}`;
    modalImg.alt = item.fullNameBook;
    modalTitle.textContent = item.fullNameBook;
    modalDescription.textContent = item.information;

    modal.classList.remove('hidden');
    modal.classList.add('visible');
};

// Fechar o modal
modalClose.addEventListener('click', () => {
    modal.classList.remove('visible');
    modal.classList.add('hidden');
});

// Criar os livros dinamicamente
items.forEach(({ filename, book, fullNameBook, price, information }) => {
    const div = document.createElement('div');
    div.classList.add('main_container--div');

    const img = document.createElement('img');
    img.src = `${directory}/${filename}`;
    img.alt = fullNameBook;
    img.classList.add('main_container--div-img');
    div.appendChild(img);

    const infoDiv = document.createElement('div');
    infoDiv.classList.add('main_container--div-information');

    const p = document.createElement('p');
    p.textContent = book;

    const small = document.createElement('small');
    small.textContent = 'Por apenas';

    const span = document.createElement('span');
    span.textContent = `R$${price.toFixed(2)}`;

    const link = document.createElement('a');
    link.href = '#';
    link.textContent = 'Saber Mais';
    link.addEventListener('click', (e) => {
        e.preventDefault(); 
        openModal({ filename, fullNameBook, information });
    });

    infoDiv.appendChild(p);
    infoDiv.appendChild(small);
    infoDiv.appendChild(span);
    infoDiv.appendChild(link);

    div.appendChild(infoDiv);

    // Adiciona evento de clique para abrir o modal
    div.addEventListener('click', () => {
        openModal({ filename, fullNameBook, information });
    });

    // Adiciona o div principal ao container
    main.appendChild(div);
});
