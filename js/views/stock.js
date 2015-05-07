// define your StockView here
function StockView(){
  this.$el = $("#showStocks");
  this.model = {};

  this.render = function(){
    var priceHTML = document.createElement("h3"),
    companyNameHTML = document.createElement("h3"),
    companyValueHTML= document.createElement("h3");

    priceHTML.innerHTML = "PRICE:  $" + this.model.price;
    companyNameHTML.innerHTML = "Company Name: " + this.model.companyName;
    companyValueHTML.innerHTML = "Company Value: $" + this.model.totalValue();

    this.$el.empty();
    this.$el.append(priceHTML);
    this.$el.append(companyNameHTML);
    this.$el.append(companyValueHTML);
  };

  this.lookupSymbol = function(symbol){
    var newStock =  new Stock(symbol);
    this.model = newStock;
    this.render();
  };

  this.updateShares = function(shares){
     this.model.numShares = shares;
     this.render();

  }

}
