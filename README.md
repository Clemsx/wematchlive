# Welcome

For any questions please don't hesitate to contact:

1. Elie - elie@wematch.live
2. Yaacov - yaacov@wematch.live, +972-54-4379928


## Goal

The frontend team needs to display the total volume of all trades per day.
They have asked to receive an object where the keys are the dates and the values are the total volume for that date.

Your task is to create a data handler that runs as efficiently as possible, and stores the data for each date in MongoDB.
A trade is done between two counter parties and has a date where the trade started, when the trade will end (a trade in this context goes on for a certain number of days. Similar to a contract / lease) and many other parameters. One of them is the volume (or size) of the trade. 
The parameters we need for this exercise are `startDate`, `endDate` & `volume`.

## API

### Public Router
This router receives the data that should be processed by the data handler.
Upon receiving the data, the handler should be activated.

### Protected Router
This router should be protected by a middleware.
This middleware verifies that the user sending the request is allowed to access the data. To achieve that it uses the request's header.

Furthermore, this router is used to query data within a given date range.
The date range is taken from the query string and is then used to query MongoDB.

## Data Handler

You are given an array of data objects, each containing:

1. volume
2. start date of the trade.
3. end date of a trade

All dates are in the following format: DD/MM/YYYY.

## ENV file

The `.env` file should include (at least) these lines:
You are encouraged to use the sampleData folder for development.


```
PORT=8087
MONGO_URL=mongodb://mongo:27017/
```
