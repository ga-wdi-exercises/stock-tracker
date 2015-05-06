// define your StockView here
var StockView = function(stock){
	this.model = stock; //gives us access to the argument we passed in
	// this.el = document.querySelector(some selector) //this is where you tell it where you want to see this being rendered in the html - the selector is for a DOM element
	this.render();
}

StockView.prototype = {
	render: function(){
		var displayBox = document.getElementById("display")

		var stocksymbol = document.querySelector(".stocksymbol")
		var price = document.querySelector(".price")
		var shares = document.querySelector(".shares")
		var totalValue = document.querySelector(".total-value")

		stocksymbol.innerHTML = this.symbol
		price.innerHTML = this.price
		shares.innerHTML = this.shares
		totalValue.innerHTML = this.totalValue
	}
}