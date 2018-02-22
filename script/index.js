﻿$(document).ready(function () {
  window.setTimeout(function () {
    $(".loading").fadeOut(500)
  }, 400);
  if($("#slideBox").length)
  TouchSlide({
    slideCell: "#slideBox",
    titCell: ".hd ul",
    mainCell: ".bd ul",
    effect: "leftLoop",
    autoPage: true,
    autoPlay: true
  });
  var myScroll2;
  function loaded() {
    if ($("#scrllbox1")[0]) {
      myScroll2 = new iScroll('scrllbox1', {
          hScrollbar: false,
          vScrollbar: false,
          hScroll: false,
          onBeforeScrollStart: function (e) {
            var target = e.target;
            while (target.nodeType != 1)
              target = target.parentNode;
            if (target.tagName != 'SELECT' && target.tagName != 'INPUT' && target.tagName != 'TEXTAREA')
              e.preventDefault();
          },
          onScrollEnd: function () {}
        });
    }
  }
  setTimeout(loaded, 200);
  $(".sinpt").each(function () {
    $(this).sinpt();
  })
  $(".topnav a,.hot").ttFn();
  $(".banner").huxiFn({});
  $(".lunleft").lunleftFn({
    time: 15
  });
  $(".caijinsh").tiaodFn({
    num: 45256256.25,
    bianshu: 223330
  });
  $(".shu1").tiaodFn1({
    num: 125625658,
    bianshu: 223330
  });
  $(".shu2").tiaodFn1({
    num: 524656396,
    bianshu: 223330
  });
  $(".shu3").tiaodFn1({
    num: 148247,
    bianshu: 330
  });
  $(".shu4").tiaodFn1({
    num: 1552652352,
    bianshu: 223330
  });
  function animteehFn() {
    var oHeight = document.documentElement.clientHeight || document.body.clientHeight;
    var oWidth = document.documentElement.clientWidth || document.body.clientWidth;
    var sc = $(window).scrollTop();
    $(".animteeh").each(function () {
      if (sc + oHeight > $(this).offset().top + 150) {
        $(this).addClass("active")
      }
    });
    $(window).scroll(function () {
      var oWidth = document.documentElement.clientWidth || document.body.clientWidth;
      oHeight = document.documentElement.clientHeight || document.body.clientHeight;
      sc = $(window).scrollTop();
      $(".animteeh").each(function () {
        if (sc + oHeight > $(this).offset().top + 150) {
          $(this).addClass("active")
        }
      });
      $(".secton").each(function () {
        if (sc + oHeight > $(this).offset().top + 150) {
          $(this).addClass("active")
        }
      })
      if (oWidth < 610) {
        $(".anlilunt li").each(function () {
          if (sc + oHeight > $(this).offset().top + 150) {
            $(this).addClass("active")
          }
        })
      }
    });
  }
  animteehFn();
  $(".yh1").click(function () {
    $(this).siblings(".yh2").toggle();
  });
  $(".yohuqie a").click(function () {
    $(this).addClass("cur").siblings().removeClass("cur");
    var x = $(this).attr("datex");
    if (x == 0) {
      $(".youhuiul li").show();
    } else {
      $(".youhuiul li[datex=" + x + "]").show().siblings("li").hide();
    }
  });
  function getTime() {
    var nowDate = new Date(new Date().getTime() - 43200000),
    nY = nowDate.getFullYear(),
    nM = nowDate.getMonth() + 1,
    nD = nowDate.getDate(),
    nH = nowDate.getHours(),
    nMi = nowDate.getMinutes(),
    nS = nowDate.getSeconds();
    nM = nM < 10 ? '0' + nM : nM;
    nD = nD < 10 ? '0' + nD : nD;
    nH = nH < 10 ? '0' + nH : nH;
    nMi = nMi < 10 ? '0' + nMi : nMi;
    nS = nS < 10 ? '0' + nS : nS;
    var fullTime = nY + '-' + nM + '-' + nD + ' ' + nH + ':' + nMi + ':' + nS;
    $('#nowTime').text(fullTime);
  }
  getTime();
  setInterval(getTime, 1000);
  $(".nav li").hover(function () {
    $(this).find(".xiala").stop().slideDown(200)
  }, function () {
    $(this).find(".xiala").stop().slideUp(200)
  });
  $(".conen1qe li").hover(function () {
    $(this).addClass("cur").siblings().removeClass("cur");
    var x = $(this).index();
    $(".qiasmtb[dasme=" + x + "]").show().siblings(".qiasmtb").hide();
  });
})
