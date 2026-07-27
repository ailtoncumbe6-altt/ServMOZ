// SERVMOZ - DASHBOARD PROFISSIONAL


// Simulação de atualização de estatísticas


let views = 2450;

let followers = 580;

let requests = 45;



const cards = document.querySelectorAll(".card h1");



if(cards.length >= 4){


    cards[0].innerHTML = views;

    cards[1].innerHTML = followers;

    cards[2].innerHTML = requests;

    cards[3].innerHTML = "⭐ 4.9";


}




// Responder pedidos


const buttons = document.querySelectorAll(".request button");



buttons.forEach(button=>{


    button.addEventListener(
    "click",
    ()=>{


        button.innerHTML =
        "Respondido ✓";


        button.style.background =
        "#2563eb";


        alert(
        "Cliente será contactado pelo chat ServMoz."
        );


    });


});





// Adicionar trabalho ao portfólio


const addButton =
document.querySelector(".add");



if(addButton){


addButton.addEventListener(
"click",
()=>{


let image =
prompt(
"Digite o caminho da imagem:"
);



if(image){


let portfolio =
document.querySelector(".portfolio");



let img =
document.createElement("img");



img.src=image;



portfolio.appendChild(img);



alert(
"Novo trabalho adicionado ao portfólio!"
);



}


});


}
