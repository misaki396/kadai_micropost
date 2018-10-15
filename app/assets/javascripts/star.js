
$(document).on('click', '.star1', function() {
    if($('.star1').css('color') == 'rgb(255, 0, 0)'){
    $('.star1').css('color', 'yellow')
    console.log('ok');
    } else {
    console.log('星が黄色だったら')
        $('.star2').css('color', 'red')
        $('.star3').css('color', 'red')
        $('.star4').css('color', 'red')
        $('.star5').css('color', 'red')}
    });



$(document).on('click', '.star2', function() {
    if($('.star2').css('color') == 'rgb(255, 0, 0)'){
    $('.star1').css('color', 'yellow')
    $('.star2').css('color', 'yellow')
    console.log('ok');
    } else {
        console.log('星が黄色だったら')
          $('.star3').css('color', 'red')
          $('.star4').css('color', 'red')
          $('.star5').css('color', 'red')}
    });

$(document).on('click', '.star3', function() {
    if($('.star3').css('color') == 'rgb(255, 0, 0)'){
    $('.star1').css('color', 'yellow')
    $('.star2').css('color', 'yellow')
    $('.star3').css('color', 'yellow')
    console.log('ok');
    } else {
        console.log('星が黄色だったら')
    $('.star4').css('color', 'red')
    $('.star5').css('color', 'red')}
    });


$(document).on('click', '.star4', function() {
    if($('.star4').css('color') == 'rgb(255, 0, 0)'){
    $('.star1').css('color', 'yellow')
    $('.star2').css('color', 'yellow')
    $('.star3').css('color', 'yellow')
    $('.star4').css('color', 'yellow')
    console.log('ok');
    } else {
        console.log('星が黄色だったら')
        $('.star5').css('color', 'red')
    }
});

$(document).on('click', '.star5', function() {
    if($('.star5').css('color') == 'rgb(255, 0, 0)'){
    $('.star1').css('color', 'yellow')
    $('.star2').css('color', 'yellow')
    $('.star3').css('color', 'yellow')
    $('.star4').css('color', 'yellow')
    $('.star5').css('color', 'yellow')
    console.log('ok');
    } else {
        console.log('星が黄色だったら')
    }
});


