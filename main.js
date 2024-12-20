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
        href: 'https://wa.me/5511979945931?text=Boa%20tarde%2C%0AEliel%20Carvalho%20Ferreira%20%26%20Willian%20Sena%2C%0A%0AEu%20sou%20a(o)%20*Nome%3A.________%20%2C%20estou%20entrando%20em%20contato%20atrav%C3%A9s%20do%20site%2C%20pois%20gostaria%20de%20dar%20continuidade%20a%20compra%20referente%20ao%20Livro%3A.%20Notas%20Nilistas..%0A%0ASegue%20meus%20dados%20para%20continuidade%20e%20finaliza%C3%A7%C3%A3o%20%20da(o)%20compra%2Fenvio%3A%0A%0A*%20Nome%20completo%3A._______%0A*%20Endere%C3%A7o%3A.__________%0A*%20CEP%3A%20._______-__%0AAgrade%C3%A7o%20pela%20aten%C3%A7%C3%A3o%2C%20fico%20no%20aguardo%20de%20um%20retorno.%20%0A(A%20mensagem%20precisa%20ter%20os%20dados%20preenchidos%20para%20continuarmos%20com%20a%20finaliza%C3%A7%C3%A3o%20da%20compra)%0A%0AAtenciosamente%2C%0A*%20PREENCHER%20DADOS%20ACIMA%20!!%20*',
        sales: 100,
    
    },
    { 
        filename: 'Ano_Zero.jpg', 
        book: 'Ano Zero', 
        price: 59.90, 
        fullNameBook:'Ano Zero', 
        information: 'Vinte anos após o grande mal que se estendeu sobre a Terra, sem qualquer controle, envolvendo pessoas, empresas e o fluxo de informações, a maioria da população não sobreviveu. Migraremos para as colônias interplanetárias ou permaneceremos numa terra decadente e dizimada? Como descrever o mundo reiniciado? O que é sobreviver após uma destruição? Alianças, confiança, ameaças, segurança, tudo esta abalado. O que é bom ou mau? O que pode mudar para sempre a percepção da realidade? Desfrutaremos de um mundo melhorado? Ou afundaremos ainda mais devido aos erros dos laboratórios bioquimicos clandestinos? Rastreamento e identificação por meio de implantes definirão quem esta curado? Novas normas de comportamento serão adotadas e, devido ao contágio, desenvolveremos máquinas interligadas, autômatas, superinteligentes e aptas a tomar decisões que podem afetar todos nós? Inteligências Artificiais atingirão a autoconsciência para moderar e assombrar o ciberespaço? Essas são as perguntas que chicoteiam nossa mente nos dias atuais. Este é o Ano Zero? Definitivamente SIM.' ,
        href: 'https://wa.me/5511979945931?text=Boa%20tarde%2C%0AEliel%20Carvalho%20Ferreira%20%26%20Willian%20Sena%2C%0A%0AEu%20sou%20a(o)%20*Nome%3A.________%20%2C%20estou%20entrando%20em%20contato%20atrav%C3%A9s%20do%20site%2C%20pois%20gostaria%20de%20dar%20continuidade%20a%20compra%20referente%20ao%20Livro%3A.%20Ano%20Zero..%0A%0ASegue%20meus%20dados%20para%20continuidade%20e%20finaliza%C3%A7%C3%A3o%20%20da(o)%20compra%2Fenvio%3A%0A%0A*%20Nome%20completo%3A._______%0A*%20Endere%C3%A7o%3A.__________%0A*%20CEP%3A%20._______-__%0AAgrade%C3%A7o%20pela%20aten%C3%A7%C3%A3o%2C%20fico%20no%20aguardo%20de%20um%20retorno.%20%0A(A%20mensagem%20precisa%20ter%20os%20dados%20preenchidos%20para%20continuarmos%20com%20a%20finaliza%C3%A7%C3%A3o%20da%20compra)%0A%0AAtenciosamente%2C%0A*%20PREENCHER%20DADOS%20ACIMA%20!!%20*',
        sales: 2100,
    },
    { 
        filename: 'Uma_Poesia_Pra_Cada_Dia.jpg', 
        book: 'Uma poesia...', 
        fullNameBook:'Uma Poesia Pra Cada Dia', 
        price: 69.90, 
        information: 'UM DIA. Este pequeno intervalo de horas, do nascente ao poente, oferece a nós a chance de realizarmos o novo, de contemplarmos uma folha em branco, rica em possibilidades e com uma paleta inteira de cores para colorirmos. Para um ano, um novo dia pode não parecer muito, mas é uma chama de esperança que acende em nosso ser, que mantém nosso entusiasmo. É a celebração do hoje que chegou e de que amanhã outro dia virá. De que o ontem foi deixado irremediavelmente para trás e o agora, este exato momento, é tudo o que temos, tanto para agradecer, remediar, planejar e para agir. Neste compilado, você será presentado, a cada nova manhã, com uma poesia, escrita por autores advindos de todo o Brasil. Cada poesia terá sua peculiaridade, seu despertar debruçado sobre uma nova manhã. Uma poesia para cada dia....',
        href: 'https://wa.me/5511979945931?text=Boa%20tarde%2C%0AEliel%20Carvalho%20Ferreira%20%26%20Willian%20Sena%2C%0A%0AEu%20sou%20a(o)%20*Nome%3A.________%20%2C%20estou%20entrando%20em%20contato%20atrav%C3%A9s%20do%20site%2C%20pois%20gostaria%20de%20dar%20continuidade%20a%20compra%20referente%20ao%20Livro%3A.%20Uma%20Poesia%20Pra%20Cada%20Dia..%0A%0ASegue%20meus%20dados%20para%20continuidade%20e%20finaliza%C3%A7%C3%A3o%20%20da(o)%20compra%2Fenvio%3A%0A%0A*%20Nome%20completo%3A._______%0A*%20Endere%C3%A7o%3A.__________%0A*%20CEP%3A%20._______-__%0AAgrade%C3%A7o%20pela%20aten%C3%A7%C3%A3o%2C%20fico%20no%20aguardo%20de%20um%20retorno.%20%0A(A%20mensagem%20precisa%20ter%20os%20dados%20preenchidos%20para%20continuarmos%20com%20a%20finaliza%C3%A7%C3%A3o%20da%20compra)%0A%0AAtenciosamente%2C%0A*%20PREENCHER%20DADOS%20ACIMA%20!!%20*',
        sales: 200,
    },
    { 
        filename: 'Mamae_Erotica.jpg', 
        book: 'Mamãe eró...', 
        fullNameBook:'Mamãe Erótica', 
        price: 69.90, 
        information: '“Amar, prazer, defender, contituir. Ela deitava a cabeça no travesseiro toda noite e essas quatro palavras contruiam valores que frequentemente outros queriam destruir. Mamãe erótica. Essa era a forma que o mundo lhe via, como o olho que tudo vê, numa visão panorâmica de acontecimentos dissidentes dos amores e tragédias”....', 
        href: 'https://wa.me/5511979945931?text=Boa%20tarde%2C%0AEliel%20Carvalho%20Ferreira%20%26%20Willian%20Sena%2C%0A%0AEu%20sou%20a(o)%20*Nome%3A.________%20%2C%20estou%20entrando%20em%20contato%20atrav%C3%A9s%20do%20site%2C%20pois%20gostaria%20de%20dar%20continuidade%20a%20compra%20referente%20ao%20Livro%3A.%20Mam%C3%A3e%20Er%C3%B3tica..%0A%0ASegue%20meus%20dados%20para%20continuidade%20e%20finaliza%C3%A7%C3%A3o%20%20da(o)%20compra%2Fenvio%3A%0A%0A*%20Nome%20completo%3A._______%0A*%20Endere%C3%A7o%3A.__________%0A*%20CEP%3A%20._______-__%0AAgrade%C3%A7o%20pela%20aten%C3%A7%C3%A3o%2C%20fico%20no%20aguardo%20de%20um%20retorno.%20%0A(A%20mensagem%20precisa%20ter%20os%20dados%20preenchidos%20para%20continuarmos%20com%20a%20finaliza%C3%A7%C3%A3o%20da%20compra)%0A%0AAtenciosamente%2C%0A*%20PREENCHER%20DADOS%20ACIMA%20!!%20*',
        sales: 2, 
    },
]






// Condição para calcular a posição os elementos filhos de elementos com position fixed
// Atualizar a posição quando a página carregar

let hasExecuted = false;  // Variável de controle
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
// POSICIONAMENTO DOS ELEMENTOS & CALCULO HEADER E SECTION "livros disponiveis"
    








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
        menuNav.checked = false;
    } 
});
// ANIMAÇÂO E INTERAÇÂO DO MENU NAV










// SOBRE MIM
const openAbout = () => {
    // Seleção do container principal
    const divContainer = document.querySelector('.containerAbout');

    // Criação dos elementos
    const container = document.createElement('div');
    container.classList.add('containerAbout_div');

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('containerAbout_div--img');
    
    const imgModal = document.createElement('img');
    imgModal.src = `./assets/eliel.png`;
    imgModal.alt = 'Sobre mim';
    
    const imgDescription = document.createElement('p');
    imgDescription.classList.add('containerAbout_div--p');
    imgDescription.textContent = 
        'À medida que avançamos pela vida, inevitavelmente enfrentamos desafios que nos testam, tanto em nossas habilidades quanto em nossa resiliência emocional. Cada obstáculo, por menor que pareça, possui um significado profundo no desenvolvimento do nosso caráter e na construção da pessoa que nos tornamos. Esses desafios, muitas vezes, aparecem sem aviso prévio, testando-nos em momentos em que menos esperamos ou estamos menos preparados. No entanto, é justamente nesses instantes que encontramos a oportunidade de olhar para dentro de nós mesmos e questionar as bases sobre as quais estamos construindo a nossa vida.' + 
        ' Crescer não é um processo linear. Existem dias em que tudo flui, em que sentimos que estamos em harmonia com o universo, mas também há aqueles em que o progresso parece inexistente e cada passo adiante vem acompanhado de duas quedas para trás. Nessas horas, é natural duvidar de nossa própria força e questionar a direção que estamos tomando. Mas a verdade é que, frequentemente, é no caos e na confusão que as transformações mais profundas acontecem.  '

        const closeImg = document.createElement('button');
    closeImg.textContent = 'Fechar';
    closeImg.classList.add('modal-close-btn');
    main.classList.add('modal-open')
    // Montagem do conteúdo no modal
    imgContainer.appendChild(imgModal);
    imgContainer.appendChild(imgDescription);
    imgContainer.appendChild(closeImg); // Botão agora dentro do imgContainer
    container.appendChild(imgContainer);

    // Adiciona o modal à página
    divContainer.appendChild(container);
    
    // Evento para fechar o modal
    closeImg.addEventListener('click', () => {
        container.remove();
        main.classList.remove('modal-open')
    });
};
// ORGANIZA OS ELEMENTOS EM UMA CAMADA SUPERIOR QUANDO O BOTAO DE SOBRE MIM E ATIVADO DENTRO DO MENU NAV








//Função de Click, opção(s) menu
const btnContato = document.querySelector('#btn-contato');
btnContato.addEventListener('click', () => {
    btnContato.href = 'https://wa.me/5511979945931?text=Boa%20Tarde%2C%20%0AEliel%20Carvalho%20Ferreira%20e%20Willian%20Sena%2C%0A%0AMeu%20nome%20%C3%A9%20*%20Nome%3A.%20_________%2C%20recentemente%20encontrei%20o%20site%20de%20voc%C3%AAs%20enquanto%20procurava%20por%20livros.%20E%20acabei%20ficando%20bastante%20curioso%20sobre%20o%20trabalho%20de%20voc%C3%AAs%2C%20e%20gostaria%20de%20saber%20mais%20sobre!!%0APoderiam%20me%20contar%20um%20pouco%20mais%20sobre%20a%20inspira%C3%A7%C3%A3o%20para%20as%20obras%2C%20os%20temas%20tratados%20nos%20livros%20e%20o%20que%20os%20leitores%20podem%20esperar%20de%20cada%20um%20deles%3F%0A%0ADesde%20j%C3%A1%2C%20agrade%C3%A7o%20pela%20aten%C3%A7%C3%A3o%20e%20aguardo%20ansiosamente%20pela%20resposta!%0AAtenciosamente%2C%0A%0A*%20PREENCHER%20DADOS%20ACIMA%20!!%20*';
})
// BOTAO CONTATO INTERATIVO NO MENU NAV









// Efeito de Click para exibir option de filter
const buttonFilter = document.querySelector('#checked');
const filter = document.querySelector('.menu-filtered');
const ico = document.querySelector('#iconFilter');


// Evento do botão de filtro
buttonFilter.addEventListener ('click',() => {
    if(buttonFilter.checked == true){
        filter.style.top = '45%'
        console.log('primeiro filter')
        setTimeout(() => {
            filter.style.zIndex = 0;
            console.log('segundo filter')
        }, 0);
        setTimeout(() => {
            ico.classList.remove('fa-chevron-down');
            ico.classList.add('fa-chevron-up');
            console.log('final')
        }, 350);
    } else {
        filter.style.zIndex = -12;
        filter.style.top = '-100%'
        ico.classList.add('fa-chevron-down');
        ico.classList.remove('fa-chevron-up');
        console.log('inicio')
    }
});
// ANIMAÇÂO PARA A EXIBIÇÂO DO ICONE COM SETA AO CLICK DO SELECIONE



// Função para abrir o modal
const openModal = (item) => {
    modalImg.src = `${directory}/${item.filename}`;
    modalImg.alt = item.fullNameBook;
    modalTitle.textContent = item.fullNameBook;
    modalDescription.textContent = item.information;
    modalBtn.href = item.href;
    
    main.classList.add('modal-open')
    modal.classList.remove('hidden');
    modal.classList.add('visible');
};

// Fechar o modal
modalClose.addEventListener('click', () => {
    modal.classList.remove('visible');
    modal.classList.add('hidden');
    main.classList.remove('modal-open')
});



// Criar os livros dinamicamente
// Função para renderizar os livros dinamicamente
function renderItems(sortedItems) {
    main.innerHTML = ''; // Limpa o container principal
    sortedItems.forEach(({ filename, book, fullNameBook, price, information, href }) => {
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
            openModal({ filename, fullNameBook, information, href });
        });
    
        infoDiv.appendChild(p);
        infoDiv.appendChild(small);
        infoDiv.appendChild(span);
        infoDiv.appendChild(link);
    
        div.appendChild(infoDiv);

        div.addEventListener('click', () => {
            openModal({ filename, fullNameBook, information, href });
        });

        main.appendChild(div);
    });
}

// Adicionar evento para aplicar os filtros
const filterMenu = document.querySelector('.menu-filtered > ul');
if (filterMenu) {
    filterMenu.addEventListener('click', (e) => {
        const target = e.target;
        
        // Verifica se o clique foi em um <li> ou seu filho
        if (target.tagName === 'LI' || target.closest('LI')) {
            const filter = target.textContent.trim(); // Obtém o texto do filtro
            let sortedItems;
            
            // Lógica de ordenação
            switch (filter) {
                case 'Mais vendidos':
                    // Ordenar por número de vendas (propriedade `sales`)
                    sortedItems = [...items].sort((a, b) => b.sales - a.sales);
                    break;
                case 'A - Z':
                    // Ordenar alfabeticamente
                    sortedItems = [...items].sort((a, b) => a.book.localeCompare(b.book));
                    break;
                case 'Z - A':
                    // Ordenar alfabeticamente reverso
                    sortedItems = [...items].sort((a, b) => b.book.localeCompare(a.book));
                    break;
                default:
                    sortedItems = items;
                }

            // Renderizar os itens ordenados
            renderItems(sortedItems);

        }
    });
} else {
    console.error('Menu de filtro não encontrado. Verifique a classe ".menu-filtered > ul".');
}

// Renderizar os itens inicialmente
renderItems(items);





const btnWhatsapp = document.querySelector('#whatsapp-btn');
btnWhatsapp.addEventListener('click', () => {
    btnWhatsapp.href = 'https://w.app/2hepwu';
});
// BOTAO DO WHATSAPP VOADOR 