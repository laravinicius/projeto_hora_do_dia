function carregar() {
    let msg = document.getElementById(`msg`);
    let img = document.getElementById(`imagem`);
    let data = new Date();
    let hora = data.getHours();

    // VERSAO QUE EU FIZ PARA MOSTRAR APENAS A HORA DO MOMENTO QUE A TELA É ATUALIZADA
    // let dia = data.getDate();
    // let mes = (data.getMonth() + 1);
    // let ano = data.getFullYear();
    // let min = data.getMinutes();
    // msg.innerHTML = `Hoje é dia ${dia}/${mes}/${ano} e agora são ${hora}:${min}`;


    // VERSAO MELHORADA PARA PEGAR A HORA ATUAL E EXIBIR NA TELA
    // funcao para formatar 1 em 01
    const real = n =>{
        return (`0` + n).slice(-2);
    }

    // criando um intevalo de tempo
    const interval = setInterval(() =>{
        // pega a hora atual
        const now = new Date();
        
        //formatar para dd/mm/aa hh:mm:ss
        const dataHora = `${real(now.getUTCDate())} / ${real((now.getMonth() +1 ))} / ${now.getFullYear()}   ${real(now.getHours())} : ${real(now.getMinutes())} : ${real(now.getSeconds())} `
        msg.innerHTML = dataHora;

    }, 1000);
    

    
    if(hora >=0 && hora < 12){
        //bomdia
        img.src = '../projeto_hora_do_dia/img/manha.png';
        document.body.style.background = '#ede0d8';
        let txt = document.getElementById(`txt`);
        txt.style.color = `black`
    } else if (hora >= 12 && hora <= 18){
        //boatarde
        img.src = '../projeto_hora_do_dia/img/tarde.png';
        document.body.style.background = '#e29838';

    } else {
        //boanoite
        img.src = '../projeto_hora_do_dia/img/noite.png';
        document.body.style.background = '#053c77';

    }
}
