$(document).ready(function(){
    $('.boxes-slider').slick({
        dots: true,
        arrows: false
    });



    $(document).on('click', '[data-tab]', function(){

        $(this).addClass("active");
        
        $(this).siblings().removeClass("active");
        
        var dataTab = $(this).attr('data-tab');
        
        $('#'+dataTab).siblings().removeClass("active");
        
        $('#'+dataTab).addClass('active');
        
        })


});