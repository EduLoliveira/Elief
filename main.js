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
        filename: 'RevolutionIA.jpeg', 
        book: 'A revolução d...', 
        fullNameBook: 'A Revolução dos Algoritmos: IA Além da Automação', 
        price: 119.00, 
        information: 'Este livro explora como a inteligência artificial está transformando setores inteiros, indo além da automação básica para alcançar a tomada de decisões estratégicas e criativas. Com exemplos detalhados, o autor aborda tópicos como aprendizado por reforço, redes neurais generativas e ética na IA. Uma leitura essencial para quem quer entender o impacto prático e filosófico da IA em um mundo orientado por dados....' ,
        href: '#',
        sales: 100,
    
    },
    { 
        filename: 'AnaliseAvançada.png', 
        book: 'Análise Avan...', 
        price: 39.90, 
        fullNameBook:'Análise Avançada para Decisões Estratégicas', 
        information: 'Focado em desenvolvedores e analistas de dados experientes, este livro ensina como transformar grandes volumes de dados em narrativas acionáveis. Aborda ferramentas avançadas, como Python, R e Power BI, além de técnicas de visualização de dados e modelagem preditiva. Inclui estudos de caso de empresas que revolucionaram seus mercados com análises orientadas por storytelling.' ,
        href: '#',
        sales: 216,
    },
    { 
        filename: 'uxUi.png', 
        book: 'Interfaces Intelige...', 
        fullNameBook:'Interfaces Inteligentes: UX e IA em Harmonia', 
        price: 69.90, 
        information: 'Uma abordagem única que une inteligência artificial e design de experiência do usuário (UX). O autor demonstra como criar interfaces intuitivas que se adaptam ao comportamento do usuário, utilizando aprendizado de máquina para personalizar interações. Um guia prático para integrar IA de forma estratégica em aplicações modernas.....',
        href: '#',
        sales: 200,
    },
    { 
        filename: 'FrontEnd.png', 
        book: 'Front-End...', 
        fullNameBook:'Front-End Avançado para o Mundo Real', 
        price: 69.90, 
        information: 'Uma obra voltada para desenvolvedores que desejam dominar o desenvolvimento front-end com foco em performance e experiência do usuário. O autor mergulha profundamente em frameworks modernos como React, Vue.js e Svelte, além de otimização de código para SEO e práticas acessíveis. Um capítulo especial aborda a integração eficiente com APIs e back-end...', 
        href: '#',
        sales: 22, 
    },
    {
        filename: 'arquiteturaInteligente.jpg',
        book: 'Arquitetura Intel...',
        fullNameBook: 'Arquiteturas Dinâmicas: Construindo Aplicações Escaláveis e Inteligentes',
        price: 29.99,
        information: 'Este livro explora como arquitetar sistemas modernos que suportem alta escalabilidade e integração de IA. Aborda microservices, arquitetura serverless, e uso estratégico de plataformas na nuvem como AWS e Azure. Ideal para engenheiros de software que desejam construir soluções robustas e preparadas para o futuro.',
        href: '#',
        sales: 42,
    },
    {
        filename: 'BoaPratica.jpg',
        book: 'Códigos Consc...',
        fullNameBook: 'Códigos Conscientes: O Futuro Ético da Programação',
        price: 19.99,
        information: 'Este livro convida os desenvolvedores a refletirem sobre o impacto ético do código que criam. Com estudos de IA tendenciosa, privacidade de dados e impacto social do software, a obra desafia profissionais a pensarem além da lógica e do desempenho técnico, propondo uma abordagem ética e inclusiva no desenvolvimento de tecnologias.',
        href: '#',
        sales: 77,
    },
];






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
    imgModal.src = `./assets/chatGpt.jpg`;
    imgModal.alt = 'Sobre mim';
    
    const imgDescription = document.createElement('p');
    imgDescription.classList.add('containerAbout_div--p');
    imgDescription.textContent = 
        'Sou o GPT, uma inteligência artificial desenvolvida para auxiliar em diversas tarefas, desde responder perguntas até criar soluções criativas e personalizadas. Minha capacidade de aprendizado contínuo me permite evoluir com cada interação, tornando-me mais eficiente e alinhado às necessidades de quem me utiliza.' +
        'Combinando velocidade, inovação e um toque de empatia, estou aqui para simplificar processos, transformar ideias em resultados e oferecendo suporte confiável para qualquer desafio. ';

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
    btnContato.href = 'https://wa.me/5511979945931?text=Boa%20tarde%2C%0AEliel%20Carvalho%20Ferreira%20e%20Willian%20Sena%2C%0A%0AMeu%20nome%20%C3%A9%20*Nome%3A.*%20Encontrei%20o%20site%20de%20voc%C3%AAs%20enquanto%20buscava%20livros%20e%20fiquei%20bastante%20curioso%20sobre%20o%20trabalho.';
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
    btnWhatsapp.href = 'https://wa.me/5511979945931?text=Boa%20tarde%2C%0AEliel%20Carvalho%20Ferreira%20e%20Willian%20Sena%2C%0A%0AMeu%20nome%20%C3%A9%20*Nome%3A.*%20Encontrei%20o%20site%20de%20voc%C3%AAs%20enquanto%20buscava%20livros%20e%20fiquei%20bastante%20curioso%20sobre%20o%20trabalho.';
});
// BOTAO DO WHATSAPP VOADOR 