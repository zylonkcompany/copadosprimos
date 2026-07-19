function calcularTabela(temporada) {


const tabela = {};


times.forEach(time => {

    tabela[time.id] = {

        id: time.id,

        nome: time.nome,

        escudo: time.escudo,

        jogos: 0,

        vitorias: 0,

        empates: 0,

        derrotas: 0,

        gols: 0

    };

});


jogos.forEach(jogo => {

    if (
        jogo.temporada !== temporada ||
        jogo.status !== "finalizado"
    ) {

        return;

    }


    const timeCasa =
        tabela[jogo.timeCasa];


    const timeFora =
        tabela[jogo.timeFora];


    timeCasa.jogos++;

    timeFora.jogos++;


    timeCasa.gols +=
        jogo.golsCasa;


    timeFora.gols +=
        jogo.golsFora;


    if (
        jogo.golsCasa >
        jogo.golsFora
    ) {

        timeCasa.vitorias++;

        timeFora.derrotas++;

    }

    else if (
        jogo.golsCasa <
        jogo.golsFora
    ) {

        timeFora.vitorias++;

        timeCasa.derrotas++;

    }

    else {

        timeCasa.empates++;

        timeFora.empates++;

    }

});


return Object.values(tabela)

    .sort((a, b) => {

        return b.gols - a.gols;

    });


}
