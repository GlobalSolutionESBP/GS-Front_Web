const pMensagem = document.createElement('p');
const campoNome = document.querySelector('#nome');
const campoEmail= document.querySelector('#email');

const buttonEnviar = document.querySelector("button");
const popup = document.querySelector('.popup-wraper');


function clearForm(){
    campoNome.value = '';
    campoEmail.value = '';
}

const openClick = function(){
    popup.classList.add('d-block');
}

const eventModal = function(event){
    const clickOfElement = event.target.classList[0];
    const classListNameArray = ['popup-close', 'popup-wraper'];
    const isClassList = classListNameArray.includes(clickOfElement);
    if (isClassList){
        popup.classList.remove("d-block");

    }
}
function showPopup(){
    openClick();
}

buttonEnviar.addEventListener('click',function(event){
    event.preventDefault();
    if (campoNome.value ===''){
        pMensagem.textContent = 'Campo Obrigatório';
        campoNome.insertAdjacentElement('afterend', pMensagem);
        pMensagem.setAttribute('class', 'erro'); 
        return False
    }

    if (campoEmail.value ===''){
        pMensagem.textContent = 'Campo Obrigatório';
        campoEmail.insertAdjacentElement('afterend', pMensagem);
        pMensagem.setAttribute("class", 'erro');
        return False

    }else{
        showPopup();

        popup.addEventListener('click', eventModal); 
    }

    pMensagem.classList.add('d-none');
    clearForm();
})






