$(function(){
    $('.fas').each(function(i){
        $(this).attr('id','element' + (i+1));
    });
});

$(document).on('click', '#element1', function() {
    if($('#element1').css('color') == 'rgb(255, 0, 0)'){
    $('#element1').css('color', 'yellow')
    console.log('ok');
    } else {
    console.log('星が黄色だったら')
        $('#element2').css('color', 'red')
        $('#element3').css('color', 'red')
        $('#element4').css('color', 'red')
        $('#element5').css('color', 'red')
    }
    });

$(document).on('click', '#element2', function() {
    if($('#element2').css('color') == 'rgb(255, 0, 0)'){
    $('#element1').css('color', 'yellow')
    $('#element2').css('color', 'yellow')
    console.log('ok');
    } else {
        console.log('星が黄色だったら')
          $('#element3').css('color', 'red')
          $('#element4').css('color', 'red')
          $('#element5').css('color', 'red')}
    });

$(document).on('click', '#element3', function() {
    if($('#element3').css('color') == 'rgb(255, 0, 0)'){
    $('#element1').css('color', 'yellow')
    $('#element2').css('color', 'yellow')
    $('#element3').css('color', 'yellow')
    console.log('ok');
    } else {
        console.log('星が黄色だったら')
    $('#element4').css('color', 'red')
    $('#element5').css('color', 'red')}
    });


$(document).on('click', '#element4', function() {
    if($('#element4').css('color') == 'rgb(255, 0, 0)'){
    $('#element1').css('color', 'yellow')
    $('#element2').css('color', 'yellow')
    $('#element3').css('color', 'yellow')
    $('#element4').css('color', 'yellow')
    console.log('ok');
    } else {
        console.log('星が黄色だったら')
        $('#element5').css('color', 'red')
    }
});

$(document).on('click', '#element5', function() {
    if($('#element5').css('color') == 'rgb(255, 0, 0)'){
    $('#element1').css('color', 'yellow')
    $('#element2').css('color', 'yellow')
    $('#element3').css('color', 'yellow')
    $('#element4').css('color', 'yellow')
    $('#element5').css('color', 'yellow')
    console.log('ok');
    } else {
        console.log('星が黄色だったら')
    }
});



