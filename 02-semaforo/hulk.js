
    // Criação das variáveis Imagem e botões
    const imagem = document.getElementById('img'); // variável do semáforo desligado
    const botoes = document.getElementById('buttons');

    // Controla o índice das cores (0,1,2 e volta para 0)
    let indiceCor = 0;
    let idIntervalo = null;

    const proximoIndice = () => {
        indiceCor = indiceCor < 2 ? ++indiceCor : 0; // Se o índice cor for menor que 2, incrementa mais um, se não, não incrementa nada;
    }

    // Objeto responsável por ligar cada cor
    const ligar = {
        'red': () => imagem.src = './img/hulkvermelho.png',
        'bruce': () => imagem.src = './img/bruce.png',
        'green': () => imagem.src = './img/hulkverde.png',
        'automatic': () => idIntervalo = setInterval(mudarCor, 1500),
        'off': () => {
            imagem.src = './img/desligado.png'; // Definir a imagem para desligado
            pararAutomatico(); // Parar qualquer intervalo em andamento
        }
    }

    // Altera automaticamente as cores
    const mudarCor = () => {
        const cores = ['green', 'bruce', 'red'];
        const cor = cores[indiceCor];
        ligar[cor](); // Liga a cor correspondente
        proximoIndice(); // Vai para a próxima cor
    }

    // Modo Automático
    const pararAutomatico = () => {
        clearInterval(idIntervalo); // Para o intervalo de troca automática de cores
    }

    // Escuta o click dos botões
    const controlarHulk = (event) => {
        pararAutomatico(); // Para o modo automático, se estiver ativo
        ligar[event.target.id](); // Executa a ação conforme o botão clicado

        // Exibe o alerta com o nome da cor ou ação
    }

    botoes.addEventListener('click', controlarHulk); // Escuta o evento de clique nos botões
