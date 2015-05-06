// instantiate a StockView
var stock = new Stock("AAPL");
var stockView = new StockView(".results", stock);

$(document).ready(function(){
  function marquee(){
    footerText = $(".marquee")
    moveTicker = 0;
    footerText[0].innerHTML = ""
    for (var i = 0; i < data.length; i++) {
      footerText[0].innerHTML += data[i].Symbol + "  $" + data[i].LastPrice + "  ";
    };
    setInterval( function() {
    if (moveTicker > 475){
      footerText[0].style.paddingLeft = 0;
      moveTicker = 0;
    }
      footerText[0].style.paddingLeft = moveTicker + "px";
      moveTicker += 10;
    }, 250);
  }

  marquee();
});