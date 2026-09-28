const botaoTema = document.querySelector('.botao-tema');
const iconeTema = document.querySelector('.botao-tema i');
const body = document.body;

botaoTema.addEventListener('click', () => {

    body.classList.toggle('tema-claro');

    if (body.classList.contains('tema-claro')) {
        iconeTema.classList.remove('fa-moon');
        iconeTema.classList.add('fa-sun');
    } else {
        iconeTema.classList.remove('fa-sun');
        iconeTema.classList.add('fa-moon');
    }
    
});