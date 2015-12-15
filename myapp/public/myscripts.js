$(document).ready(function () {
  $("img").click(function () {
    var randomNumber = Math.floor(Math.random() * dummybase.length);
    var rander = dummybase[randomNumber].user;
    var randtext = dummybase[randomNumber].fortune;
    $('#fortunediv').hide().html(randtext).fadeIn('slow');
    $("#runner").prepend('<li class= runneritem>' + randtext + '</br>');
  });

  $('#fortuneAdder').click(function () {
    var name = $("#inputname").val();
    var fortune = $("#inputfortune").val();
    dummybase.push({ fortune: fortune, user: name });
    $("form").trigger("reset");
    $("#cookie-total").hide().html('Cookie Added').fadeIn('slow');
  });

  $("#runnerholder").on("click", ".runneritem", function (event) {
    var bigNums = String(Math.floor(Math.random() * 75)) + '-' + String(Math.floor(Math.random() * 75)) + '-' + String(Math.floor(Math.random() * 75)) + '-' + String(Math.floor(Math.random() * 75)) + '-' + String(Math.floor(Math.random() * 75)) + '-' + String(Math.floor(Math.random() * 75)) + '-';
    var lottNums = bigNums + String(Math.floor(Math.random() * 15)+1);
    $(this).hide().html(lottNums).fadeIn('slow').addClass('lottery-Numbers').removeClass('runneritem');
  });

  $("#fortunediv").on("click", function (event) {
    var randomdict = Math.floor(Math.random() * chineseDictonary.length);
    var randeng = chineseDictonary[randomdict].english;
    var randchi = chineseDictonary[randomdict].chinese;
    var randpro = chineseDictonary[randomdict].pronunciation;
    $('#fortunediv').hide().html(randeng+'</br>'+randchi+'  '+randpro).fadeIn('slow');
  });

  var obj = document.createElement("audio");
  obj.src = "images/snap.mp3";
  obj.volume = 0.10;
  obj.autoPlay = false;
  obj.preLoad = true;

  $("img").click(function () {
    obj.play();
  });

  $("#runnerholder").on("click", ".lottery-Numbers", function (event) {
    $(this).hide();
  });

});





