const rankTest = require('ava');
const { rating } = require('../src/rank');

rankTest('foo', t => {
  t.pass();
});

rankTest('bar', async t => {
  const bar = Promise.resolve('bar');
  t.is(await bar, 'bar');
});

rankTest('1.The voyage is 20 in length and china in zone, the length of history is 12.', t => {
  //given
  const voyage = {
    zone: 'china',
    length: 20,
  };
  const history = [
    {
      zone: 'east-indies',
      profit: 5,
    },
    {
      zone: 'west-indies',
      profit: 15,
    },
    {
      zone: 'china',
      profit: -2,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
    {
      zone: 'east-indies',
      profit: 5,
    },
    {
      zone: 'west-indies',
      profit: 15,
    },
    {
      zone: 'china',
      profit: -2,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
    {
      zone: 'east-indies',
      profit: 5,
    },
    {
      zone: 'west-indies',
      profit: 15,
    },
    {
      zone: 'china',
      profit: -2,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
  ];
  //when
  const myRating = rating(voyage, history);
  //then
  t.is(myRating, 'B')
});

rankTest('2.The voyage is 20 in length and east-indies in zone, the length of history is 1.', t => {
  //given
  const voyage = {
    zone: 'east-indies',
    length: 20,
  };
  const history = [
    {
      zone: 'east-indies',
      profit: 5,
    }
  ];
  //when
  const myRating = rating(voyage, history);
  //then
  t.is(myRating, 'B')
});

rankTest('3.The voyage is 20 in length and china in zone, the length of history is 10.', t => {
  //given
  const voyage = {
    zone: 'china',
    length: 20,
  };
  const history = [
    {
      zone: 'east-indies',
      profit: 5,
    },
    {
      zone: 'west-indies',
      profit: 15,
    },
    {
      zone: 'china',
      profit: -2,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
    {
      zone: 'east-indies',
      profit: 5,
    },
    {
      zone: 'west-indies',
      profit: 15,
    },
    {
      zone: 'china',
      profit: -2,
    },
    {
      zone: 'west-africa',
      profit: 7,
    },
    {
      zone: 'east-indies',
      profit: 5,
    },
    {
      zone: 'west-indies',
      profit: 15,
    }
  ];
  //when
  const myRating = rating(voyage, history);
  //then
  t.is(myRating, 'B')
});

const voyage = {
  zone: 'west-indies',
  length: 12,
};
const history = [
  {
    zone: 'east-indies',
    profit: 5,
  },
  {
    zone: 'west-indies',
    profit: 15,
  },
  {
    zone: 'china',
    profit: -2,
  },
  {
    zone: 'west-africa',
    profit: 7,
  },
  {
    zone: 'east-indies',
    profit: 5,
  },
  {
    zone: 'west-indies',
    profit: 15,
  },
  {
    zone: 'china',
    profit: -2,
  },
  {
    zone: 'west-africa',
    profit: 7,
  },
  {
    zone: 'east-indies',
    profit: 5,
  },
  {
    zone: 'west-indies',
    profit: 15,
  }
];
const myRating = rating(voyage, history);
console.log(`myRating: ${myRating}`);