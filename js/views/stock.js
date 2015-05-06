// define your StockView here
var StockView = function(){
	this.symbolButton = document.getElementById("new-stock-button")
	this.symbolInput = document.getElementById("new-stock-text")
	this.symbolButton.addEventListener("click", this.createStock.bind(this));
	this.sharesButton = document.getElementById("shares-updater-button")
	this.sharesInput = document.getElementById("shares-updater-text")
	this.sharesButton.addEventListener("click", this.updateStock.bind(this));
	this.stocks = document.getElementById("stocks")

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

		el.innerHTML = ("Name: " + this.stock.companyName + "<br> Price: $" +  this.stock.price.toFixed(2) +
		"<br> Number of shares: " + this.stock.numShares + "<br> Total Value: $" + this.stock.totalValue().toFixed(2));
	
		this.stocks.appendChild(el);
	}
}
