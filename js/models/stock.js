// define your Stock model here
function Stock(symbol) {
  this.symbol = symbol;
  this.numShares = 0;
  this.name = name;
}

Stock.prototype = {
  fetchStock: function(){
    $.ajax({
      url: "http://dev.markitondemand.com/api/v2/quote/jsonp?symbol=" + this.symbol + "",
      method: "get",
      dataType: "jsonp"
    }).done(function(response){
      name = response.Name;
      price = response.LastPrice;
      console.log(name);
      console.log(price);
    });
  },

  totalValue: function() { return price * this.numShares; }
}
