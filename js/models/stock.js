function Stock(symbol) {
  this.symbol = symbol;
  this.numShares = 0;


  // your code to search the API and return a Stock object here

}


Stock.prototype = {
  totalValue: function(){
  	return this.price * this.numShares;
  },
  refresh: function(){
  	var markitondemandUrl = "http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol=" + this.symbol;
		return $.ajax({
			url: markitondemandUrl,
			type: "GET",
			dataType: "jsonp",
	    context: this
		}).done(function(response){
			this.companyName = response["Name"];
			this.price = response["LastPrice"];
		});
		// .done(function(response){
		// 	console.log("working")
		// 	console.log(response)
		// });
			// stockView.render()
		// }).fail(function(response){
		// 	console.log()
		// 	console.log(response)
		// }).always(function(){
		// 	console.log("this always happens!")
		// });
  }
}