const mongoose = require('mongoose');
const moment = require('moment');
const { convertData } = require('../dataHandler/index');

const volumeDataModel = require('./models/volumeDataModel');

// TODO
const insertVolumeDataToMongo = async (datas) => {
  const trades = datas.map((data) => {
    
    return new volumeDataModel({
      startDate: moment.utc(data.startDate, 'DD/MM/YYYY'),
      endDate: moment.utc(data.endDate, 'DD/MM/YYYY'),
      volume: data.volume,
    });
  });

  trades.forEach((trade) => {
    try {
      trade.save((err, data) => {
        if (err) return console.log(err);
      });

    } catch (err) {
      console.log(err);
    }
  });

  return {
    code: 201,
    message: 'Data inserted in mongoDB'
  };
};

// TODO
const getDataForDateRange = async (startDate, endDate) => {

  const start = moment.utc(startDate, 'DD/MM/YYYY');
  const end = moment.utc(endDate, 'DD/MM/YYYY');
  
  const datas = await volumeDataModel.find({
    $and: [
      { startDate: { $gte: start } },
      { endDate: { $lte: end } }
    ]
  }).exec();

  return convertData(datas);

};

module.exports = {
  insertVolumeDataToMongo,
  getDataForDateRange,
};
