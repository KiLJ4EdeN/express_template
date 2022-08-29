// test creating random numbers
const { getRandomInt } = require('../src/rand')

// to create the predicitons.txt file run the python code.
test('test creating a random number', () => {
  for (i = 0; i < 10; i++){
    randInt = Number(getRandomInt(10));
    expect(randInt<=10).toBe(true);
    expect(randInt>=0).toBe(true);
  }
});
