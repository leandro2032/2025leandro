const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você descobre um aplicativo que monitora o consumo de energia da sua casa em tempo real e sugere como reduzir o gasto. Qual sua reação inicial?",
        alternativas: [
            {
                texto: "Fico curioso para testar todas as funções.",
                afirmacao: "Desde cedo mostrou interesse por tecnologias sustentáveis."
            },
            {
                texto: "Não acho necessário, sempre desligo os aparelhos quando não uso.",
                afirmacao: "Confia mais nos próprios hábitos do que nas sugestões automáticas."
            }
        ]
    },
    {
        enunciado: "Na aula de ciências, a professora propõe um projeto sobre energias renováveis. Como você prefere fazer sua pesquisa?",
        alternativas: [
            {
                texto: "Usa ferramentas de IA para encontrar fontes confiáveis e resumir os conteúdos.",
                afirmacao: "Aprendeu a usar IA como parceira de estudos em temas ambientais."
            },
            {
                texto: "Visita a biblioteca e conversa com professores para aprofundar o tema.",
                afirmacao: "Valoriza fontes humanas e conhecimento local para entender o problema."
            }
        ]
    },
    {
        enunciado: "Durante uma feira escolar, você precisa defender uma ideia sobre o uso da tecnologia para proteger o meio ambiente. O que diz?",
        alternativas: [
            {
                texto: "A tecnologia pode ajudar a combater as mudanças climáticas se for bem usada.",
                afirmacao: "Acredita na união entre tecnologia e sustentabilidade como chave para o futuro."
            },
            {
                texto: "As pessoas devem mudar seus hábitos antes de confiar só na tecnologia.",
                afirmacao: "Prefere um caminho mais consciente, baseado em ações humanas e coletivas."
            }
        ]
    },
    {
        enunciado: "Para representar seu projeto, precisa criar uma imagem sobre o futuro sustentável. Qual ferramenta usa?",
        alternativas: [
            {
                texto: "Desenha manualmente para mostrar seu ponto de vista com criatividade.",
                afirmacao: "Usou a arte tradicional como forma de expressar ideias ecológicas."
            },
            {
                texto: "Utiliza um gerador de imagens com IA baseado nas ideias discutidas.",
                afirmacao: "Explorou novas ferramentas visuais para dar vida à sua visão de futuro."
            }
        ]
    },
    {
        enunciado: "Seu grupo quer copiar um artigo da internet para agilizar a entrega. Qual sua posição?",
        alternativas: [
            {
                texto: "Apressar o trabalho é válido, desde que o conteúdo seja relevante.",
                afirmacao: "Acabou priorizando a velocidade e depois sentiu falta de envolvimento real."
            },
            {
                texto: "Prefere adaptar as ideias e acrescentar opiniões pessoais.",
                afirmacao: "Entendeu que pensar com autonomia é essencial, mesmo com ajuda tecnológica."
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    historiaFinal += opcaoSelecionada.afirmacao + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
