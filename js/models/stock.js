// define your Stock model here
function Stock(symbol) {
  this.symbol = symbol;
  this.numShares = 0;

  // your code to search the API and return a Stock object here
    $.ajax({
      url: "http://dev.markitondemand.com/api/v2/quote/jsonp?symbol=" + symbol,
      method: "get",
      dataType: "jsonp",
      context: this
    }).done(function(data){
      $("#stock-name").append(data["Name"]);
      $("#stock-price").append(data["LastPrice"]);
    });

}

Stock.prototype = {
  totalValue: function() { return this.price * this.numShares; }
  // $("#total-value").append(totalValue);
}
