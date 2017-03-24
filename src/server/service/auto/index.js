import * as autoDao from '../../persistence/dao/auto';

export function saveCombustion(data) {
  let combustion = {};
  let errorMessage = [];

  let prevMilage = autoDao.getMaxMilage(data.autoId) | 0;

  if (!data.autoId) {
    errorMessage.push('Combustion should be linked with some vehicle.');
  }

  if (data.milage) {
    combustion.milage = data.milage;
    combustion.totalMilage = prevMilage + data.milage;
  } else if (data.totalMilage) {
    combustion.totalMilage = data.totalMilage;
    combustion.milage = data.totalMilage - prevMilage;
  } else {
    errorMessage.push('Milage or Total Milage must be provided.');
  }

  if (data.literAmount && data.literPrice) {
    combustion.literAmount = data.literAmount;
    combustion.literPrice = data.literPrice;
    combustion.totalPrice = data.literAmount * data.literPrice;
  } else if (data.literAmount && data.totalPrice) {
    combustion.literAmount = data.literAmount;
    combustion.literPrice = data.totalPrice / data.literAmount;
    combustion.totalPrice = data.totalPrice;
  } else if (data.literPrice && data.totalPrice) {
    combustion.literAmount = data.totalPrice / data.literPrice;
    combustion.literPrice = data.literPrice;
    combustion.totalPrice = data.totalPrice;
  } else {
    errorMessage.push('Two of Liter Amount, Liter Price or Total Price must be provided.');
  }

  if (errorMessage.length > 0) {
    let error = errorMessage.reduce((prev, current) => {
      return `${prev}\n${current}`;
    });

    throw new Error(error);
  }

  combustion.autoId = data.autoId;
  combustion.combustion = combustion.literAmount / combustion.milage * 100;
  combustion.date = data.date ? data.date : new Date();

  return autoDao.saveCombustion(combustion);
    // .then(result => {
    //   return result;
    // });
};
