import {Region} from 'backbone.marionette';

import Pageable from 'topbar/collections/page';

import {PromptView} from './views';


export const PromptRegion = Region.extend({
  el: '#prompt-hook',

  showPrompts: function(user) {
    const PromptCollection = Pageable.extend();
    const prompt_collection = new PromptCollection([], {
      urlBase: '/notifications/',
      search_params: {
        notification_type: 'prompt',
        active_school: user.getActiveSchool(),
        read: false,
        location: window.location.pathname + window.location.hash
      }
    });

    this.show(new PromptView({
      model: user,
      collection: prompt_collection
    }));
  }
});
