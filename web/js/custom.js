// 라이트박스
$(".lightgallery").lightGallery({
    thumbnail: true,
    autoplay: true,
    pause: 3000,
    progressBar: true
});

// 윈도우팝업
$(".window").on("click", function(e){
    e.preventDefault();
    // window.open("파일명", "팝업이름", "옵션설졍");
    // 옵션 : left, top, width, height, status(상태), toolbar, location(주소창), menubar, scrollbars, fullscreen
    window.open("sample_popup.html", "popup01", "width=800, height=590, left=50, top=50, scrollbars=0, toolbar=0, menubar=0");
});

// 레이어팝업
$(".layer").on("click", function(e){
    e.preventDefault(); // 버튼클릭시 위로올라가는 현상 없애기
    // $("#layer").css("display","block");
    // $("#layer").show();
    $("#layer").slideDown();
    // $("#layer").fadeIn();
})

$("#layer .close").on("click", function(e){
    e.preventDefault();
    // $("#layer").css("display","none");
    // $("#layer").hide();
    $("#layer").slideUp();
    // $("#layer").fadeOut();
});

// 탭메뉴
// 변수 >> 데이터를 저장하는 저장소
var $tab_list = $(".tab-menu");

$tab_list.find("ul ul").hide();
$tab_list.find("li.active > ul").show();

function tabMenu(e){
    e.preventDefault();
    var $this = $(this);
    $this.next("ul").show().parent("li").addClass("active").siblings("li").removeClass("active")
        .find(">ul").hide();

}

$tab_list.find("ul>li>a").click(tabMenu).focus(tabMenu);

// 배너
// 순서
// html 마크업세팅 >> css 연동 >> jquery연동 >> jquery 호출
$(document).ready(function(){
  $('.ban').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true
  });
});

// 갤러리
$(".gallery_img").slick({
    arrows: false,
    fade: true,
    pauseOnHover: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 300,
    slidesToShow: 1
});
$(".play").click(function(){
   $(".gallery_img").slick("slickPlay");
});
$(".pause").click(function(){
   $(".gallery_img").slick("slickPause");
});
$(".prev").click(function(){
   $(".gallery_img").slick("slickPrev");
});
$(".next").click(function(){
   $(".gallery_img").slick("slickNext");
});

// 버튼 클릭시 전체메뉴를 보이게하기
$(".tit .btn").on("click", function(e){
    // 클릭 시 0,0으로 이동시키는 것을 차단하는 것
    e.preventDefault();
//           $("#cont_nav").css("display","block");
//           $("#cont_nav").show();
    // 애니메이션작동
//            $("#cont_nav").slideDown();
//            $("#cont_nav").fadeIn();
    // 반복적으로 진행
//            $("#cont_nav").toggle();
    // 애니메이션 + 반복진행
//            $("#cont_nav").fadeToggle();
    $("#cont_nav").slideToggle(150);
    $(this).toggleClass("on");


});
