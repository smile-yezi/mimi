// TODO:项目正式上线时，请删除此处的bootstrap检测工具及代码
// TODO:检测语法错误
(function () {
  var s = document.createElement("script");
  s.onload = function () {
    bootlint.showLintReportForCurrentDocument([]);
  };
  s.src = "js/bootlint.js";
  document.body.appendChild(s);
})();

$('.mask-container').hover(function(){
  $('.mask').animate({
    top:0
  },500);
},function(){
  $('.mask').animate({
    top:'75%'
  },500);
});