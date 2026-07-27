// SERVMOZ - PAINEL ADMINISTRATIVO


// Aprovação de profissionais


const buttons = document.querySelectorAll("section button");



buttons.forEach(button => {


    button.addEventListener("click",()=>{


        if(button.innerText.includes("Aprovar")){


            button.innerHTML =
            "Aprovado ✓";


            button.style.background =
            "#2563eb";


            alert(
            "Profissional aprovado com sucesso!"
            );


        }


        else if(button.innerText.includes("Verificar")){


            button.innerHTML =
            "Verificado ✓";


            button.style.background =
            "#2563eb";


            alert(
            "Conta verificada!"
            );


        }



    });


});






// Contadores animados


const counters =
document.querySelectorAll(".box h1");



counters.forEach(counter=>{


    let target =
    parseInt(
    counter.innerText
    );



    let value = 0;



    let interval =
    setInterval(()=>{


        value += Math.ceil(target / 100);



        if(value >= target){


            value = target;

            clearInterval(interval);

        }



        counter.innerHTML =
        value;


    },20);



});
