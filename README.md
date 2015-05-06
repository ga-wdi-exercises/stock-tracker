## AJAX

Update your stock tracker to use real data from an API, Instead of using the `seeds.json` file.

The Markit On Demand API provides a handy unauthenticated api:

http://dev.markitondemand.com/

`GET` requests generally look like this:

http://dev.markitondemand.com/api/v2/quote/json?symbol=aapl

Note the `/json`. This API returns XML by default, so you need to specify that you want JSON.

---

Your objects should be updated to incorporate the following functionalities:

- `stock`
  - `refresh`: Update the data currently being displayed with the most recent data from the API
- `portfolio`
  - `add`: Add a stock to an array of stocks, held in-memory (no using databases yet!)
  - `refresh`: Refresh the data for all stocks in the portfolio array

#### Bonus:

- Add functionality to `interface` such that as a user begins to type the name or symbol of a stock, it searches for the complete name and symbol of the stock and makes suggestions. See: http://markitondemand.github.io/DataApis/LookupSample/
