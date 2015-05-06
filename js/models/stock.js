function Stock(symbol){
  this.symbol = symbol.toUpperCase();
  this.numShares = 0;
  var stockURL = "http://dev.markitondemand.com/api/v2/quote/jsonp?symbol=" + symbol;
  $.ajax({
    url: stockURL, 
    method: "get",
    dataType: "jsonp",
    context: this
  }).done(function(data){
    console.log(this);
    console.log(data);
    console.log(data["Name"]);
    console.log(data["LastPrice"]);
    this.price = data["LastPrice"];
    this.companyName = data["Name"];
    stockView.render();
  });
};
Stock.prototype = {
  totalValue: function(){
    return this.numShares * this.price;
  }
};
