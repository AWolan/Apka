import * as chai from 'chai';
import * as sinon from 'sinon';
import * as autoService from '../../../../src/server/service/auto';
import * as autoDao from '../../../../src/server/persistence/dao/auto';

const assert = chai.assert;

describe('autoService', () => {
  describe('saveCombustion', () => {
    it('should throw error when data is empty', () => {
      // given
      let data = {};
      let errorMessage = 'Combustion should be linked with some vehicle.\n'
        + 'Milage or Total Milage must be provided.\n'
        + 'Two of Liter Amount, Liter Price or Total Price must be provided.';

      // when
      assert.throws(() => autoService.saveCombustion(data), Error, errorMessage);
    });

    it('should throw error when there is no autoId', () => {
      // given
      let data = {
        milage: 400,
        literAmount: 35.00,
        literPrice: 4.50
      };
      let errorMessage = 'Combustion should be linked with some vehicle.';

      // when
      assert.throws(() => autoService.saveCombustion(data), Error, errorMessage);
    });

    it('should throw error when Milage and Total Milage are not provided', () => {
      // given
      let data = {
        autoId: 1000,
        literAmount: 35.00,
        literPrice: 4.50
      };
      let errorMessage = 'Milage or Total Milage must be provided.';

      // when
      assert.throws(() => autoService.saveCombustion(data), Error, errorMessage);
    });

    it('should throw error when Liter Amount, Liter Price and Total Price are not provided', () => {
      // given
      let data = {
        autoId: 1000,
        milage: 400
      };
      let errorMessage = 'Two of Liter Amount, Liter Price or Total Price must be provided.';

      // when
      assert.throws(() => autoService.saveCombustion(data), Error, errorMessage);
    });

    it('should save combustion', () => {
      // given
      let now = new Date();
      let autoId = 1000;
      let data = {
        autoId: autoId,
        milage: 400,
        literAmount: 35.00,
        literPrice: 4.50,
        date: now
      };
      let expected = {
        autoId: autoId,
        milage: 400,
        totalMilage: 400,
        literAmount: 35.00,
        literPrice: 4.50,
        totalPrice: 157.50,
        combustion: 8.75,
        date: now
      };
      let saveCombustionSpy = sinon.spy(autoDao, 'saveCombustion');
      let getMaxMilageSpy = sinon.spy(autoDao, 'getMaxMilage');

      // when
      let result = autoService.saveCombustion(data);
      saveCombustionSpy.restore();
      getMaxMilageSpy.restore();

      // then
      sinon.assert.calledOnce(saveCombustionSpy);
      sinon.assert.calledWith(saveCombustionSpy, expected);
      sinon.assert.calledOnce(getMaxMilageSpy);
      sinon.assert.calledWith(getMaxMilageSpy, autoId);
    });
  });
});
