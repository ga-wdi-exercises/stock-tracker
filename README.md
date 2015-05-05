# Create a Stock Portfolio Tracker

## Object-Oriented Javascript

Using the `data` variable included in `index.html` to supply data, create a webpage for managing a stock portfolio. To start, we'll use the mock data provided in the `seeds.json` file.

Create constructor functions for the two objects below, and add the associated methods to object's prototype. You can add methods and properties as necessary!

- `interface`
  - `lookup`: Search the data for a user-input stock symbol and retrieve its data
- `stock`
  - `display`: Display the information about the given stock
  - `calculate`: Calculate the total value of a user-input number of shares in this stock
- `portfolio`
  - `display`: Display the information about all stocks included in the data 
  - `calculate`: Calculate the total value of all stocks for which the user has input a number of shares
