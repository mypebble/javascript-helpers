import {Region} from 'backbone.marionette';

import {PromptView} from './views';


export const PromptRegion = Region.extend({
  el: '#prompt-hook',

  showPrompts: function(user, options) {
    this.show(new PromptView({
      model: user,
      notificationsUrl: options.notificationsUrl
    }));
  }
});
