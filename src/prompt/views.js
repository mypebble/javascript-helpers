import Backbone from 'backbone';
import Marionette from 'backbone.marionette';


const Prompt = Marionette.ItemView.extend({
  className: 'alert alert-info',
  template: require('./templates/prompt.html')
});


export const PromptView = Marionette.CompositeView.extend({
  childView: Prompt,
  childViewContainer: 'ul',

  template: require('./templates/prompts.html'),

  initialize: function() {
    const user = this.getOption('user');

    this.collection = new Backbone.Collection();
    this.collection.url = this.getOption('notificationsUrl');

    this.collection.fetch({
      data: {
        notification_type: 'prompt',
        read: false,
        location: window.location.pathname,
        active_school: user.get('activeSchool')
      },
      success: () => this.render()
    });
  }
});
