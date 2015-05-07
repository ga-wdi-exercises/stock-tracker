// define your StockView here

var StockView = function(stock){
  var stocks = document.querySelector('.stocks')
  stocks.innerHTML = ""
  var container = document.createElement('div')
  container.innerHTML = stock.name + ": $" + stock.totalValue
  stocks.appendChild(container)
}
//
// StockView.prototype = {
//   render: function(){
    // this.model.price
    // this.model.companyName etc...
    // nofrickingclueammiegetyershittogether
  // }
  // onClick here or on Stock?
// }
