// define your StockView here
var StockView = function(stock){
	this.model = stock
	this.symbolButton = document.getElementById("stock")
    this.symbolInput = document.getElementById("symbol")
    // debugger;
    this.symbolButton.addEventListener("click", this.createStock.bind(this));
    this.sharesInput = document.getElementById()
	this.sharesButton.addEventListener("click", this.updateStock.bind(this));
    this.stocks = document.getElementById("stock")

}

StockView.prototype = {
	createStock: function(event){
		this.stock = new Stock(this.symbolInput.value)
		this.render()
	},

	updateStock: function(event){
		this.stock.numShares = this.sharesInput.value
		this.render()
	}


	render: function(){
        this.stocks.innerHTML = ""
        var el = document.createElement("div");

        el.innerHTML = ("Name: " + this.stock.companyName + "<br> Price: $" +  this.stock.price +
        "<br> Number of shares: " + this.stock.numShares + "<br> Total Value: $" + this.stock.totalValue());

        this.stocks.appendChild(el);
    }


}


// StockView.prototype = {
// 	render: function(){
// 		for(var i = 0; i <this.model.data.length; i++){
// 			var datas = document.createElement("div")
// 			datas.className = "stocks"
// 			datas.setAttribute("stocks", i)
// 			datas.innerHTML = this.model.data[i]
// 			datas.addEventListener("click", this.onClick (this))
// 			this.el.appendChild(datas)
// 		}

// 	}
// };

