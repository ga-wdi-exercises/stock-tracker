// define your StockView here

var StockView = function(stock) {
	this.model = stock;
	this.el = document.querySelector("stock");
	this.render();
	this.symbolButton = document.getElementById("lookup-submit");
	this.symbolInput = document.querySelector("[name=lookup]")
	this.symbolButton.addEventListener("click", this.createStock.bind(this));
}

StockView.prototype = {
	render: function(){
		//idk!!!!
	},
	createStock: function(event){
		event.preventDefault();
		var stock = new Stock( this.symbolInput.value );
		console.log(stock);
	}

}