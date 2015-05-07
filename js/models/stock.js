// define your Stock model here
function Stock(symbol) {
  this.symbol = symbol;
  this.numShares = 0;
  this.name = name;


  // your code to search the API and return a Stock object here

  this.getStock = function getStock(){
    $.ajax({
      url: "http://dev.markitondemand.com/api/v2/quote/jsonp?symbol=" + symbol,
      method: "get",
      dataType: "jsonp"
    }).done(function(response){
      name = response.Name,
      price = response.LastPrice;
    })
  }

};

Stock.prototype = {
  totalValue: function() { return price * this.numShares; }
}
