$(function(){
    var misaki = 0

    $('.js-star').each(function(i){
        $(this).attr('id', 'js-star-id' + (i+1));
        misaki = i+1
    });

    console.log(misaki)

    for (var p=1; p<=misaki; p++){
        (function(){
        var misaki2 = '#js-star-id' + p
        console.log(misaki2)
            $(misaki2 + ' > .star_1').on('click',function(){
                if ($(misaki2 + ' > .star_1').css('color') == 'rgb(255, 0, 0)'){
                    $(misaki2 + ' > .star_1').css('color', 'yellow')
                    console.log('ok');
                } else {
                    console.log('星が黄色だったら')
                    $(misaki2 + ' > .star_2').css('color', 'red')
                    $(misaki2 + ' > .star_3').css('color', 'red')
                    $(misaki2 + ' > .star_4').css('color', 'red')

                    $(misaki2 + ' > .star_5').css('color', 'red')
                }
            });

            $(misaki2 + ' > .star_2').on('click',function(){
                if($(misaki2 + ' > .star_2').css('color') == 'rgb(255, 0, 0)'){
                    $(misaki2 + ' > .star_1').css('color', 'yellow')
                    $(misaki2 + ' > .star_2').css('color', 'yellow')
                    console.log('ok');
                } else {
                    console.log('星が黄色だったら')
                    $(misaki2 + ' > .star_3').css('color', 'red')
                    $(misaki2 + ' > .star_4').css('color', 'red')
                    $(misaki2 + ' > .star_5').css('color', 'red')
                }
            });

            $(misaki2 + ' > .star_3').on('click',function(){
                if($(misaki2 + ' > .star_3').css('color') == 'rgb(255, 0, 0)'){
                    $(misaki2 + ' > .star_1').css('color', 'yellow')
                    $(misaki2 + ' > .star_2').css('color', 'yellow')
                    $(misaki2 + ' > .star_3').css('color', 'yellow')
                    console.log('ok');
                } else {
                    console.log('星が黄色だったら')
                    $(misaki2 + ' > .star_4').css('color', 'red')
                    $(misaki2 + ' > .star_5').css('color', 'red')
                }
            });

            $(misaki2 + ' > .star_4').on('click',function(){
                if($(misaki2 + ' > .star_4').css('color') == 'rgb(255, 0, 0)'){
                    $(misaki2 + ' > .star_1').css('color', 'yellow')
                    $(misaki2 + ' > .star_2').css('color', 'yellow')
                    $(misaki2 + ' > .star_3').css('color', 'yellow')
                    $(misaki2 + ' > .star_4').css('color', 'yellow')
                    console.log('ok');
                } else {
                    console.log('星が黄色だったら')
                    $(misaki2 + ' > .star_5').css('color', 'red')
                }
            });

            $(misaki2 + ' > .star_5').on('click',function(){
                if($(misaki2 + ' > .star_5').css('color') == 'rgb(255, 0, 0)'){
                    $(misaki2 + ' > .star_1').css('color', 'yellow')
                    $(misaki2 + ' > .star_2').css('color', 'yellow')
                    $(misaki2 + ' > .star_3').css('color', 'yellow')
                    $(misaki2 + ' > .star_4').css('color', 'yellow')
                    $(misaki2 + ' > .star_5').css('color', 'yellow')
                }
            });

        })(p)

    }


});