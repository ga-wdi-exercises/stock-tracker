function Stock(symbol) {
  this.symbol = symbol;
  this.numShares = 0;
  this.price = symbol.LastPrice;
  this.companyName = symbol.companyName;
  // your code to search the API and return a Stock object here
  $.ajax({
  	url: "http://dev.markitondemand.com/api/v2/quote/jsonp?symbol=" + symbol,
  	method: "get",
  	dataType: "jsonp",
  	context: this
  }).done(function(data){
  	this.price = data.LastPrice;
  	this.companyName = data.Name;
  	stockView.render();
  });
}

Stock.prototype = {
  totalValue: function() { return this.price * this.numShares; }
}

