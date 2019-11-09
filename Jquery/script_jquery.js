/*
$(document).ready(function(){
    // Este comando verifica se todo documento foi carregado
    $('button').click(function(){
        // Escondendo o seletor H1
        $('h1').hide();
        $('h2').hide();
        $('h3').hide();
    });
});
*/

$(function(){
    // Este comando TAMBÉM verifica se todo documento foi carregado
    $('#hide').click(function(){
        // Escondendo o seletor H1
        $('h1').hide();
    });
        // Alterando cor do seletor H2, H3 pelo CSS
    $('#hide').click(function(){
        $('h2').css('color', 'green');
        $('#h2_size').css('background-color', 'black');
        $('h3').css('color', 'blue');
    });
    $('#fadeMode').click(function(){
        // Alterando cor do seletor H2, H3 pelo CSS em Modo FADE
        $('h2').css('color', 'green');
        $('h2').fadeOut();
        $('#h2_size').css('background-color', 'black');
        $('#h2_size').fadeOut();
        $('h3').css('color', 'blue');
        $('h3').fadeOut();
    });
    $('#fadeMode_Delay').click(function(){
        // Alterando cor do seletor H2, H3 pelo CSS em Modo FADE
        $('h2').css('color', 'green');
        $('h2').fadeOut();
        $('h2').delay(1000);
        $('h2').fadeIn();
        $('#h2_size').css('background-color', 'black');
        $('h3').css('color', 'blue');
        $('h3').fadeOut();
        // Pausa de 3 Segundos
        $('h3').delay(3000);
        $('h3').fadeIn();
    });
});
