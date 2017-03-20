import * as testDao from '../../persistence/dao/testDao';

export function saveTest() {
  console.log('test service');
  let tester = {
    name: 'Test 1',
    items: [
      {
        name: 'A1',
        desc: 'A1 desc'
      },
      {
        name: 'B2',
        desc: '2 of B desc'
      }
    ],
    date: new Date()
  };

  testDao.save(tester);
}
