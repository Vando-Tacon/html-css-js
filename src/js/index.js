const inputText = document.querySelectorAll('.input-text')
const mensagemErro = document.querySelectorAll('.mensagem-erro')
const botao = document.getElementById("btn")

botao.addEventListener('click', () => {
    
    inputText.forEach((inputText, mostrando) => {
				
        if (inputText.value === "") {				
            inputText.classList.add("campo-vazio")
            inputText.classList.remove("campo-preenchido")
            mensagemErro[mostrando].classList.add("mensagem-erro-aparecer")
        } else {
            inputText.classList.add("campo-preenchido")
			inputText.classList.remove("campo-vazio")
            mensagemErro[mostrando].classList.remove("mensagem-erro-aparecer")
        }
    });
});