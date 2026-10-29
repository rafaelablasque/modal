const miniaturas = document.querySelectorAll('.miniatura');
const modal = document.getElementById('modal');
const imagemModal = document.querySelector('.imagemModal');
const nomeImagem = document.getElementById('nomeImagem');
const btnfechar = document.getElementById('fechar');

miniaturas.forEach(function(imagem){
    imagem.addEventListener('click', function(){
        modal.classList.add("ativo");
        imagemModal.src = imagem.src;
        imagemModal.alt = imagem.alt;
        nomeImagem.textContent = imagem.alt
    })
})

// fechando o modal no botao fechar
btnfechar.addEventListener('click', ()=> {
    modal.classList.remove("ativo")
})

// fechando o modal quando clicar no fundo
modal.addEventListener('click', (evento)=> {
    if(evento.target === modal){
        modal.classList.remove("ativo")
    }
})

// fechando o modal ao clicar a tecla ESC
document.addEventListener('keydown', (evento)=>{
    if (evento.key === "Escape"){
        modal.classList.remove("ativo")
    }
})