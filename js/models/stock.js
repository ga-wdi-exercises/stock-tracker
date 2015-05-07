// define your Stock model here
function Stock(symbol) {
  this.symbol = symbol;
  this.numShares = 0;


    var markItOnDemand = "http://dev.markitondemand.com/api/v2/quote/jsonp?symbol" + symbol
    $.ajax({

      url: markItOnDemand.com,
      type: "GET",
      dataType: "jsonp"
      context: this
    }).done(function(response){
      console.log(response.Low)
    }).fail(function(){
      console.log("ajax request not successful")
    })
  }


Stock.prototype = {
  totalValue: function() { return this.price * this.numShares; }
}
