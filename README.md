# Create a Stock Portfolio Tracker

## Object-Oriented Javascript

Today we're going to be writing a single page app to practice good Object Oriented
practices in JS.

Using the `data` variable included in `models/stock.js` to supply data, create a webpage for managing a stock portfolio.

Your app should have the following constructors (and associated prototypes) as necesary:


- `StockView`
  - `model`: points to an instance of a Stock model.
  - `render`: updates the HTML on the page to reflect the info of the associated stock model. The info is the price, companyName and totalValue.
  //- 'lookupSymbol': when the user enters a symbol, this should instantiate a new instance of a stock model and associate it with the `model` attribute of the view. It should then re-`render` the view.
//  - updateShares: when the user enters a number of shares, it should update the existing associated stock model, and then re-render the view

- `Stock` Model
  //- Your constructor function should work like `new Stock(symbol)` where symbol is something like 'AAPL'. It should use the 'symbol' property to lookup the correct stock from the 'data' provided.
//  - `price`: the price of the stock from the data provided
//  - `companyName`: the company name of the stock from the data provided
//  - `numShares`: defaults to 0, but the value of this property may be updated by the view.
//  - `totalValue`: returns the price * the number of shares.

## Getting started

Write out the bare-minimum HTML you'd need for this app to work -- don't touch any CSS yet! Put in enough `<input>` fields to account for the different kinds of user input you'll need.

Then define your model, and test that you can create a new instance given a symbol, and that
it has the approprate functionality (price, totalValue, etc).

Then define your view, and test it's functionality in small pieces (i.e. make it render based on the associated model, then try having it update its model, etc).

Finally, add some style to make it look nicer!

## Can I use jQuery?

Sure!
