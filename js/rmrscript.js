$(function(){
    "use strict";
    // var wheight = $(window).height(); //get the height of the window
    // $('.fullheight').css('height', wheight); //set to window tallness
    //
    // //adjust height of .fullheight elements on window resize
    // $(window).resize(function() {
    //     wheight = $(window).height(); //get the height of the window
    //     $('.fullheight').css('height', wheight); //set to window tallness
    // });

    checkCookie('disablebtn');

    var sliderq1;
    var sliderq2;


    $('.btn-first-page').click(function(){


        $(".first-sect-page-one").fadeOut(800,function(){
            $(".first-sec-page-two").fadeIn(20, function(){
                    sliderq1 = new Slider("#ex13", {
                    ticks: [1,2,3,4,5,6,7,8,9,10],
                    ticks_labels: ['1', '2', '3', '4', '5','6','7','8','9','10'],
                    ticks_snap_bounds: 30
                });
            });
        });
    });



    $('.btn-sec-page').click(function(){

        // Saving score
        var score = sliderq1.getValue();
        if(checkCookie('userid')){
               var userid= getCookie('userid');
                // console.log('have userid' +userid);
                var sdata = {};
                sdata['mode'] = "saveScore";
                sdata['userid'] =userid;
                sdata['score'] = score;
                sdata['q-number']=1;
                sdata['familiarity']='';
                sdata['comment']=$('#comment-q1').val();
                // console.log('ajax call')
                $.ajax({
                    url: 'ajax/rmr_ajax.php',
                    type: 'post',
                    data: {myData:sdata},
                    success: function(data) {
                        // console.log('Data stored');
                    },
                    error: function(xhr, desc, err) {
                        console.log(xhr);
                        console.log("Details: " + desc + "\nError:" + err);
                    }
                }); // end ajax call
        }else {
                // RandomNumber
              var userid= Math.floor(Math.random() *999999) + 1000000;
                // console.log('userid doesnt exsits'+ userid);
                var d = new Date();
                d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
                var expires = "expires="+d.toUTCString();
                document.cookie = "userid="+userid+";" + expires + ";path=/";

                var sdata = {};
                sdata['mode'] = "saveScore";
                sdata['userid'] =userid;
                sdata['score'] = score;
                sdata['q-number']=1;
                sdata['familiarity']='';
                sdata['comment']=$('#comment-q1').val();
                // console.log('ajax call')
                $.ajax({
                    url: 'ajax/rmr_ajax.php',
                    type: 'post',
                    data: {myData:sdata},
                    success: function(data) {
                        console.log('Data stored');
                    },
                    error: function(xhr, desc, err) {
                        console.log(xhr);
                        console.log("Details: " + desc + "\nError:" + err);
                    }
                }); // end ajax call

        }
        //Moving to next page
        $(".first-sec-page-two").fadeOut(800,function(){
            $(".third-page").fadeIn(20, function(){
                    sliderq2 = new Slider("#ex14", {
                    ticks: [1,2,3,4,5,6,7,8,9,10],
                    ticks_labels: ['1', '2', '3', '4', '5','6','7','8','9','10'],
                    ticks_snap_bounds: 30
                });
            });
        });

    });


    $('.btn-third-page').click(function(){

        // Saving score
        // Saving score
        var score = sliderq2.getValue();
        if(checkCookie('userid')){
            var userid= getCookie('userid');
            // console.log('have userid' +userid);
            var sdata = {};
            sdata['mode'] = "saveScore";
            sdata['userid'] =userid;
            sdata['score'] = score;
            sdata['q-number']=2;
            sdata['familiarity']=$('.btn_d3.selected').val();
            sdata['comment']=$('#comment-q2').val();
            // console.log('ajax call')
            $.ajax({
                url: 'ajax/rmr_ajax.php',
                type: 'post',
                data: {myData:sdata},
                success: function(data) {
                    console.log('Data stored');
                },
                error: function(xhr, desc, err) {
                    console.log(xhr);
                    console.log("Details: " + desc + "\nError:" + err);
                }
            }); // end ajax call
        }else {
            // RandomNumber

          var userid= Math.floor(Math.random() *999999) + 1000000;
            var d = new Date();
            d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
            var expires = "expires="+d.toUTCString();
            document.cookie = "userid="+userid+";" + expires + ";path=/";
            // console.log('userid doesnt exsits'+ userid);
            var sdata = {};
            sdata['mode'] = "saveScore";
            sdata['userid'] =userid;
            sdata['score'] = score;
            sdata['q-number']=2;
            sdata['familiarity']=$('.btn_d3.selected').val();
            sdata['comment']=$('#comment-q2').val();
            // console.log('ajax call')
            $.ajax({
                url: 'ajax/rmr_ajax.php',
                type: 'post',
                data: {myData:sdata},
                success: function(data) {
                    console.log('Data stored');
                },
                error: function(xhr, desc, err) {
                    console.log(xhr);
                    console.log("Details: " + desc + "\nError:" + err);
                }
            }); // end ajax call

        }

        // Moving to next page
        $(".third-page").fadeOut(800,function(){
            $(".fourth-page").fadeIn(20, function(){

            });
        });

    });

  // Third page btn selectors
    $('.btn_d3').on('click', function(){
        $('.btn_d3').removeClass('selected');
        $(this).addClass('selected');
    });


    //Dealing with cookies
    $('.subscribe-secsctn').on('click',function(){

        // console.log(isEmail($('#useremail').val()));

        if(isEmail($('#useremail').val())){
        var d = new Date();
        d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
        var expires = "expires="+d.toUTCString();
        document.cookie = "disablebtn=yes;" + expires + ";path=/";

        // RandomNumber
        var userid;
        if(checkCookie('userid')){
            userid=getCookie('userid')
            // console.log('store email with id '+userid);
        }else{
            userid= Math.floor(Math.random() *999999) + 1000000;
            var d = new Date();
            d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
            var expires = "expires="+d.toUTCString();
            document.cookie = "userid="+userid+";" + expires + ";path=/";
            // console.log('store email with id '+userid);
        }

        var sdata = {};
        sdata['mode'] = "saveemail";
        sdata['userid'] =userid;
        sdata['useremail'] = $('#useremail').val();

        $.ajax({
            url: 'ajax/rmr_ajax.php',
            type: 'post',
            data: {myData:sdata},
            success: function(data) {
         // data=  JSON.stringify(data)
         //  console.log(data.saved);
                    $(".second-section-content .sec-sec-btn").css({"opacity":"0"});
                    $(".second-section-content span.hide-details-opacity").text('Thank you for your Subscription!.');
                    // $(".second-section-content span.hide-details-opacity").css({"color':'#ff4f5c'});
                    $(".second-section-content span.hide-details-opacity").css({"opacity":"1",'color':'#ff4f5c'});
                    // $(".second-section-content span.hide-details-opacity").fadeIn(20, function(){
                    //
                    // });

                $('.fourth-page-btngroup').css({'display':'none'});


            },
            error: function(xhr, desc, err) {
                console.log(xhr);
                console.log("Details: " + desc + "\nError:" + err);
            }
        }); // end ajax call

        } else{
            $(".second-section-content span.hide-details-opacity").text('Please enter valid Email');
            $(".second-section-content span.hide-details-opacity").css({"opacity":"1",'color':'#ff4f5c','font-size':'14px'});

        }

    });

    $('.btn-fourth-page').on('click',function(){
        // console.log(isEmail($('#useremail-2').val()));

        if(isEmail($('#useremail-2').val())) {
            var d = new Date();
            d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
            var expires = "expires=" + d.toUTCString();
            document.cookie = "disablebtn=yes;" + expires + ";path=/";
            $(".fourth-page span.hide-details").text('Thank you for your interest. We will get in touch with the results soon.');
            $(".fourth-page span.hide-details").css({"display":'inline-block','color':'#ff4f5c','font-size':'16px'});
            $(".fourth-page-btngroup").fadeOut(800, function () {
                $(".fourth-page span.hide-details").fadeIn(20, function () {

                });
            });
            $(".second-section-content .sec-sec-btn").hide();
            var sdata = {};
            sdata['mode'] = "saveemail";
            sdata['userid'] = getCookie('userid');
            sdata['useremail'] = $('#useremail-2').val();

            // Saving email
            $.ajax({
                url: 'ajax/rmr_ajax.php',
                type: 'post',
                data: {myData: sdata},
                success: function (data) {

                },
                error: function (xhr, desc, err) {
                    console.log(xhr);
                    console.log("Details: " + desc + "\nError:" + err);
                }
            }); // end ajax call
        }else{
            $(".fourth-page span.hide-details").text('Please enter valid Email');
            $(".fourth-page span.hide-details").css({"display":'inline-block','color':'#ff4f5c','font-size':'16px'});
                $(".fourth-page span.hide-details").fadeIn(20, function () {

                });
        }

    });






    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    function checkCookie(cname) {
        var cookieValue = getCookie(cname);
        if (cookieValue == "yes") {
            $(".second-section-content .sec-sec-btn").hide();
            $('.fourth-page-btngroup').css({'display':'none'});
            return true;
        }
        if(cookieValue !='' && cookieValue !=null){
            return true;
        }


        return false;
    }


    function isEmail(email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }



    }
)