/**
 * Created by admin on 2016. 4. 6..
 */

$(function(){

    $('.menu > ul > li').on("click", function(){

        //클릭한 메뉴의 class에서 카테고리와 콘텐츠 타이틀을 얻음.
        var $thisEl = $(this).attr('class').split("_");
        // var src_root = $(this).attr('class').split("_")[0];
        // var src_content = $(this).attr('class').split("_")[1];
        var src_root = $thisEl[0]; // 대분류(카테고리)
        var src_content = $thisEl[1]; //소분류(콘텐츠명)
        var toSrc = 'http://yumm.co.kr/blogs/asset/contents/' + src_root + '/' + src_content + '/'; //이동할 url 구성

        //page 내 .content 영역에 해당 html을 로드(with animation)
        $('.content').load(toSrc , function() {
            //callback : 로드를 완료하면 해당 코드에서 pre, code 태그를 찾아 highlightjs 라이브러리 를 적용.
            $('pre code').each(function(i, block) {
                hljs.highlightBlock(block);
            });
        }).hide().fadeIn('slow');

    });



});



$(function(){

    /* Go to top Btn  by tadkim */
    // Show or hide the sticky footer button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('.go-top').fadeIn(200);
        } else {
            $('.go-top').fadeOut(200);
        }
    });

    // Animate the scroll to top
    $('.go-top').click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, 300);
    });


});


$(document).ready(function(){

    /* Menu Animation  by tadkim */
    // menu 클래스 바로 하위에 있는 a 태그를 클릭했을때
    $(".menu>a").click(function(){
        var submenu = $(this).next("ul");

        // submenu 가 화면상에 보일때는 위로 보드랍게 접고 아니면 아래로 보드랍게 펼치기
        if( submenu.is(":visible") ){
            submenu.slideUp();
        }else{
            submenu.slideDown();
        }
    });


});

