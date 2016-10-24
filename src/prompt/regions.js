import {Collection} from 'backbone';
import {Region} from 'backbone.marionette';

import {PromptView} from './views';


export const PromptRegion = Region.extend({
  el: '#prompt-hook',

  showPrompts: function(user) {
    const PromptCollection = Collection.extend({
      url: '/notifications/'
    });

    this.show(new PromptView({
      model: user,
      collection: new PromptCollection()
    }));
  }
});
