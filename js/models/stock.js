
// define your Stock model here

// define your Stock model here
function Stock(symbol){
  // this.name = name;
  this.symbol = symbol;
  this.numShares = 0;
  this.data = this.lookupStock();
  this.name = name;
  this.price = price;

}
  // your code to search the API and return a Stock object here
  // $(document).ready(function(){
  //   var stocksAPI = "http://dev.markitondemand.com/api/v2/quote/jsonp?symbol=" + symbol
  //   $.ajax({
  //     url: stocksAPI,
  //     type: "get",
  //     dataType: "jsonp",
  //     context: this
  //   }).done(function( response  ){
  //     $("#stock-name").append(response["Name"]);
  //     $("#stock-price").append(response["LastPrice"]);
  //     // StockView.render();
  //       console.log( response["Open"] )
  //   }).fail(function(){
  //     console.log("ajax request not successful")
  // })
  // })
  Stock.prototype = {
    totalValue: function() {
      return this.price * this.numShares;
      },
    lookupStock: function(){
        var stocksAPI = "http://dev.markitondemand.com/api/v2/quote/jsonp?symbol=" + this.symbol
      $.ajax({
        url: stocksAPI,
        type: "GET",
        dataType: "jsonp",
        context: this
      }).done(function( response ){
        $("#stock-name").append(response.Name);
        price = response.LastPrice;
        // console.log(response.LastPrice)
      }).fail(function(){
        alert("AJAX request Failed!")
      })
    },
    // totalValue: function( response ) { return this.price * this.numShares; }
  }


// Stock.prototype = {
//   totalValue: function( ) {
//     return this.price * this.numShares;
//   },
//   getStockSymbol: function ( symbol){
//     $(document).ready(function(){
//       var stocksAPI = "http://dev.markitondemand.com/api/v2/quote/jsonp?symbol=" + symbol
//         $.ajax({
//           url: stocksAPI,
//           type: "get",
//           dataType: "jsonp",
//           context: this
//         }).done(function( response ){
//           companyName = response.Name;
//           closingPrice = response.LastPrice;
//         }).fail(function(){
//           alert("AJAX Request Failed!")
//         })
//     }
//   }
// }
//




// function Stock(symbol) {
//   this.symbol = symbol;
//   this.numShares = 0;
//
//   for(var i=0; i < data.length; i++) {
//     if(data[i]["Symbol"] === symbol) {
//       this.price = data[i]["LastPrice"];
//       this.companyName = data[i]["Name"];
//     }
//   }
// }
//
// Stock.prototype = {
//   totalValue: function() { return this.price * this.numShares; }
// }

// Stock Model
//
// Your constructor function should work like new Stock(symbol) where
      // symbol is something like AAPL. It should use the symbol property to lookup the correct stock from the data provided.
// price: the price of the stock from the data provided
// companyName: the company name of the stock from the data provided
// numShares: defaults to 0, but the value of this property may be
      // updated by the view.
// totalValue: returns the price * the number of shares.

// var Stock = function(symbol){
// 	for(var i = 0; i < data.length; i++){
// 		if(data[i]["Symbol"] === symbol){
// 			this.price = data[i]["LastPrice"];
// 			this.companyName = data[i]["Name"];
//
// 		}
// 	}
// 	this.numShares = 0;
// }
// Stock.prototype = {
// 	totalValue: function(){
// 		return this.price * this.numShares
// 	}
// }
