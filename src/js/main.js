$(function(){
    $(".hamburger ,.menu-link").on("click",function(){
        $(".hamburger").toggleClass("active");
        $(".menu").toggleClass("active");
        $("body").toggleClass("lock");
    })

});