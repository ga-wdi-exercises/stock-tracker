// define your StockView here


// - `StockView`
//   - `model`: points to an instance of a Stock model.
//   - `render`: updates the HTML on the page to reflect the info of the associated stock model. The info is the price, companyName and totalValue.
//   - 'lookupSymbol': when the user enters a symbol, this should instantiate a new instance of a stock model and associate it with the `model` attribute of the view. It should then re-`render` the view.
//   - updateShares: when the user enters a number of shares, it should update the existing associated stock model, and then re-render the view


var StockView = function(){
	this.symbolButton = document.getElementById("new_stock_button");
	this.symbolInput = document.getElementById("new_stock_text");
	this.symbolButton = addEventListener("click", this.createStock.bind(this));
	this.sharesButton = document.getElementById("shares_updater_button");
	this.sharesInput = document.getElementById("shares_updater_text");
	this.stocks = document.getElementId("stocks")
}

StockView.prototype = {
	createStock: function(event){
		this.stock = new Stock(this.symbolInput.value);
		console.log(this.stock);
		this.render;
	}
	updateStock: function(event){
		this.stock.numShares = this.sharesInput.value
		console.log(this.stock);
		this.render;
	}

	render: function(event){
		this.stocks.innerHTML = ""
		var el = document.createElement("div");
		el.innerHTML = ("Name: " + this.stock.companyName + "<br> Price: $" + this.stock.price.toFixed(2) +  "<br>Number of Shares :" + this.stock.numShares + "<br>totalValue: $" + this.stock.totalValue().toFixed(2));

		this.stocks.appendChild(el);
	}
}



// from working with Andrew:

// var StockView = function(stock){
// 	this.model = stock //this gives us access to the stock that we passed in as our argument
// 	this.el = document.querySelector(some-selector)  //this can select any element you want.  once that element has been selected, you can append to it whatever you want
// 	this.render()//any time you instantiate a new stock view you would call the render view
// 	for( var i = 0; i < this.stocks.length; i++ ){
//     console.log(key, value);
// 	};
// };
//   this.symbol = document.querySelector(symbol)
//   this.model = model
//   this.render()


//   Stockview.prototype ={
// 		render:function(){
// 			//i want the name of this object and i want to append it to this div
// 		}
// 		// block of code
// 	render: function(){
/