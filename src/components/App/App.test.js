import test from 'ava'
import App from './index'

test.beforeEach(t => {
    t.context = 'unicorn';
});
test('beforeEach Test2', t => {
    t.is(t.context, 'unicorn');
});

test('App', t => {
    t.pass();
});
