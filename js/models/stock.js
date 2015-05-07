function Stock(symbol) {
  this.symbol = symbol;
  this.numShares = 0;

  var StockInstance = this

  // your code to search the API and return a Stock object here
  $.ajax({ url:("http://dev.markitondemand.com/api/v2/quote/jsonp?symbol="+symbol),
        method: "get",
        dataType: "jsonp",
        context: StockInstance  //this create the context for Stock
    }).done(function(response){
      StockInstance.companyName = response["Name"];
      StockInstance.price = response["LastPrice"];

      stockView.render();
});

}

Stock.prototype = {
  totalValue: function() { return this.price * this.numShares; }
}
