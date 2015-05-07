// define your Stock model here
function Stock(symbol) {
  this.symbol = document.getElementsByTagName("Symbol");
  this.numShares = 0;
  this.name = document.getElementsByTagName("Name");
  this.price = document.getElementsByTagName("LastPrice");

  // your code to search the API and return a Stock object here

}

Stock.prototype = {
  totalValue: function() {
    return this.price * this.numShares;
    },

  fetchName: function(callback) {
    $.ajax({
      type: "GET",
      dataType: "json",
      url: "http://dev.markitondemand.com/Api/v2/Quote/Name"
    }).done(function(response) {
      stockModel.loadStock(response);
      stockModel.render();
    }).fail(function(response){
      console.log("js failed to load")
    })
  },
  loadStock: function(response) {
    this.Stock = [];
    for(var i = 0; i < response.length; i++) {
      var Stock = new Stock(response[i].completed);
      this.stocks.push(card);
    }
  }
}
