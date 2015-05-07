  /* - `Stock` Model
    - Your constructor function should work like `new Stock(symbol)` where symbol is something like 'AAPL'. It should use the 'symbol' property to lookup the correct stock from the 'data' provided.
    - `price`: the price of the stock from the data provided
    - `companyName`: the company name of the stock from the data provided
    - `numShares`: defaults to 0, but the value of this property may be updated by the view.
    - `totalValue`: returns the price * the number of shares.*/

  //Constructor function
  var Stock = function( ){
    this.companyName = "Company Name"
    this.numShares = "Number of Shares"
    this.price = "Price"
    this.symbol = "Symbol"
    this.totalValue = "Total Value"
  }

  Stock.prototype = {
    getAjaxResponse: function( symbolName ){
      console.log("this AJAX:", this)
      console.log("symbolName:",symbolName)
      var lookupURL = "http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol=" + symbolName
      $.ajax({
        url: lookupURL,
        type: "GET",
        context: this,
        dataType: "jsonp"
      }).done(function( response ){
        console.log("this DONE:", this)
        this.saveData(response);
        console.log("this DONE AFTER:", this)
        stockView.render()
      }).fail(function(){
        console.log("AJAX request was not successful")
      }).always(function(){
        console.log("this always happens!")
      })
    },
    updateShares: function( update ){
      this.numShares = update
      this.totalValue = this.price * this.numShares
    },
    saveData: function( response ){
      console.log("this:", this)
      this.symbol = response.Symbol
      this.price = response.LastPrice
      this.companyName = response.Name
      this.numShares = 0
      this.totalValue = this.price * this.numShares
      console.log("this:", this)

    }
  }
