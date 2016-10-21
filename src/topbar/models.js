import _ from 'underscore';

import {Model} from 'backbone';


export const NotificationModel = Model.extend({
  defaults: {
    datetime_cleared: '',
    link: '',
    notification_class: ''
  },

  isCleared: function() {
    return !_.isNull(this.get('datetime_cleared'));
  }
});
