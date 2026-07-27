// SERVMOZ - SISTEMA DE CHAT


const sendButton = document.getElementById("send");

const messageInput = document.getElementById("messageInput");

const messagesBox = document.querySelector(".messages");



// Função enviar mensagem

function sendMessage(){


    let message = messageInput.value.trim();



    if(message === ""){

        return;

    }



    let newMessage = document.createElement("div");


    newMessage.classList.add(
        "message",
        "sent"
    );



    newMessage.innerHTML = message;



    messagesBox.appendChild(newMessage);



    messageInput.value="";



    messagesBox.scrollTop =
    messagesBox.scrollHeight;



    // resposta automática (simulação)

    setTimeout(()=>{


        let reply =
        document.createElement("div");



        reply.classList.add(
            "message",
            "received"
        );



        reply.innerHTML =
        "Obrigado pela mensagem. Vou analisar e responder em breve.";



        messagesBox.appendChild(reply);



        messagesBox.scrollTop =
        messagesBox.scrollHeight;



    },1000);



}




// Clique no botão enviar

sendButton.addEventListener(
"click",
sendMessage
);





// Enviar com ENTER

messageInput.addEventListener(
"keypress",
function(event){


    if(event.key === "Enter"){

        sendMessage();

    }


});
