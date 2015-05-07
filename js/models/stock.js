// define your Stock model here
function Stock(symbol) {
  this.symbol = symbol;
  this.numShares = 0;
  $.ajax({
      url: "http://dev.markitondemand.com/api/v2/quote/jsonp?symbol=" + this.symbol,
      type: "get",
      dataType: "jsonp",
      context: this
    }).done(function(response){
      document.querySelector("#stock-price").innerHTML = response.LastPrice;
      this.price = response.LastPrice;
      document.querySelector("#stock-name").innerHTML = response.Name;
      this.companyName = response.Name;
    })
}

Stock.prototype = {
  getPrice: function() { return this.price; },
  getName: function() {return this.companyName; },
  totalValue: function() { 
    console.log(this);
    return this.price * this.numShares; }

}
