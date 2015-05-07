// define your Stock model here
function Stock(symbol) {
  this.symbol = symbol;
  this.numShares = 0;
  this.name = name;




  this.fetchStock = function fetchStock(){
  	$.ajax({
		  	url: "http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol=" + symbol,
		  	method: "get",
		  	dataType: "jsonp"
		  }).done(function(response){
		  	// console.log(response)
		  	name = response.Name;
		  	// console.log(response.Name);
		  	price = response.LastPrice;
		  	console.log(price);
			}).fail(function(response){
				console.log("ajax failed to load")
		});
		}
	}


Stock.prototype = {
	totalValue: function() { return price * this.numShares; }
}