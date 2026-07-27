// SERVMOZ - NOTIFICAÇÕES


let pedido = 
localStorage.getItem(
"pedidoServMoz"
);



if(pedido){


    let dados =
    JSON.parse(pedido);



    let area =
    document.querySelector(".notifications");



    let nova =
    document.createElement("div");



    nova.classList.add(
    "notification"
    );



    nova.innerHTML = `


    <img src="images/perfil.jpg">


    <div>

    <h3>
    Novo pedido:
    ${dados.titulo}
    </h3>


    <p>

    Categoria:
    ${dados.categoria}

    </p>


    <p>

    📍 ${dados.local}

    </p>


    </div>


    `;



    area.appendChild(nova);


}
