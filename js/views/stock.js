// define your StockView here

// output company-name (id: company-name)
// output company-price (id: company-price)
// output share-value (id: share-value)

var StockView = function(page){
	this.view = document.querySelector(page);
	// this.model = stock;
	// this.el = document.querySelector(page);
	// this.render(); //any time you instantiate, rendered immediately (defined in proto)
	this.initialize();
	this.updateShares();

}

StockView.prototype.initialize = function(){
	document.getElementById("find-symbol").addEventListener("submit", this.submitEventHandler.bind(this));
}

StockView.prototype.updateShares = function(){
	document.getElementById("find-shares").addEventListener("submit", this.submitEventHandlerShares.bind(this));
}

StockView.prototype.submitEventHandlerShares = function(event){
	event.preventDefault();
	var sharesValue = parseInt(document.getElementById("new-number-shares-text").value);
	console.log("updating shares", sharesValue);
	this.sharesMath(sharesValue);
}

StockView.prototype.sharesMath = function(sharesValue){
	this.model.updateShares(sharesValue);
	console.log(this.model.totalValue());
}

StockView.prototype.submitEventHandler = function(event){
		event.preventDefault();
		var symbolValue = document.getElementById("new-symbol-text").value;
		this.lookupStock(symbolValue);
}

StockView.prototype.lookupStock = function(symbolValue){
	this.model = new Stock(symbolValue);
	document.querySelector("#found-name").innerHTML = this.model.name;
	document.querySelector("#found-price").innerHTML = "$" + this.model.price; + " per stock";
	var sharesValueAmount = this.model.totalValue();
	document.querySelector("#found-shares-value").innerHTML = "$" + sharesValueAmount + " your value";
	console.log(this.model);
	console.log(this.model.totalValue());
}
