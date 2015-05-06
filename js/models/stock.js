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
function Stock(symbol) {
  this.symbol = symbol;
  this.numShares = 0;

  for(var i=0; i < data.length; i++) {
    if(data[i]["Symbol"] === symbol) {
      this.price = data[i]["LastPrice"];
      this.companyName = data[i]["Name"];
    }
  }
}

Stock.prototype = {
  totalValue: function() { return this.price * this.numShares; }
}
