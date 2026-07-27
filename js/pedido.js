// SERVMOZ - SISTEMA DE PEDIDOS


const button = document.querySelector("button");


button.addEventListener("click", function(){


    const inputs = document.querySelectorAll(
        "input, textarea, select"
    );


    let titulo = inputs[0].value;
    let descricao = inputs[1].value;
    let categoria = inputs[2].value;
    let local = inputs[3].value;



    if(
        titulo === "" ||
        descricao === "" ||
        categoria === "Escolha a categoria" ||
        local === ""
    ){

        alert(
        "Por favor preencha todos os campos."
        );

        return;

    }



    let pedido = {

        titulo:titulo,

        descricao:descricao,

        categoria:categoria,

        local:local,

        data:new Date()

    };



    localStorage.setItem(
        "pedidoServMoz",
        JSON.stringify(pedido)
    );



    alert(
    "Pedido enviado com sucesso! Profissionais próximos serão notificados."
    );



    window.location.href="notificacoes.html";


});
