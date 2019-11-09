$(function(){
    $('#azul').click(function(){
        $('p')
            .css("background-color", 'blue')
            .fadeOut('fast')
            .delay(1000)
            .fadeIn();
    });

    $('#vermelho').click(function(){
        $('p').css("background-color", 'red');
        // Mensagem gravada no HTML
        $('#mensagem')
            .text('Cor Alterada com Sucesso!')
            .css({
                color: 'red', 
                border: '1px solid red'}
                // backgroundColor: '#F08080'}
                )
            .delay(1000)
            // Adicionando classe
            .addClass('green')
        // Removendo fundo vermelho do botão vermelho
        $('button').removeClass('red');
    });
});
