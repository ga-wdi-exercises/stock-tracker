var StockView = function(page){
	this.view = document.querySelector(page);
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
	document.querySelector("#found-shares-value").innerHTML = "Your total: $" + this.model.totalValue().toFixed(2);
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
	document.querySelector("#found-shares-value").innerHTML = "Your total: ?";
}
