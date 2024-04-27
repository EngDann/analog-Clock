// Seleciona os elementos do DOM que representam os ponteiros das horas, minutos e segundos.
const hoursHand = document.querySelector(".hand.hours");
const minutesHand = document.querySelector(".hand.minutes");
const secondsHand = document.querySelector(".hand.seconds");

// Função para definir a rotação de um ponteiro com base em uma porcentagem de sua escala total.
// Por exemplo, se for 50% (0.5), o ponteiro deve estar na metade do seu ciclo total (180 graus).
const setRotation = (element, rotationPercentage) => {
    // Define a propriedade CSS customizada "--rotation", que deve ser usada no CSS para rotacionar o ponteiro.
    // A rotação é calculada multiplicando a porcentagem pela rotação total (360 graus).
    element.style.setProperty("--rotation", rotationPercentage * 360);
};

// Função para atualizar a posição de cada ponteiro do relógio.
const setClock = () => {
    // Obtém a data e hora atual.
    const currentDate = new Date();

    // Calcula a porcentagem do segundo atual em relação a um minuto, dos minutos em relação a uma hora,
    // e das horas em relação a um ciclo completo de 12 horas.
    const secondsPercentage = currentDate.getSeconds() / 60;
    const minutesPercentage =
        (secondsPercentage + currentDate.getMinutes()) / 60;
    const hoursPercentage = (minutesPercentage + currentDate.getHours()) / 12;

    // Atualiza a rotação de cada ponteiro com base nas porcentagens calculadas.
    setRotation(secondsHand, secondsPercentage);
    setRotation(minutesHand, minutesPercentage);
    setRotation(hoursHand, hoursPercentage);
};

// Inicializa a posição dos ponteiros assim que o script é carregado.
setClock();

// Atualiza a posição dos ponteiros a cada segundo para manter o relógio sincronizado.
setInterval(setClock, 1000);
