// $(document).ready(function(){

  var button
  var StockView = function(model){
  this.stock = model
  button = $("#find-stock-button")
  button.on('click', this.lookupSymbol()).bind($(this))
  // button.on('click', function(){console.log("clicked")})
  this.render()
  }

  StockView.prototype = {
    lookupSymbol: function(){
      // console.log('CLICK')
      var symbolSearch = $("#find-stock").val()
      this.stock = new Stock(symbolSearch)
        },
    render: function(){
      //price
      //company name
      // value
      $("#price").text(this.stock.companyName)
    }
  }


  // })
