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
            .css('color', 'red')
            .css('border', '1px solid red')
            .delay(1000)
            .fadeOut('fast');
    });
});
