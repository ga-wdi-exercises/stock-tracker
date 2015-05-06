// instantiate a StockView

var symbolInput = document.querySelector('.symbol')
var numShares = document.querySelector('.number-of-shares')
var form = document.querySelector('form')

form.addEventListener('submit', function(event){
  event.preventDefault()
  var symbol = symbolInput.value
  var shares = numShares.value
  console.log(symbol, shares)
  var datum = Stock.lookup(symbol)
  if(datum){
    var stock = new Stock(datum, shares)
    var stockView = new StockView(stock)
  }
  else{
    alert('Not Found')
  }
})

var stock = new Stock(datum, numShares)

var stockview = new StockView(stock)
