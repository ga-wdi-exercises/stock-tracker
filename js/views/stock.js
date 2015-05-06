// define your StockView here
var StockView = function (selector, model) {
	this.el = document.querySelector(selector);
	this.model = model;
	this.render();
}

StockView.prototype = {
	render: function(){
		document.querySelector("#name").innerHTML = "Company Name: " + this.model.companyName;
		document.querySelector("#price").innerHTML = "Price Per Share: $" + this.model.price;
		document.querySelector("#shares").innerHTML = "Number of Shares: " + this.model.numShares;
		document.querySelector("#value").innerHTML = "Total Cost of Shares: $" + this.model.totalValue;
		document.querySelector("#symbol-button").addEventListener("click", this.lookupSymbol.bind(this));
		document.querySelector("#shares-button").addEventListener("click", this.updateShares.bind(this));

	},
	lookupSymbol: function(){
		event.preventDefault();
		this.model = new Stock(document.querySelector("#symbol-text").value.toUpperCase());
		this.render();
	},
	updateShares: function(event){
		event.preventDefault();
		this.model.update(document.querySelector("#shares-text").value);
		this.render();
	}
}













