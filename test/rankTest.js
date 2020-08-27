const rankTest = require('ava');
const { voyageRisk } = require('../src/rank');

rankTest('foo', t => {
  t.pass();
});

rankTest('bar', async t => {
  const bar = Promise.resolve('bar');
  t.is(await bar, 'bar');
});

rankTest('the length of voyage is 2', t => {
  //given
  const voyage = {
    'length': 4
  };
  //when
  const result = voyageRisk(voyage);
  //then
  t.is(result, 1)
})