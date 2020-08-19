
function copy(copyId) {
  const $inp=$("<input>");
  $("body").append($inp);
  $inp.val($(""+copyId).text()).select();
  document.execCommand("copy");
  $inp.remove();
  $(".get-started__copied").fadeIn(500, function(){
    $(".get-started__copied").fadeOut();
  });
}

$(document).ready(function(){
  $("#copy-button").click(
    function(){
      copy('#text-to-copy');
    });
});