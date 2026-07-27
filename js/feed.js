// SERVMOZ - SISTEMA DO FEED


// Curtir publicação

const likeButtons = document.querySelectorAll(".actions button");


likeButtons.forEach(button => {


    if(button.innerText.includes("Curtir")){


        button.addEventListener("click",()=>{


            if(button.classList.contains("liked")){


                button.innerHTML="❤️ Curtir";

                button.classList.remove("liked");


            }else{


                button.innerHTML="💚 Curtido";

                button.classList.add("liked");


            }


        });


    }


});





// Criar nova publicação


const publishButton = document.querySelector(".publish");


const postInput = document.querySelector(".user input");


const container = document.querySelector(".container");




publishButton.addEventListener("click",()=>{


    let text = postInput.value;



    if(text.trim()===""){


        alert("Escreva algo antes de publicar!");

        return;


    }



    let newPost = document.createElement("div");


    newPost.classList.add("post");



    newPost.innerHTML = `


    <div class="post-header">


    <img src="images/perfil.jpg">


    <div>

    <h3>
    Você
    </h3>


    <p>
    Publicação nova
    </p>


    </div>


    </div>



    <p class="description">

    ${text}

    </p>



    <div class="actions">


    <button>
    ❤️ Curtir
    </button>


    <button>
    💬 Comentar
    </button>


    <button>
    📤 Partilhar
    </button>


    </div>


    `;



    container.appendChild(newPost);



    postInput.value="";



});





// Comentários


const commentButtons = document.querySelectorAll(".actions button");



commentButtons.forEach(button=>{


    if(button.innerText.includes("Comentar")){


        button.addEventListener("click",()=>{


            let comment = prompt(
            "Digite seu comentário:"
            );



            if(comment){


                let box = document.createElement("p");


                box.innerHTML =
                "👤 Você: " + comment;



                button
                .closest(".post")
                .querySelector(".comments")
                ?.appendChild(box);



            }


        });


    }


});





// Partilhar


document.querySelectorAll(".actions button")
.forEach(button=>{


    if(button.innerText.includes("Partilhar")){


        button.onclick=()=>{


            alert(
            "Publicação partilhada!"
            );


        }


    }


});
