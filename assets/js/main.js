let relogio = document.querySelector('.relogio');
let btnIniciar = document.querySelector('.parar');
let btnParar = document.querySelector('.parar');
let btnResetar = document.querySelector('.resetar');
let segundos = 0;
let timer;

function retornaHora(segundos){
    let data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'utc'
    });
}

function iniciaRelogio(){
    timer = setInterval(function(){
        segundos++;
        relogio.innerText = retornaHora(segundos);
        console.log(segundos);
    }, 1000);
}

document.addEventListener('click', function(e){
    let el = e.target;
    if(el.classList.contains('iniciar')){
        iniciaRelogio();
        relogio.style.color = 'black';
        // relogio.classList.remove('pausado');
    }

    if(el.classList.contains('parar')){
        clearInterval(timer);
        relogio.style.color = 'red';
        // relogio.classList.add('pausado');
    }

    if(el.classList.contains('resetar')){
        clearInterval(timer);
        segundos = 0;
        relogio.innerText = '00:00:00';
        relogio.style.color = 'black';
        // relogio.classList.remove('pausado');
    }
});