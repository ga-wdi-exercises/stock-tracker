function Stock(symbol) {
  this.name = name;
  this.symbol = symbol;
  this.numShares = 0;

  

  // your code to search the API and return a Stock object here


};

Stock.prototype = {
	totalValue: function(){
		return price * this.numShares;
	},

	getSymbol: function(symbol) {
		$.ajax({
			url:"http://dev.markitondemand.com/api/v2/quote/jsonp?symbol=" + symbol,
			type: "GET",
			dataType: "jsonp",
		}).done(function(response){
			name = response.Name
			price = response.LastPrice
		}).fail(function(response){
			console.log("API :)")
		})
	}
}
