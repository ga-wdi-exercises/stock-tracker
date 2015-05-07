// // define your StockView here
// // - `StockView`
// //   - `model`: points to an instance of a Stock model.
// //   - `render`: updates the HTML on the page to reflect the info of the associated stock model. The info is the price, companyName and totalValue.
// //   - 'lookupSymbol': when the user enters a symbol, this should instantiate a new instance of a stock model and associate it with the `model` attribute of the view. It should then re-`render` the view.
// //   - updateShares: when the user enters a number of shares, it should update the existing associated stock model, and then re-render the view

var StockView = function( stockModel ){
  this.stockModel = stockModel
  this.render()

  var lookupField = $("#lookup")
  var lookupButton = $("#lookupButton")

  lookupButton.on("click", function( event ){
    event.preventDefault()
    stockView.addNewStock()

    var symbol = lookupField.val()
    stockView.stockModel.getAjaxResponse(symbol)
  })


  var updateField = $("#update")
  var updateButton = $("#updateButton")

  updateButton.on("click", function( event ){
    event.preventDefault()
    var numOfStocks = parseFloat(updateField.val())
    stockView.stockModel.updateShares(numOfStocks)
    // var stockView = new StockView( stock )
    stockView.render()
  })

  // <button id="refresh">Refresh</button>
  var refreshButton = $("#refresh")
  refreshButton.on("click", function( event ){
    event.preventDefault()
    var symbol = stockView.stockModel.symbol
    stockView.stockModel.getAjaxResponse(symbol)
  })

  // <button id="potfolio">Add to Portfolio</button>
  var portfolioButton = $("#portfolio")
  portfolioButton.on("click", function( event ){
    event.preventDefault()
    console.log("stockView.stockModel:", stockView.stockModel.companyName)
    var stock = stockView.stockModel
    portfolioModel.stocks.push( stock )
  })


}

StockView.prototype = {
  render: function(){
    $("#symbol").html(this.stockModel.symbol)
    $("#price").html(this.stockModel.price)
    $("#compName").html(this.stockModel.companyName)
    $("#value").html(this.stockModel.totalValue)
  },
  addNewStock: function(){
    stockModel = new Stock( )
    stockView = new StockView( stockModel )
  }


}
