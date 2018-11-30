var tempoInicial = $("#tempo-digitacao").text();
var campoDigitacao = $(".campo-digitacao");

$(function() {
    atualizaTamanhoFrase();
    inicializaContadores();
    inicializaCronometro();

    $("#botao-reiniciar").click(reiniciaJogo);
});

function atualizaTamanhoFrase() {
    var frase = $(".frase").text();
    var numPalavras = frase.split(" ").length;
    var tamanhoFrase = $("#tamanho-frase");

    tamanhoFrase.text(numPalavras);
}

function inicializaContadores() {
    campoDigitacao.on("input", function() {
        var conteudo = campoDigitacao.val();
    
        var qtdPalavras = conteudo.split(/\s+/).length - 1;
        $("#contador-palavras").text(qtdPalavras);
    
        var conteudoSemEsapco = conteudo.replace(/\s+/g, "");
        var qtdCaracteres = conteudoSemEsapco.length;
        $("#contador-caracteres").text(qtdCaracteres);
    });
}

function inicializaCronometro() {
    var tempoRestante = $("#tempo-digitacao").text();

    campoDigitacao.one("focus", function() {
        $("#botao-reiniciar").attr("disabled", true);

        var cronometroID = setInterval(function() {
            tempoRestante--;
            $("#tempo-digitacao").text(tempoRestante);

            if (tempoRestante < 1)
            {
                campoDigitacao.attr("disabled", true);
                clearInterval(cronometroID);
                $("#botao-reiniciar").attr("disabled", false);
            }
        }, 1000);
    });
}

function reiniciaJogo() {
    campoDigitacao.attr("disabled", false);
    campoDigitacao.val("");
    $("#contador-caracteres").text("0");
    $("#contador-palavras").text("0");
    $("#tempo-digitacao").text(tempoInicial);
    inicializaCronometro();
}