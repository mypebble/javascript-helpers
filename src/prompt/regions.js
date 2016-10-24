import {Region} from 'backbone.marionette';

import {PromptView} from './views';


export const PromptRegion = Region.extend({
  el: '#prompt-hook',

  showPrompts: function(user) {
    this.show(new PromptView({
      model: user
    }));
  }
});
