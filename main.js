
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

// Atualizar a posição quando a página carregar
updateFixedElementPosition();

const directory = './assets/images';
const items = [
    { filename: 'Notas_nilistas.jpg', book: 'Notas Nilis...', price: 69.90 },
    { filename: 'Ano_Zero.jpg', book: 'Ano Zero', price: 59.90 },
    { filename: 'Uma_Poesia_Pra_Cada_Dia.jpg', book: 'Uma poesia...', price: 69.90 },
    { filename: 'Mamae_Erotica.jpg', book: 'Mamãe erótica', price: 69.90 },
    // { filename: 'img5.png', book: 'Livro E', price: 69.90 },
    // { filename: 'img6.jpg', book: 'Livro F', price: 69.90 }
];

items.forEach(({ filename, book, price }) => {
    // Criação do elemento principal
    const div = document.createElement('div');
    div.classList.add('main_container--div');

    // Adicionando a imagem
    const img = document.createElement('img');
    img.src = `${directory}/${filename}`;
    img.alt = book;
    img.classList.add('main_container--div-img');
    div.appendChild(img);

    // Criação do div para informações
    const infoDiv = document.createElement('div');
    infoDiv.classList.add('main_container--div-information');

    // Adicionando o nome do livro
    const p = document.createElement('p');
    p.textContent = book;

    // Texto adicional
    const small = document.createElement('small');
    small.textContent = 'Por apenas';

    // Preço
    const span = document.createElement('span');
    span.textContent = `R$${price.toFixed(2)}`;

    // Link de ação
    const link = document.createElement('a');
    link.href = '#';
    link.textContent = 'Saber Mais';

    // Adicionando elementos no div de informações
    infoDiv.appendChild(p);
    infoDiv.appendChild(small);
    infoDiv.appendChild(span);
    infoDiv.appendChild(link);

    // Adicionando div de informações no div principal
    div.appendChild(infoDiv);

    // Adicionando evento de clique para exibir os detalhes no console
    div.addEventListener('click', () => {
        console.log({
            filename,
            book,
            description: `O livro ${book} custa R$${price.toFixed(2)} e está localizado em ${directory}/${filename}.`
        });
    });

    // Adicionando o div principal ao container
    main.appendChild(div);
});
