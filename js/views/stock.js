// define your StockView here
// define your StockView here
function StockView() {
  $('#update-symbol').on('click', this.lookupSymbol.bind(this));
  $('#update-shares').on('click', this.updateShares.bind(this));
}

StockView.prototype = {
  lookupSymbol: function() {
    var symbol = $("#symbol-input").val();
    this.model = new Stock(symbol);
    this.model.lookupStock(symbol);
    this.render();
  },

  updateShares: function() {
    this.model.numShares = parseInt($('#num-shares').val());
    this.render();
  },

  render: function() {
    $("#stock-name").text(this.model.companyName);
    $("#stock-price").text(this.model.sharePrice);
    $("#total-value").text(this.model.totalValue());
    $("#stock-name").text(name);
    $("#stock-price").text(price);
  }
}

// var StockView = function(){
// 	this.symbolButton = document.querySelector("#new-stock-button")
// 	this.symbolInput = document.querySelector("#new-stock-symbol")
// 	this.symbolButton.addEventListener("click", this.createStock.bind(this));
// 	this.sharesButton = document.querySelector("#shares-updater-button")
// 	this.sharesInput = document.querySelector("#shares-updater-symbol")
// 	this.sharesButton.addEventListener("click", this.updateStock.bind(this));
// 	this.stocks = document.querySelector("#stocks")
//
// }
//
// StockView.prototype = {
// 	createStock: function(event){
//
// 		this.stock = new Stock(this.symbolInput.value);
// 		console.log(this.stock);
// 		this.render();
// 	},
// 	updateStock: function(event){
// 		this.stock.numShares = this.sharesInput.value;
// 		console.log(this.stock);
// 		this.render();
// 	},
// 	render: function(){
// 		this.stocks.innerHTML = ""
// 		var el = document.createElement("div");
//
// 		el.innerHTML = ("Name: ", this.stock.companyName , "Price: $", this.stock.price.toFixed(2),
// 		"Number of shares: ", this.stock.numShares, "Total Value: $" , this.stock.totalValue().toFixed(2));
// // parseINT()
// 		this.stocks.appendChild(el);
// 	}
// }
