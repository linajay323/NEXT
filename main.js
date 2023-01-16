// navbar  active
const toggleBtn = document.querySelector('.navbar_tooglebtn');
const menu = document.querySelector('.navbar_menu');
const icons = document.querySelector('.navbar_icons');

    toggleBtn.addEventListener('click', ()=> {
    menu.classList.toggle('active'); 
    icons.classList.toggle('active'); 
});

// 기본 위치(top)값
var floatPosition = parseInt($(".sideBanner").css('top'))

// scroll 인식
$(window).scroll(function() {
    // 현재 스크롤 위치
    var currentTop = $(window).scrollTop();
    var bannerTop = currentTop + floatPosition + "px";

    //이동 애니메이션
    $(".sideBanner").stop().animate({
    "top" : bannerTop
    }, 500);
}).scroll();

// 버튼 클릭시 배경색상 변경
var button = document.getElementById("btn1");
    button.addEventListener("click", function() {
    this.style.backgroundColor = "red";
});

// 버튼 클릭시 텍스트 변경
var button = document.getElementById("btn1");
    button.addEventListener("click", function() {
    this.innerHTML = "DOWN";
});

// 버튼 클릭시 텍스트 변경 기존(20230112이전)
// function changeBtnName1()  {
//     const btnElement = document.getElementById('btn1');
//     btnElement.innerText = 'UP';

