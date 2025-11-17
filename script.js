// O Enredo da Aventura da Barbie
const aventuraBarbie = {
    // NÍVEL 0: O Início
    "0": {
        historia: "Você recebeu o convite! O Baile de Gala de Malibu é daqui a 3 horas e você não tem o look perfeito! O que fazer primeiro?",
        opcoes: {
            "A": { texto: "Ligar para a Teresa, sua guru de moda.", proximoNivel: "1A" },
            "B": { texto: "Correr para o seu closet lendário.", proximoNivel: "1B" }
        }
    },

    // NÍVEL 1A: Consultoria com Teresa
    "1A": {
        historia: "Teresa sugere que o Baile tem um tema secreto de 'Brilho Prateado'. Ela tem dois vestidos estonteantes. Qual você escolhe para brilhar?",
        opcoes: {
            "A": { texto: "O vestido de paetês longos, estilo sereia.", proximoNivel: "2" },
            "B": { texto: "O conjunto de saia de tule e top cravejado de cristais.", proximoNivel: "2" }
        }
    },

    // NÍVEL 1B: Explorando o Closet
    "1B": {
        historia: "Seu closet é infinito. Você encontra dois looks prontos: um fúcsia clássico e um azul bebê mais ousado. Qual reflete melhor o seu humor de hoje?",
        opcoes: {
            "A": { texto: "O vestido fúcsia, que é a sua marca registrada.", proximoNivel: "2" },
            "B": { texto: "O power suit azul bebê com plumas.", proximoNivel: "2" }
        }
    },

    // NÍVEL 2: A Chegada e o Dilema do Ken (A rota 1A e 1B convergem aqui)
    "2": {
        historia: "Você está na entrada do Baile, perfeita! De repente, você vê o Ken com um dilema: ele esqueceu o presente e o carro quebrou! Você está pronta para ajudar?",
        opcoes: {
            "A": { texto: "Usar seu conversível rosa para buscar o presente. Priorizar o presente!", proximoNivel: "Final_A" },
            "B": { texto: "Chamar um táxi e ajudar o Ken a consertar o carro. Priorizar o Ken!", proximoNivel: "Final_B" }
        }
    },

    // FINAIS
    
    "Final_A": {
        historia: "Você e Ken chegam ao Baile com o presente *just in time*, ofuscando a todos. Sua dedicação ao detalhe é recompensada: você e Ken ganham o prêmio de **Casal Mais Estiloso da Noite**! O Baile é um sucesso de glamour e perfeição.",
        opcoes: {
            "Recomecar": { texto: "Recomeçar a Aventura", proximoNivel: "0" }
        }
    },
    
    "Final_B": {
        historia: "Você e Ken consertam o carro (e ficam super sujos!), mas chegam tarde. Vocês perdem a entrada dramática, mas se divertem contando a história. Vocês percebem que o melhor presente foi o **tempo que passaram juntos**. Uma aventura de união!",
        opcoes: {
            "Recomecar": { texto: "Recomeçar a Aventura", proximoNivel: "0" }
        }
    }
};

let nivelAtual = "0";

// Função para atualizar a tela com o nível atual
function carregarNivel(nivel) {
    const dados = aventuraBarbie[nivel];
    if (!dados) return;

    // Atualiza a história
    document.getElementById('historia').innerHTML = `<p>${dados.historia}</p>`;

    // Limpa e atualiza as opções
    const divOpcoes = document.getElementById('opcoes');
    divOpcoes.innerHTML = '';

    for (const chave in dados.opcoes) {
        const opcao = dados.opcoes[chave];
        const botao = document.createElement('button');
        
        // Verifica se é o botão de recomeçar
        if (chave === "Recomecar") {
            botao.classList.add('recomecar-btn');
            botao.textContent = opcao.texto;
            botao.onclick = () => escolher(chave);
        } else {
            // Botões de escolha normais
            botao.textContent = `${chave}. ${opcao.texto}`;
            botao.onclick = () => escolher(chave);
        }
        
        divOpcoes.appendChild(botao);
    }
    
    nivelAtual = nivel;
}

// Função chamada ao clicar em uma opção
function escolher(opcao) {
    const dadosAtuais = aventuraBarbie[nivelAtual];
    const proximoNivel = dadosAtuais.opcoes[opcao].proximoNivel;

    if (proximoNivel) {
        carregarNivel(proximoNivel);
    }
}

// Inicia o jogo ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    carregarNivel(nivelAtual);
});
