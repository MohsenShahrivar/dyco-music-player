$('document').ready(function () {
   /* $('.share-it').click(function () {
        alert('hi');
        $('#shadow-background-share').animate({
            opacity: '1',
            display: 'flex'
        });
    });

    $('.showNow').click(function () {
        $('.showNow').animate(600,{
            opacity: '0';
        },function (){
            $('.showNow').style('display','none');
        });
        $('#shadow-background-share').removeClass('.showNow');
    });
*/


    /*Save To Favorate Button*/
    $('.save-to-fav').hover(function (){
       $('.save-to-fav path:nth-child(4)').css("fill","red");
    }, function () {
        $('.save-to-fav path:nth-child(4)').css("fill","#fff");
    });
    $('.save-to-fav').hover(function (){
        $('.save-to-fav path:nth-child(4)').css("fill","red");
    }, function () {
        $('.save-to-fav path:nth-child(4)').css("fill","#fff");
    });

    $('.bi-arrow-bar-left').click(function () {
        $('.noSidebar').addClass('col-lg-10 col-xl-10');
        $('.sidebar').css("display","block");
        $('.sidebar').addClass('col-lg-2 col-xl-2');
        $('.bi-arrow-bar-left').css("opacity","0");
        $('.bi-arrow-bar-right').css("opacity","1");
    });

    $('.bi-arrow-bar-right').click(function () {
        $('.noSidebar').removeClass('col-lg-10 col-xl-10');
        $('.sidebar').css("display","none");
        $('.sidebar').removeClass('col-lg-2 col-xl-2');
        $('.bi-arrow-bar-right').css("opacity","0");
        $('.bi-arrow-bar-left').css("opacity","1");
    });

    $(window).keydown(function(e){
        if (e.ctrlKey)
            console.log('Control Down');
    });

    $('.iframe-code button').click(function () {
        $('.alertCopied p').css('left','2%');
        setTimeout(
            function()
            {
                $('.alertCopied p').css('left','-15%');
            }, 2000);
    });


});
