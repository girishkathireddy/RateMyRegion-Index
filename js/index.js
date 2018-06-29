$(document).ready(function(){

   $('.scrbtn').click(function(){

   	 var emailid=  $('.email1').val();
    console.log(emailid+"ki");
     var sdata = {};
    sdata['mode'] = "index";
    sdata['emailid'] = emailid;
    $.ajax({
        url: 'index_ajax.php',
        type: 'get',
        data: {myData:sdata},
        success: function(data) {
            console.log(data);
            var responsedata = $.parseJSON(data);
            console.log(responsedata);
            // append_schools(schoolObj);
            // log(schoolObj);
         var message = responsedata.message;
         console.log(message +"ki");
         $('#signup-response').text(message);
        },
        error: function(xhr, desc, err) {
            console.log(xhr);
            console.log("Details: " + desc + "\nError:" + err);
        }
    }); // end ajax call

        return false;

    });

      $('.scrbtn2').click(function(){

   	 var emailid=  $('.email2').val();
    console.log(emailid+"ki");
     var sdata = {};
    sdata['mode'] = "index";
    sdata['emailid'] = emailid;
    $.ajax({
        url: 'index_ajax.php',
        type: 'get',
        data: {myData:sdata},
        success: function(data) {
            console.log(data);
            var responsedata = $.parseJSON(data);
            console.log(responsedata);
            // append_schools(schoolObj);
            // log(schoolObj);
         var message = responsedata.message;
         console.log(message +"ki");
         $('#signup-response2').text(message);
        },
        error: function(xhr, desc, err) {
            console.log(xhr);
            console.log("Details: " + desc + "\nError:" + err);
        }
    }); // end ajax call

        return false;

    });

});