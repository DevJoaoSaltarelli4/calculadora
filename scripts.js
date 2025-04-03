document.addEventListener("DOMContentLoaded", function () {
    const resultado = document.querySelector(".resultado");
    const botoes = document.querySelectorAll(".botao-generico");
    let expressao = "";

    botoes.forEach(botao => {
        botao.addEventListener("click", function () {
            const valor = botao.textContent;

            if (valor === "C") {
                expressao = "";
                resultado.textContent = "";
            } else if (valor === "<") {
                expressao = expressao.slice(0, -1);
                resultado.textContent = expressao;
            } else if (valor === "=") {
                try {
                    expressao = expressao.replace(/X/g, "*");
                    resultado.textContent = eval(expressao);
                    expressao = resultado.textContent;
                } catch (error) {
                    resultado.textContent = "Erro";
                    expressao = "";
                }
            } else {
                expressao += valor;
                resultado.textContent = expressao;
            }
        });
    });
});
