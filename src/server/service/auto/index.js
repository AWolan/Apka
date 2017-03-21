import * as autoDao from '../../persistence/dao/auto';

export function saveCombustion(data) {
  let prevMilage = 0;
  let combustion = {};

  if (data.milage) {
    combustion.milage = data.milage;
    combustion.totalMilage = prevMilage + data.milage;
  } else if (data.totalMilage) {
    combustion.totalMilage = data.totalMilage;
    combustion.milage = data.totalMilage - prevMilage;
  } else {
    // throw error
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
    // throw error
  }

  combustion.combustion = combustion.literAmount / combustion.milage * 100;
  combustion.date = data.date ? data.date : new Date();

  return autoDao.saveCombustion(combustion);
    // .then(result => {
    //   return result;
    // });
};
