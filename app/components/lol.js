import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  customBinding: computed('styleNamespace', function () {
    return `${this.get('styleNamespace')}--state`;
  }),
});
