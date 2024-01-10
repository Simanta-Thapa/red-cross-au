$(document).ready(function(){

$(".navbar-nav .navBarSecondList .navBarSecondLink").mouseenter(function(){


  $(".GethelpPopUp").removeClass("active");
   $("#" + $(this).attr("data-tab")).addClass("active");
$("#first").addClass("index");



//    $("#tabs li a").click(function(){
//     $("#tabs li a").removeClass("active");
//     $(this).addClass("active");
//     $(".tab").removeClass("active")
//     $("#" + $(this).attr("data-tab")).addClass("active");
//     });


});


// $(".bottomNavBar").mouseleave(function(){
//     $("#" + $(this).attr("data-tab")).removeClass("active");
// })

$(".bottomNavBar").mouseleave(function(){

    $("#" + $(this).attr("data-tab")).removeClass("active");
})


$(".GethelpPopUp").mouseleave(function(){

    $(".GethelpPopUp").removeClass("active");
    $("#first").removeClass("index");
})
})



