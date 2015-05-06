// define your StockView here
var StockView = function(symbol){
  this.model = new Stock(symbol);
  this.render();
}

StockView.prototype = {
  render: function(){
    document.getElementById("company_name").innerText = this.model.companyName;
    document.getElementById("price").innerText = this.model.price;
  }
}
