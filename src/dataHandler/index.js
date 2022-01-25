const moment = require('moment');

/**
 * A method that receives an array of trades and dates and returns an object where
 * for each date we have the total volume of all the active trades for that day.
 *
 * @param {Array} trades An array of 'trade' objects each holding the trade data.
 */
// TODO
const convertData = (trades = []) => {
  const result = {};
  const smallest_start = trades.sort((a, b) => a.startDate - b.startDate)[0].startDate;
  const greatest_end = moment.utc(trades.sort((a, b) => b.endDate - a.endDate)[0].endDate);

  greatest_end.add(1, 'days');
  let loop_start = moment.utc(smallest_start);

  while (loop_start.isBefore(greatest_end)) {
    let volumes = 0;

    trades.forEach((trade) => {
      const tmp_start = moment.utc(trade.startDate).add(-1, 'days');
      const tmp_end = moment.utc(trade.endDate).add(1, 'days');

      if (loop_start.isBetween(tmp_start, tmp_end)) {
        volumes += trade.volume;
      }
    });

    result[loop_start.format('DD/MM/YYYY')] = volumes;
    loop_start.add(1, 'days');
  }

  return result;
};

module.exports = {
  convertData,
};
