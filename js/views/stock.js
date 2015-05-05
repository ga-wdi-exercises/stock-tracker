var stockView = function (){
  this.symbolButton = document.getElementById("new-stock-button")

  this.symbolInput = document.getElementById("new-stock-text")

  this.symbolButton.addEventListener("click", this.createStock.bind(this));

  this.sharesButton = document.getElementById("shares-updater-button")

  this.sharesInput.addEventListener("click",  this.updateStock.bind(this));

  this.stocks = document.getElementById("stocks")

}

StockView.protype = {
  createStock: function(event){

    this.stock = new Stock(this.symbolInput.value);
    console.log(this.stock);
  },

    updateStock: function(event){
      this.stock.numShares = this.sharesInput.value;
      console.log: function(this.stock);
      this.render().(this);

    },
    render: function(){
      this.stocks.innerHTML = ""
      var el = document.createElement("div");
      el.innerHTML = "name" + this.stock.companyName + "<br>Price: $"+ this.stock.price +
      "<br>Number of shares:" this.stock.numShares);

      this.stocks.appendChild(el);
    }
}
