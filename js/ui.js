$('.intro').addClass('active');
$('.intro .border-event').addClass("active");

function go_top() {
  $("body,html").stop().animate({ "scrollTop": 0 }, 800);
}

var browser = navigator.userAgent.toLowerCase();
if ((navigator.appName == 'Netscape' && browser.indexOf('trident') != -1) || (browser.indexOf("msie") != -1)) {
  $('.wrapper').addClass('ie');
}

var offT = [];
function scrollEvent() {
  var sc_top = $(window).scrollTop();
  if ($(window).width() <= 768 && sc_top >= 350) {
    $('#jk-hd').addClass('scroll');
  } else {
    $('#jk-hd').removeClass('scroll');
  }
  if ($(window).width() <= 349) {
    var scr = $(window).scrollTop();

    for (i = 0; i < 2; i++) {
      var eventClass = ['.tax-wrap', '.why-wrap'];
      offT[i] = $(eventClass[i]).offset().top - 330;

      if (scr >= offT[i]) {
        $(eventClass[i]).addClass('active');
        $(eventClass[i]).find('.border-event').addClass('active');
      }
    }

    for (i = 0; i < 2; i++) {
      var eventClass = ['.teacher', '.student'];
      offT[i] = $(eventClass[i]).offset().top - 80;

      if (scr >= offT[i]) {
        $(eventClass[i]).addClass('active');
        $(eventClass[i]).find('.border-event').addClass('active');
      }
    }

    for (i = 0; i < 2; i++) {
      var eventClass = ['.user-student-wrap ', '.user-teacher-wrap'];
      offT[i] = $(eventClass[i]).offset().top + 200;

      if (scr >= offT[i]) {
        $(eventClass[i]).addClass('active');
      }
    }
    if (scr >= $('.top-btn-wrap').offset().top - 350) {
      $('.top-btn-wrap').addClass('active');
    } else if (scr <= 5800) {
      $('.top-btn-wrap').removeClass('active');
    }
  } else if ($(window).width() < 576 && $(window).width() > 350) {
    var scr = $(window).scrollTop();

    for (i = 0; i < 2; i++) {
      var eventClass = ['.tax-wrap', '.why-wrap'];
      offT[i] = $(eventClass[i]).offset().top - 400;

      if (scr >= offT[i]) {
        $(eventClass[i]).addClass('active');
        $(eventClass[i]).find('.border-event').addClass('active');
      }
    }

    for (i = 0; i < 2; i++) {
      var eventClass = ['.teacher', '.student'];
      offT[i] = $(eventClass[i]).offset().top - 180;

      if (scr >= offT[i]) {
        $(eventClass[i]).addClass('active');
        $(eventClass[i]).find('.border-event').addClass('active');
      }
    }

    for (i = 0; i < 2; i++) {
      var eventClass = ['.user-student-wrap ', '.user-teacher-wrap'];
      offT[0] = $(eventClass[0]).offset().top + 500;
      offT[1] = $(eventClass[1]).offset().top + 270;

      if (scr >= offT[i]) {
        $(eventClass[i]).addClass('active');
      }
    }

    if (scr >= $('.top-btn-wrap').offset().top - 750) {
      $('.top-btn-wrap').addClass('active');
    } else if (scr <= 5800) {
      $('.top-btn-wrap').removeClass('active');
    }
  } else {

    var scr = $(window).scrollTop();
    for (i = 0; i < 4; i++) {
      var eventClass = ['.tax-wrap', '.why-wrap', '.teacher', '.student'];
      offT[i] = $(eventClass[i]).offset().top - 500;

      if (scr >= offT[i]) {
        $(eventClass[i]).addClass('active');
        $(eventClass[i]).find('.border-event').addClass('active');
      }
    }
    for (i = 0; i < 2; i++) {
      var eventClass = ['.user-student-wrap ', '.user-teacher-wrap'];
      offT[i] = $(eventClass[i]).offset().top + 600;

      if (scr >= offT[i]) {
        $(eventClass[i]).addClass('active');
      }
    }
    if (scr >= $('.top-btn-wrap').offset().top - 570) {
      $('.top-btn-wrap').addClass('active');
    } else if (scr <= 6000) {
      $('.top-btn-wrap').removeClass('active');
    }
  }
}

$(window).on("scroll", scrollEvent);
$(window).on("load", scrollEvent);

// 오늘 하루 보지 않기
cookiedata = document.cookie;
const noticePopup = document.querySelector('#popup1');
const notToday = document.querySelector('#not_today');

// 팝업 열리는 함수
function openMainPopup() {
  noticePopup.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

// 팝업 닫히는 함수
function closeMainPopup() {
  noticePopup.style.display = 'none';
  document.body.style.overflow = 'auto';
}

// 쿠키 설정
function setCookie(name, value, expiredays) {
  var date = new Date();
  date.setDate(date.getDate() + expiredays);
  document.cookie = escape(name) + "=" + escape(value) + "; path=/; expires=" + date.toUTCString();
}

// 쿠키 조회하기
function getCookie(name) {
  var cookie = document.cookie;
  if (document.cookie != "") {
    var cookieArray = cookie.split("; ");
    for (var index in cookieArray) {
      var cookieName = cookieArray[index].split("=");
      if (cookieName[0] == "popupYN") {
        return cookieName[1];
      }
    }
  } return;
}

// 오늘 하루 보지않기를 누르면 쿠키가 설정된다.
function todayClosePopup() {
  setCookie("popupYN", "N", 1);     // 저장될 쿠키명 , 쿠키 value값 , 기간( ex. 1은 하루, 7은 일주일)
  closeMainPopup();
}

// 쿠키를 조회하여 설정된 쿠키값이 N이 아닐 경우 팝업이 열린다.
function openAutoPopUp() {
  var cookieCheck = getCookie("popupYN");
  if (cookieCheck != "N") {
    openMainPopup();
  }
}

notToday.addEventListener('click', todayClosePopup);
openAutoPopUp();
