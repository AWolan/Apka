import Vue from 'vue';///dist/vue.common.js';
import * as chai from 'chai';
import * as sinon from 'sinon';
import app from '../../../src/client/components/App';

const assert = chai.assert;

function getComponent(component, props) {
  const Constructor = Vue.extend(component);
  const vm = new Constructor(props).$mount('#app');
  return vm.$options.options;
}

describe('App', () => {
  it('has been created', () => {
    const vm = getComponent(app);
    assert.equal(typeof vm.methods.b, 'function');
  });
});
