var data = [
    {
        "Status": "SUCCESS",
        "Name": "Apple Inc",
        "Symbol": "AAPL",
        "LastPrice": 128.7,
        "Change": 0,
        "ChangePercent": 0,
        "Timestamp": "Mon May 4 15:59:00 UTC-04:00 2015",
        "MSDate": 42128.6659722222,
        "MarketCap": 741444561000,
        "Volume": 3318886,
        "ChangeYTD": 110.38,
        "ChangePercentYTD": 16.5972096394274,
        "High": 130.55,
        "Low": 128.27,
        "Open": 129.58
    },
    {
        "Status": "SUCCESS",
        "Name": "Google Inc",
        "Symbol": "GOOGL",
        "LastPrice": 552.78,
        "Change": 1.62,
        "ChangePercent": 0.293925538863489,
        "Timestamp": "Mon May 4 15:59:00 UTC-04:00 2015",
        "MSDate": 42128.6659722222,
        "MarketCap": 188341543260,
        "Volume": 74680,
        "ChangeYTD": 530.66,
        "ChangePercentYTD": 4.16839407530246,
        "High": 556.61,
        "Low": 547.6,
        "Open": 550.1
    },
    {
        "Status": "SUCCESS",
        "Name": "Microsoft Corp",
        "Symbol": "MSFT",
        "LastPrice": 48.24,
        "Change": 0,
        "ChangePercent": 0,
        "Timestamp": "Mon May 4 15:59:00 UTC-04:00 2015",
        "MSDate": 42128.6659722222,
        "MarketCap": 390241098000,
        "Volume": 2875552,
        "ChangeYTD": 46.45,
        "ChangePercentYTD": 3.85360602798708,
        "High": 48.86,
        "Low": 48.18,
        "Open": 48.41
    },
    {
        "Status": "SUCCESS",
        "Name": "3M Co",
        "Symbol": "MMM",
        "LastPrice": 159.05,
        "Change": 0.0300000000000011,
        "ChangePercent": 0.0188655515029563,
        "Timestamp": "Mon May 4 15:59:00 UTC-04:00 2015",
        "MSDate": 42128.6659722222,
        "MarketCap": 100891936050,
        "Volume": 153090,
        "ChangeYTD": 164.32,
        "ChangePercentYTD": -3.20715676728334,
        "High": 159.85,
        "Low": 158.12,
        "Open": 158.12
    },
    {
        "Status": "SUCCESS",
        "Name": "Twitter Inc",
        "Symbol": "TWTR",
        "LastPrice": 37.89,
        "Change": 0.00999999999999801,
        "ChangePercent": 0.0263991552270275,
        "Timestamp": "Mon May 4 15:59:00 UTC-04:00 2015",
        "MSDate": 42128.6659722222,
        "MarketCap": 24794496090,
        "Volume": 1394555,
        "ChangeYTD": 35.87,
        "ChangePercentYTD": 5.63144689155284,
        "High": 38.96,
        "Low": 37.56,
        "Open": 38.7
    },
    {
        "Status": "SUCCESS",
        "Name": "Facebook, Inc.",
        "Symbol": "FB",
        "LastPrice": 78.81,
        "Change": -0.179999999999993,
        "ChangePercent": -0.227876946448908,
        "Timestamp": "Mon May 4 15:59:00 UTC-04:00 2015",
        "MSDate": 42128.6659722222,
        "MarketCap": 221317079160,
        "Volume": 839079,
        "ChangeYTD": 78.02,
        "ChangePercentYTD": 1.01256088182518,
        "High": 79.69,
        "Low": 78.64,
        "Open": 79.28
    }
];

// define your Stock model here

var Stock = function(stock_search) {
  var self = this;
  // console.log("hello");

//var Stock = function(datum, numShares) {
// this.price = datum.LastPrice
// this.name = datum.name
// this.numShares = numShares
// this.symol = datum.Symbol
// this.totalvalue=this.price*this.numShares
//
//for(var i =0;i<data.length;i++){
//  var datum = data[i]
//    if( symbol === stock.Symbol){
//    return new Stock(datum)
//}
//}
// BELOW GOES IN VIEW JS MODEL FILE
//form.addEventListener("submit",function(){
//   event.preventDefault()
//   var symbol = symbolInput.value
//   var shares =  numShares.value
// var datum = Stock.lookup(symbol)
//  if(datum){
//  var stock = new Stock(datum,shares)
//  var stockView = new StockView(stock)
//}
//else P
// alert("Not Found")
//}
//}

//API invalidates below
  // data.forEach( function(stock) {
  //   // console.log("Symbol equals")
  //   // console.log(stock["Symbol"])
  //   if (stock_search.toUpperCase() === stock["Symbol"]) {
  //     // console.log("match");
  //     self.symbol = stock["Symbol"]
  //     // The info is the price, companyName and totalValue.
  //     self.price = stock["LastPrice"]
  //     self.companyName = stock["Name"]
  //     // console.log(self.companyName)
  //     self.totalValue = stock["MarketCap"]
  //     // break;
  //   }
  //
  // });

}

//API OUTPOUT



Stock.lookupAPI =  function() {
  var self = this
  console.log("Starting");

    var stockapiv2 = "http://dev.markitondemand.com/Api/v2/Lookup/jsonp?symbol="+newStockText
    symbol = symbol.toUpperCase();
    $.ajax({
      url: stockapiv2,
      type: 'GET',
      dataType:'json',
      context = self }).done(function(response){
        self.price = response.LastPrice;
        self.name = response.Name;
      }).fail(function(){
        console.log("FAIL");
      }).always(function(){
        console.log("ELSE");
      })
    };






// Stock.Fetch = function(stockSymbol) {
  // loadCards: function(response) {
  //   this.cards = [];
  //   for(var i = 0; i < response.length; i++){
  //     var card = new Card(response[i].id, response[i].description, response[i].completed);
  //     this.cards.push(card);
  //   }
  // }

}

//   [
//     {
// 	"Symbol":"NFLX",
// 	"Name":"Netflix Inc",
// 	"Exchange":"NASDAQ"
//     }
// ]
