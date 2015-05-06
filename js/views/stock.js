// define your StockView here

// - `StockView`
//   - `model`: points to an instance of a Stock model.
//   - `render`: updates the HTML on the page to reflect the info of the associated stock model. The info is the price, companyName and totalValue.
//   - 'lookupSymbol': when the user enters a symbol, this should instantiate a new instance of a stock model and associate it with the `model` attribute of the view. It should then re-`render` the view.
//   - updateShares: when the user enters a number of shares, it should update the existing associated stock model, and then re-render the view

var StockView = function(model){
  this.model = model;
  this.render();
}

StockView.prototype = {
    render:function(stuff){
      model.innerHTML(stuff);
      console.log(this);
  }
}

var GOOGL = new StockView("google")
