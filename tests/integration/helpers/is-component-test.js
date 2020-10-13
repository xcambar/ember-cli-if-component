import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
const { Component } = Ember;

moduleForComponent('is-component', 'helper:is-component', {
  integration: true
});


test('it works', function(assert) {
  assert.expect(3);

  this.register('component:my-component', Component.extend());

  this.set('name', 'my-non-component');

  this.render(hbs`{{if (is-component name) 'yes' 'no'}}`);

  assert.equal(this.$().html(), 'no', 'returns false when component does not exist');

  this.set('name', 'my illegal component name');

  this.render(hbs`{{if (is-component name) 'yes' 'no'}}`);

  assert.equal(this.$().html(), 'no', 'returns false when component name is not allowed');

  this.set('name', 'my-component');

  assert.equal(this.$().html(), 'yes', 'returns true when component exists');
});
