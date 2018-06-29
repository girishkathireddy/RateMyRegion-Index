

$('.btn_d3').on('click', function(){
    $('.btn_d3').removeClass('selected');
    $(this).addClass('selected');
});

$('.btn_d4').on('click', function(){
    $('.btn_d4').removeClass('selected');
    $(this).addClass('selected');
});
$('.fpbtn').click(function(){


    $(".firstpage").fadeOut(800,function(){
        $(".secondpage").fadeIn(20, function(){
            var slider = new Slider("#ex13", {
                ticks: [1,2,3,4,5,6,7,8,9,10],
                ticks_labels: ['1', '2', '3', '4', '5','6','7','8','9','10'],
                ticks_snap_bounds: 30
            });
        });
    });



});


$('.spbtn').click(function(){
    $(".secondpage").fadeOut(800,function(){
        $(".thirdpage").fadeIn(20, function(){
            var slider = new Slider("#ex14", {
                ticks: [1,2,3,4,5,6,7,8,9,10],
                ticks_labels: ['1', '2', '3', '4', '5','6','7','8','9','10'],
                ticks_snap_bounds: 30
            });
        });
    });

});


$('.tpbtn').click(function(){
    $(".thirdpage").fadeOut(600,function(){
        $(".fourthpage").fadeIn(1000, function(){
        });
    });
});

