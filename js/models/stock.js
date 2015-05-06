// define your Stock model here
function Stock(symbol) {
  this.symbol = symbol;
  this.numShares = 0;
  Stock.lookup(symbol);
  this.name = name;
  // this.price = price
}
  // your code to search the API and return a Stock object here
 
  Stock.lookup = function( symbol){
  	$.ajax({
  		type: "GET",
  		dataType: "jsonp",
  		url: "http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol=" + symbol
  	}).done(function(pizza){
  		console.log(pizza)
  	name = pizza.Name;
  	price = pizza.LastPrice;
		}).fail(function(){
  		console.log("AJAX FAIL")
  	})
} 

Stock.prototype = {
  totalValue: function() { return price * this.numShares; }
}
