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

function changeBtnName1()  {
    const btnElement = document.getElementById('btn1');
    btnElement.innerText = 'UP';
}
function changeBtnName2()  {
    const btnElement = document.getElementById('btn2');
    btnElement.innerText = 'DOWN';
}
function changeBtnName3()  {
    const btnElement = document.getElementById('btn3');
    btnElement.innerText = 'UP';
}
function changeBtnName4()  {
    const btnElement = document.getElementById('btn4');
    btnElement.innerText = 'UP';
}
function changeBtnName5()  {
    const btnElement = document.getElementById('btn5');
    btnElement.innerText = 'UP';
}
function changeBtnName6()  {
    const btnElement = document.getElementById('btn6');
    btnElement.innerText = 'UP';
}
function changeBtnName7()  {
    const btnElement = document.getElementById('btn7');
    btnElement.innerText = 'UP';
}
function changeBtnName8()  {
    const btnElement = document.getElementById('btn8');
    btnElement.innerText = 'UP';
}
function changeBtnName9()  {
    const btnElement = document.getElementById('btn9');
    btnElement.innerText = 'UP';
}
function changeBtnName10()  {
    const btnElement = document.getElementById('btn10');
    btnElement.innerText = 'UP';
}
function changeBtnName11()  {
    const btnElement = document.getElementById('btn11');
    btnElement.innerText = 'UP';
}
function changeBtnName12()  {
    const btnElement = document.getElementById('btn12');
    btnElement.innerText = 'DOWN';
}
