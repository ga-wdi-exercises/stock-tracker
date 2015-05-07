// define your Stock model here
function Stock(symbol) {
    this.companyName = symbol.Name;
    this.price =symbol.LastPrice;
    this.numShares = 0;
    this.symbol = symbol.Symbol;

  // your code to search the API and return a Stock object here

}

Stock.prototype = {
  totalValue: function() { return this.price * this.numShares; }
}
Stock.findBySymbol = function(symbol, callback){
    console.log('boop', symbol)
    $.ajax({
        type: 'GET',
        url: 'http://dev.markitondemand.com/api/v2/quote/jsonp?symbol='+symbol,
        dataType: 'jsonp',
        context: this
    }).done(function(response){
        console.log(response);
        var stock = new Stock(response);
        callback(stock);
    }).fail(function(response){
        console.log("error", response);
        callback(null);
    })
}
