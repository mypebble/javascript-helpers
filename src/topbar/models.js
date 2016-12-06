import _ from 'underscore';

import Form from 'base/models/form';


export const NotificationModel = Form.extend({
  defaults: {
    datetime_cleared: '',
    link: '',
    notification_class: ''
  },

  isCleared: function() {
    return !_.isNull(this.get('datetime_cleared'));
  }
});
