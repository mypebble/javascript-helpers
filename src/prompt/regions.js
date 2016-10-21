import {Region} from 'backbone.marionette';

import {PromptView} from './views';


export const PromptRegion = Region.extend({
  el: '#prompt-hook',

  showPrompts: function(options) {
    this.show(new PromptView({
      notificationsUrl: options.notificationsUrl
    }));
  }
});
