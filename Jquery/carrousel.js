$(function(){
    $('#l1').click(function(){
        $('#i1').show().delay(1000);
        $('#i2').hide().delay(1000).fadeOut('fast');
        $('#i2').hide().delay(1000).fadeOut('fast');
        $('#i2').hide().delay(1000).fadeOut('fast');
    });
    $('#l2').click(function(){
        $('#i1').hide().delay(1000).fadeOut('fast');
        $('#i2').show().delay(1000);
        $('#i3').hide().delay(1000).fadeOut('fast');
        $('#i4').hide().delay(1000).fadeOut('fast');
    });
    $('#l3').click(function(){
        $('#i1').hide().delay(1000).fadeOut('fast');
        $('#i2').hide().delay(1000).fadeOut('fast');
        $('#i3').show().delay(1000);
        $('#i4').hide().delay(1000).fadeOut('fast');
    });
    $('#l4').click(function(){
        $('#i1').hide().delay(1000).fadeOut('fast');
        $('#i2').hide().delay(1000).fadeOut('fast');
        $('#i3').hide().delay(1000).fadeOut('fast');
        $('#i4').show().delay(1000);
    });
});