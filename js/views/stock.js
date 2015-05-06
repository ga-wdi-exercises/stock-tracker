// define your StockView here
var StockView = function(){
	this.symbolButton = document.getElementById("lookup-submit")
	this.symbolInput = document.querySelector("[name=lookup]")
	this.symbolButton.addEventListener("click", this.createStock.bind(this));
	this.sharesButton = document.getElementById("shares-submit")
	this.sharesInput = document.getElementById("shares-input")
	this.sharesButton.addEventListener("click", this.updateStock.bind(this));
	this.stocks = document.getElementById("stocks")
}

StockView.prototype = {
	createStock: function(event){
		event.preventDefault();
		this.stock = new Stock( this.symbolInput.value );
		this.render();
	},
	updateStock: function(event){
		event.preventDefault();
		this.stock.numShares = this.sharesInput.value
		console.log(this.stock)
		this.render()
	},
	render: function(){
		this.stocks.innerHTML = ""
		el = document.createElement("div")
		el.innerHTML = ("Name: "+ this.stock.companyName + "<br> Price: $" + this.stock.price.toFixed(2) + "<br> No.Shares: " + this.stock.numShares + "<br>Total Value: $" + this.stock.totalValue().toFixed(2))
		this.stocks.appendChild(el);
	}
}