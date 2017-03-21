import mongoose from 'mongoose';
import * as connector from '../connector';
import {CombustionModel} from '../../model/auto/CombustionModel';

export function saveCombustion(data) {
  connector.connect();
  let combustion = new CombustionModel(data);

  return combustion.save(function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log('Combustion saved.');
    }
    connector.disconnect();
  });
};

export function getMaxMilage(autoId) {
  connector.connect();
  let combustion = new TankModel(test);

  return CombustionModel.findOne({
    autoId: autoId
  }, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log('Combustion saved.');
    }
    connector.disconnect();
  });
};
