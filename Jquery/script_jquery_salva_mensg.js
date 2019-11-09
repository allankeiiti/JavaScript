$(function(){
    $('#azul').click(function(){
        $('p').css("background-color", 'blue');
        $('p').fadeOut('fast');
        $('p').delay(1000);
        $('p').fadeIn();
    });

    $('#vermelho').click(function(){
        $('p').css("background-color", 'red');
        // Mensagem gravada no HTML
        $('#mensagem').text('Cor Alterada com Sucesso!');
        $('#mensagem').css('color', 'red');
        $('#mensagem').css('border', '1px solid red');
        $('#mensagem').delay(1000);
        $('#mensagem').fadeOut('fast');
    });
});
