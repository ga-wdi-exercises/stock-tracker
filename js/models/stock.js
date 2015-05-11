var symbol = document.getElementById("symbol-input")
var symbolButton = document.getElementById("update-symbol")

function Stock(symbol) {
  this.symbol = symbol;
  this.numShares = 0;
}
  // your code to search the API and return a Stock object here

Stock.prototype = {
	findStock: function(){
		$.ajax({
			url: "http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol=" + symbol.value +"&callback",
			type: "GET",
			dataType: "jsonp",
			crossDomain: "true"
		}).done(function(response){
			// global variables, bad I know
			stockInfo = response;
			console.log(stockInfo);
			name = stockInfo.Name;
			price = stockInfo.LastPrice;
			// instantiate View class
			// var printStock = new StockView()
			// call render function with the argument stockInfo
			// printStock.render(stockInfo)
		}).fail(function(){
			console.log("ajax request for stock info didn't work")
		}).always(function(){
			console.log("at least it got here!")
		})
	},
	totalValue: function(){return this.price * this.numShares;}
}

// symbolButton.addEventListener("click", function(){Stock.findStock})