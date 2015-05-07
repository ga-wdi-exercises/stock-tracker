// define your Stock model here
function Stock(symbol, callback) {
  this.symbol = symbol;
  this.numShares = 0;
  var url = 'http://dev.markitondemand.com/api/v2/quote/jsonp?symbol=' + symbol
  $.ajax({
    url: url,
    type: 'GET',
    dataType: 'jsonp',
    context: this
  }).done(function(response){
    for( var key in response ){
      if( response.hasOwnProperty( key ) ){
	this[key] = response[key] 
      }
    }
    callback( this )
  })
}

Stock.prototype = {
  totalValue: function() { return this.LastPrice * this.numShares; }
}
