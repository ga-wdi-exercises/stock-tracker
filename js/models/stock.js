// define your Stock model here
function Stock(symbol){
  this.symbol = symbol;
  this.numShares = 0;
}

Stock.prototype = {
  totalValue: function(){
    return this.price * this.numShares;
  },
  refresh: function(){
    return $.ajax({
      url: "http://dev.markitondemand.com/api/v2/quote/jsonp?symbol=aapl",
      dataType: "jsonp",
      context: this
    }).done(function(data){
      this.companyName = data["Name"];
      this.price = data["LastPrice"];
    });
  }
}
