// // define your StockView here
// // - `StockView`
// //   - `model`: points to an instance of a Stock model.
// //   - `render`: updates the HTML on the page to reflect the info of the associated stock model. The info is the price, companyName and totalValue.
// //   - 'lookupSymbol': when the user enters a symbol, this should instantiate a new instance of a stock model and associate it with the `model` attribute of the view. It should then re-`render` the view.
// //   - updateShares: when the user enters a number of shares, it should update the existing associated stock model, and then re-render the view

  var StockView = function( stockModel ){
    this.stockModel = stockModel
    this.render()

    var lookupForm = $("#lookupForm")
    var lookupField = $("#lookup")
    var lookupButton = $("#lookupButton")

    lookupButton.on("click", function( event ){
      event.preventDefault()
      var symbol = lookupField.val()
      console.log("stockView.stockModel BEFORE AJAX: ",stockView.stockModel)

      stockView.stockModel.getAjaxResponse(symbol)
      console.log("stockView.stockModel AFTER AJAX: ",stockView.stockModel)
      stockView.render()
    })


  }

  StockView.prototype = {
    render: function(){
      console.log("render")
      console.log(this.stockModel.symbol)
      console.log(this.stockModel.price)
      console.log(this.stockModel.companyName)
      console.log(this.stockModel.totalValue)

      /*PROBLEM: Text flashes on screen but then disappears */
      $("#symbol").html(this.stockModel.symbol)
      $("#price").html(this.stockModel.price)
      $("#compName").html(this.stockModel.companyName)
      $("#value").html(this.stockModel.totalValue)
    }
  }


  var updateForm = $("#updateShares")
  var updateField = $("#update")
  var updateButton = $("#updateButton")

  updateButton.on("click", function(){
    console.log(lookupField.val())
    console.log(updateField.val())
    var stock = new Stock( lookupField.val() )
    stock.updateShares(updateField.val())
    var stockView = new StockView( stock )
    stockView.render()
  })
