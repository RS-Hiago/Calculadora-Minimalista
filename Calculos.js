function valor(num) {
    var visor = document.getElementById('visor');
    visor.value += num;
}

function limpar(){
    document.getElementById('visor').value = "";
    document.querySelectorAll('.botao').forEach(function(botao) {
        botao.disabled = false;
    });
}

function voltar() {
    var visor = document.getElementById('visor');
    var conteudo = visor.value;
    
    if (conteudo.length > 0) {
        visor.value = conteudo.substring(0, conteudo.length - 1);
    }
}

function calcular() {
    var visor = document.getElementById('visor');

    if (visor.value) {
        try {
            var resultado = eval(visor.value);
            visor.value = resultado;
        } catch (error) {
            visor.value = 'Erro: Expressão\ninválida';

            document.querySelectorAll('.botao').forEach(function(botao) {
                if (botao.textContent !== 'C') {
                    botao.disabled = true;
                }
            });

            // Adicione esta linha para habilitar novamente os botões após um erro
            document.getElementById('C').disabled = false;
        }
    }
}