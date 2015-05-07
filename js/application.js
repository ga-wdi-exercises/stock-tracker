// instantiate a StockView

var newView = new StockView();

$(function(){
  $("#stockSymbol").on("submit", function(e){
    e.preventDefault();
    var symbol = $(this).find($("#search")).val(),
    shares = $(this).find($("#shares")).val();

    newView.lookupSymbol(symbol);
    if (shares) {
      newView.updateShares(shares)
    }
    //val returns value of the html element, a jquery method
    //$(this).find this jquerizes a non jquery thing and you can call jquery stuff on it
    //.on does the same thing as addEventListener but it is for jquery
  })
})
