let botao_direito = document.querySelector (".botao_direito");
let botao_esquerdo = document.querySelector (".botao_esquerdo");

var slider = document.querySelector (".slider");
var contador_de_cliques = 0;
var porcentagem;
var valor_da_porcentagem;

botao_direito.onclick = function (){

    contador_de_cliques = contador_de_cliques + 1;
    valor_da_porcentagem = (-(contador_de_cliques * 100));

    porcentagem = valor_da_porcentagem + "%";

    if (contador_de_cliques >= 4){

        console.log ("Limite da Direita Atingido")
        contador_de_cliques = 3;

    } else {

        slider.style.transform = "translateX(" + porcentagem + ")";

    }

    console.log ("Valor Direita:" + slider.style.transform);

}

botao_esquerdo.onclick = function (){

    if (contador_de_cliques > 0){

        contador_de_cliques = contador_de_cliques - 1;
        valor_da_porcentagem = (-(contador_de_cliques * 100));

        porcentagem = valor_da_porcentagem + "%";

        slider.style.transform = "translateX(" + porcentagem + ")";

        console.log ("Valor Esquerda:" + slider.style.transform);

    }else {

        console.log ("Limite da Esquerda Atingido")

    }
    

}








