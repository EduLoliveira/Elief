const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalBtn = document.getElementById('modal-btn');
const modalClose = document.querySelector('.modal-content-close');

const topElement = document.querySelector('.header');
const section = document.querySelector('.section');
const sec = document.querySelector('.section_container');
const main = document.querySelector('.main_container');

const directory = './assets/images';
const items = [
    { 
        filename: 'Notas_Nilistas.jpg', 
        book: 'Notas Nilis...', 
        fullNameBook:'Notas Nilistas', 
        price: 69.90, 
        information: 'O nilismo, filosofia que questiona o sentido e o valor da vida, encontra na poesia um meio de expressão ideal. Por meio das palavras, o poeta nilista revela sua visão de mundo sombria e desesperançada, explorando temas como a insignificância da existência humana, a ausência de propósito e a inevitabilidade do fim. Essas poesias noturnas mergulham no obscuro e lúgubre, revelando a angústia e a solidão que permeiam a mente de um poeta insone. Eliel é um homem que nao se curva antes de qualquer autoritarismo, nem aceita nenhum princípio sem o olhar crítico de um pensador...' ,
        href: 'https://w.app/vNuFgp'
    
    },
    { 
        filename: 'Ano_Zero.jpg', 
        book: 'Ano Zero', 
        price: 59.90, 
        fullNameBook:'Ano Zero', 
        information: 'Vinte anos após o grande mal que se estendeu sobre a Terra, sem qualquer controle, envolvendo pessoas, empresas e o fluxo de informações, a maioria da população não sobreviveu. Migraremos para as colônias interplanetárias ou permaneceremos numa terra decadente e dizimada? Como descrever o mundo reiniciado? O que é sobreviver após uma destruição? Alianças, confiança, ameaças, segurança, tudo esta abalado. O que é bom ou mau? O que pode mudar para sempre a percepção da realidade? Desfrutaremos de um mundo melhorado? Ou afundaremos ainda mais devido aos erros dos laboratórios bioquimicos clandestinos? Rastreamento e identificação por meio de implantes definirão quem esta curado? Novas normas de comportamento serão adotadas e, devido ao contágio, desenvolveremos máquinas interligadas, autômatas, superinteligentes e aptas a tomar decisões que podem afetar todos nós? Inteligências Artificiais atingirão a autoconsciência para moderar e assombrar o ciberespaço? Essas são as perguntas que chicoteiam nossa mente nos dias atuais. Este é o Ano Zero? Definitivamente SIM.' ,
        href: 'https://w.app/L64ynW'
    },
    { 
        filename: 'Uma_Poesia_Pra_Cada_Dia.jpg', 
        book: 'Uma poesia...', 
        fullNameBook:'Uma Poesia Pra Cada Dia', 
        price: 69.90, 
        information: 'UM DIA. Este pequeno intervalo de horas, do nascente ao poente, oferece a nós a chance de realizarmos o novo, de contemplarmos uma folha em branco, rica em possibilidades e com uma paleta inteira de cores para colorirmos. Para um ano, um novo dia pode não parecer muito, mas é uma chama de esperança que acende em nosso ser, que mantém nosso entusiasmo. É a celebração do hoje que chegou e de que amanhã outro dia virá. De que o ontem foi deixado irremediavelmente para trás e o agora, este exato momento, é tudo o que temos, tanto para agradecer, remediar, planejar e para agir. Neste compilado, você será presentado, a cada nova manhã, com uma poesia, escrita por autores advindos de todo o Brasil. Cada poesia terá sua peculiaridade, seu despertar debruçado sobre uma nova manhã. Uma poesia para cada dia....',
        href: 'https://w.app/3ZfAuQ'
    },
    { 
        filename: 'Mamae_Erotica.jpg', 
        book: 'Mamãe eró...', 
        fullNameBook:'Mamãe Erótica', 
        price: 69.90, 
        information: '“Amar, prazer, defender, contituir. Ela deitava a cabeça no travesseiro toda noite e essas quatro palavras contruiam valores que frequentemente outros queriam destruir. Mamãe erótica. Essa era a forma que o mundo lhe via, como o olho que tudo vê, numa visão panorâmica de acontecimentos dissidentes dos amores e tragédias”....', 
        href: 'https://w.app/D1MO6n'
    },
]


// Condição para calcular a posição os elementos filhos de elementos com position fixed
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

    hasExecuted = true; 
}
updateFixedElementPosition();



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



//Função de Click, opção(s) menu
const btnContato = document.querySelector('#btn-contato');
btnContato.addEventListener('click', () => {
    btnContato.href = 'https://w.app/2hepwu';
})  

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



// Função para abrir o modal
const openModal = (item) => {
    modalImg.src = `${directory}/${item.filename}`;
    modalImg.alt = item.fullNameBook;
    modalTitle.textContent = item.fullNameBook;
    modalDescription.textContent = item.information;
    modalBtn.href = item.href;

    modal.classList.remove('hidden');
    modal.classList.add('visible');
    main.classList.add('modal-open');
};


// Fechar o modal
modalClose.addEventListener('click', () => {
    modal.classList.remove('visible');
    modal.classList.add('hidden');
    main.classList.remove('modal-open');
});



// Criar os livros dinamicamente
items.forEach(({ filename, book, fullNameBook, price, information, href }) => {
    const div = document.createElement('div');
    div.classList.add('main_container--div');

    const img = document.createElement('img');
    img.src = `${directory}/${filename}`;
    img.alt = fullNameBook;
    img.classList.add('main_container--div-img');
    img.addEventListener('click', () => {
        openModal({ filename, fullNameBook, information });
    });
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
    link.textContent = 'Saber Mais';
    link.addEventListener('click', (e) => {
        e.preventDefault(); 
        openModal({ filename, fullNameBook, information, href});
    });

    infoDiv.appendChild(p);
    infoDiv.appendChild(small);
    infoDiv.appendChild(span);
    infoDiv.appendChild(link);

    div.appendChild(infoDiv);

    // Adiciona evento de clique para abrir o modal
    div.addEventListener('click', () => {
        openModal({ filename, fullNameBook, information, href});
    });

    // Adiciona o div principal ao container
    main.appendChild(div);
});

const btnWhatsapp = document.querySelector('#whatsapp-btn');
btnWhatsapp.addEventListener('click', () => {
    btnWhatsapp.href = 'https://w.app/2hepwu';
})