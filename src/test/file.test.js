import test from 'ava';

test('Array DeepEqual', t => {
  t.deepEqual([1, 2], [1, 2]);
});

test('foo', t => {
    t.pass();
});

test('bar', async t => {
    const bar = Promise.resolve('bar');

    t.is(await bar, 'bar');
});

test.beforeEach(t => {
    t.context = 'unicorn';
});
test('beforeEach Test', t => {
    t.is(t.context, 'unicorn');
});
