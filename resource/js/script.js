$(document).ready(function () {
    //헤더 호버
    $('#header nav').mouseenter(function(){
        $('#header').addClass('on');
    })

    $('#header nav').mouseleave(function(){
        $('#header').removeClass('on');
    })

    //모바일 햄버거 메뉴 클릭
    $('.mHeader .openBt').click(function(){
        $('.mMenuArea').animate({left:0},600)
    })

    //menu close
    $('.mMenuArea .closeBt').click(function(){
        $('.mMenuArea').animate({left:'-100%'},600)
    })

    //1depth click
    $('.mMenuArea #gnb .depth1').click(function(){
        //all depth2 hide
        $('.mMenuArea #gnb .depth2').slideUp();
        $('.mMenuArea #gnb .depth1').removeClass('on');

        if(!$(this).next().is(':visible')){
            $(this).next().slideDown();
            $(this).addClass('on');
        }
    })

    //버튼을 클릭하면
    $('.quick-button').click(function () {
        $('.quick').toggleClass('close');

        if ($(this).text() == '퀵메뉴 닫기') {
            console.log("close");
            $(this).text('퀵메뉴 열기');
            $(this).addClass('close');

        } else {
            console.log("open");
            $(this).text("퀵메뉴 닫기");
            $(this).removeClass('close');
        }
    })

    /*============================================
    //퀵메뉴 보이기 설정
    ============================================*/
    //윈도우를 리사이즈하면
    $(window).resize(function () {
       showHideQuickMenu();
    })

    function showHideQuickMenu(){
        console.log($(window).width());
        if ($(window).width() <= 1600) {
            $('.quick').addClass('close')
        } else {
            $('.quick').removeClass('close');
        }
    }

    //윈도우가 스크롤되면
    $(window).scroll(function () {
        let winScrollTop = $(window).scrollTop();
        let slider_height = $('#main_visual').height();

        if (winScrollTop >= slider_height) {
            $('.btn-top').addClass('show');
        } else {
            $('.btn-top').removeClass('show');
        }
    })
    // top 버튼 클릭
    $('.btn-top').click(function () {
        $('html').animate({ scrollTop: '0' }, 680);
    })
})