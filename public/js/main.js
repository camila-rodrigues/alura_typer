var frase = $(".frase").text();
var numPalavras = frase.split(" ").length;
var tamanhoFrase = $("#tamanho-frase");

tamanhoFrase.text(numPalavras);

var campoDigitacao = $(".campo-digitacao");

campoDigitacao.on("input", function() {
    var conteudo = campoDigitacao.val();

    var qtdPalavras = conteudo.split(/\s+/).length - 1;
    $("#contador-palavras").text(qtdPalavras);

    var conteudoSemEsapco = conteudo.replace(/\s+/g, "");
    var qtdCaracteres = conteudoSemEsapco.length;
    $("#contador-caracteres").text(qtdCaracteres);
});