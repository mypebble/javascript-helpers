import Poller from 'backbone-poller';
import Marionette from 'backbone.marionette';


const Prompt = Marionette.LayoutView.extend({
  template: require('./templates/prompt.html')
});


export const PromptView = Marionette.CompositeView.extend({
  childView: Prompt,
  childViewContainer: 'ul',

  template: require('./templates/prompts.html'),

  initialize: function() {
    const user = this.model;

    const poller = Poller.get(this.collection, {
      continueOnError: false,
      delay: 30000,
      data: {
        notification_type: 'prompt',
        read: false,
        location: window.location.pathname + window.location.hash,
        active_school: user.get('activeSchool')
      }
    });

    this.listenTo(poller, 'success', this.render);
    poller.start();
  }
});
