$(function(){
    $('.js-star').each(function(i){
        $(this).attr('id', 'js-star-id' + (i+1));
    });
});

//$(function(){
//    $('.fas').each(function(i){
//        $(this).attr('id','element' + (i+1));
//    });
//});

$(document).on('click', '.star_1', function() {
    if($('.star_1').css('color') == 'rgb(255, 0, 0)'){
    $('.star_1').css('color', 'yellow')
    console.log('ok');
    } else {
    console.log('星が黄色だったら')
        $('.star_2').css('color', 'red')
        $('.star_3').css('color', 'red')
        $('.star_4').css('color', 'red')
        $('.star_5').css('color', 'red')
    }
    });

$(document).on('click', '.star_2', function() {
    if($('.star_2').css('color') == 'rgb(255, 0, 0)'){
    $('.star_1').css('color', 'yellow')
    $('.star_2').css('color', 'yellow')
    console.log('ok');
    } else {
        console.log('星が黄色だったら')
          $('.star_3').css('color', 'red')
          $('.star_4').css('color', 'red')
          $('.star_5').css('color', 'red')}
    });

$(document).on('click', '.star_3', function() {
    if($('.star_3').css('color') == 'rgb(255, 0, 0)'){
    $('.star_1').css('color', 'yellow')
    $('.star_2').css('color', 'yellow')
    $('.star_3').css('color', 'yellow')
    console.log('ok');
    } else {
        console.log('星が黄色だったら')
    $('.star_4').css('color', 'red')
    $('.star_5').css('color', 'red')}
    });


$(document).on('click', '.star_4', function() {
    if($('.star_4').css('color') == 'rgb(255, 0, 0)'){
    $('.star_1').css('color', 'yellow')
    $('.star_2').css('color', 'yellow')
    $('.star_3').css('color', 'yellow')
    $('.star_4').css('color', 'yellow')
    console.log('ok');
    } else {
        console.log('星が黄色だったら')
        $('.star_5').css('color', 'red')
    }
});

$(document).on('click', '.star_5', function() {
    if($('.star_5').css('color') == 'rgb(255, 0, 0)'){
    $('.star_1').css('color', 'yellow')
    $('.star_2').css('color', 'yellow')
    $('.star_3').css('color', 'yellow')
    $('.star_4').css('color', 'yellow')
    $('.star_5').css('color', 'yellow')
    console.log('ok');
    } else {
        console.log('星が黄色だったら')
    }
});
