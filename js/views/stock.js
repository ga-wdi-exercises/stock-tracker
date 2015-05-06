// define your StockView here

var StockView = function(){
	this.symbolButton = document.querySelector("#new-stock-button")
	this.symbolInput = document.querySelector("#new-stock-symbol")
	this.symbolButton.addEventListener("click", this.createStock.bind(this));
	this.sharesButton = document.querySelector("#shares-updater-button")
	this.sharesInput = document.querySelector("#shares-updater-symbol")
	this.sharesButton.addEventListener("click", this.updateStock.bind(this));
	this.stocks = document.querySelector("#stocks")

}

StockView.prototype = {
	createStock: function(event){

		this.stock = new Stock(this.symbolInput.value);
		console.log(this.stock);
		this.render();
	},
	updateStock: function(event){
		this.stock.numShares = this.sharesInput.value;
		console.log(this.stock);
		this.render();
	},
	render: function(){
		this.stocks.innerHTML = ""
		var el = document.createElement("div");

		el.innerHTML = ("Name: ", this.stock.companyName , "Price: $", this.stock.price.toFixed(2),
		"Number of shares: ", this.stock.numShares, "Total Value: $" , this.stock.totalValue().toFixed(2));
// parseINT()
		this.stocks.appendChild(el);
	}
}
