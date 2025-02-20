let slideIndex = 0;

function mudarSlide(direcao) {
    const slides = document.querySelector(".slides");
    const totalSlides = document.querySelectorAll(".polaroid").length;

    slideIndex = (slideIndex + direcao + totalSlides) % totalSlides;
    
    if (slideIndex === 0) {
        slides.style.transform = `translateX(300px)`;
    } else if (slideIndex === 1) {
        slides.style.transform = `translateX(0px)`;
    } else if (slideIndex === 2) {
        slides.style.transform = `translateX(-300px)`;
    }
}

const dataInicio = new Date("2023-11-04T00:00:00");

function ajustarTexto(num, unidade) {
    // Verificando se deve adicionar o 's' ao final, baseado no número
    if (unidade === 'mês' || unidade === 'ano') {
        if (unidade === 'mês') {
            if (num !== 1) {
                return `${num} meses`;
            } else {
                return `${num} mês`;
            }
        }
        return `${num} ${unidade}${num !== 1 ? 's' : ''}`;
    } else {
        return `${num} ${unidade}${num !== 1 ? 's' : ''}`;
    }
}

// Função para atualizar o contador
function atualizarContador() {
    const agora = new Date();
    const tempoTotal = agora - dataInicio; // Tempo em milissegundos desde a data de início

    // Calculando os diferentes componentes do tempo
    const segundos = Math.floor(tempoTotal / 1000) % 60;
    const minutos = Math.floor(tempoTotal / (1000 * 60)) % 60;
    const horas = Math.floor(tempoTotal / (1000 * 60 * 60)) % 24;
    const dias = Math.floor(tempoTotal / (1000 * 60 * 60 * 24)) % 30; // Considerando 30 dias por mês
    let meses = Math.floor(tempoTotal / (1000 * 60 * 60 * 24 * 30));
    let ano = 0;

    // Se meses atingir 12, converte para 1 ano
    if (meses >= 12) {
        ano = Math.floor(meses / 12);
        meses = meses % 12; // Deixa o número de meses abaixo de 12
    }

    // Atualizando o texto do contador
    let textoContador = "Estamos juntos há ";
    if (ano > 0) {
        textoContador += `${ajustarTexto(ano, 'ano')}, `;
    }
    textoContador += `${ajustarTexto(meses, 'mês')}, ${ajustarTexto(dias, 'dia')}, ${ajustarTexto(horas, 'hora')}, ${ajustarTexto(minutos, 'minuto')} e ${ajustarTexto(segundos, 'segundo')}!`;

    // Atualizando o conteúdo do elemento
    document.getElementById("contador").innerHTML = textoContador;
}

setInterval(atualizarContador, 1000);

// Auto-play a cada 3 segundos
// setInterval(() => mudarSlide(1), 3000);
