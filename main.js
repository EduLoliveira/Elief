
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




// // main_container
const directory = './assets/images';
const filenames = ['img.jpg', 'img1.jpg', 'img3.jpg', 'img4.jpg', 'img5.png', 'img6.jpg'];

filenames.forEach((filename) => {
    // Criação do div para a imagem
    const div = document.createElement('div');
    const img = document.createElement('img');
    img.src = `${directory}/${filename}`;
    img.alt = filename;
    img.classList.add('main_container--div-img');
    div.classList.add('main_container--div');
    div.appendChild(img);

    // Criação do div para informações
    const p = document.createElement('p');
    const small = document.createElement('small');
    const span = document.createElement('span');
    const ancora = document.createElement('a');
    
    p.textContent = 'livro';
    small.textContent = 'Por apenas';
    span.textContent = 'R$69,90';
    ancora.href = '#';
    ancora.textContent = 'Saber Mais'


    const filho_div = document.createElement('div');
    filho_div.classList.add('main_container--div-information');

    // Agora adiciona os elementos corretamente
    filho_div.appendChild(p);
    filho_div.appendChild(small);
    filho_div.appendChild(span); 
    filho_div.appendChild(ancora);

    // Adicionando o div de informações dentro do div principal
    div.appendChild(filho_div);
    main.appendChild(div);
});