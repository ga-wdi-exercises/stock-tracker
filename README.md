## AJAX

Update your stock tracker to use real data from an API, Instead of using the `seeds.json` file.

If you’d like a fresh start, feel free to use the starter code provided in this branch:

    $ git remote add upstream git@github.com:ga-dc/stock-tracker.git
    $ git fetch upstream ajax
    $ git checkout -b w08d03 upstream/ajax

The Markit On Demand API provides a handy unauthenticated api:

http://dev.markitondemand.com/

`GET` requests generally look like this:

http://dev.markitondemand.com/api/v2/quote/json?symbol=aapl

Note the `/json`. This API returns XML by default, so you need to specify that you want JSON.

---

Your objects should be updated to incorporate the following functionalities:

- `stock`
  - `refresh`: Update the data currently being displayed with the most recent data from the API
  - `constructor`: Search the API for a user-input stock symbol and return its data

#### Bonus:

- Add functionality such that as a user begins to type the name or symbol of a stock, it searches for the complete name and symbol of the stock and makes suggestions. See: http://markitondemand.github.io/DataApis/LookupSample/

- Create a `portfolio` object:
  - The user can add a stock to their portfolio
  - The user can `show` all the stocks in their portfolio
    - Hint: Try using part of your HTML as a template, insert the values into it, and then use `.cloneNode()` on it: https://developer.mozilla.org/en-US/docs/Web/API/Node/cloneNode
  - The user can `refresh` all the stocks in their portfolio to get the most recent prices
  - The user can see the total value of all the stocks in their portfolio
