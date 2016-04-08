/**
 * Created by admin on 2016. 4. 6..
 */

$(function(){
    //메뉴 클릭시, 해당 HTML구성하여 페이지영역에 로드
    $('.menu > ul > li').on("click", function(listEle){
        var $this = this;
        var src_root = $(this).attr('class').split("_")[0];
        var src_content = $(this).attr('class').split("_")[1];
        var toSrc = 'http://yumm.co.kr/blog/asset/contents/' + src_root + '/' + src_content + '/';
        $('.content').load(toSrc , function() {
            $('pre code').each(function(i, block) {
                hljs.highlightBlock(block);
            });
        }).hide().fadeIn('slow');
    });
});

/*menulist event*/
$(document).ready(function(){
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