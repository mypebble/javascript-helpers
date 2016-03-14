/** The Grant Modal */
import _ from 'underscore';
import Marionette from 'backbone.marionette';

import {ModalBehavior} from '../../modals/behaviors';
import {markdown} from '../../markdown/util';
import {fromNow} from '../../date/util';

import {GrantModal} from '../behaviors';


export const TitleView = Marionette.LayoutView.extend({
  template: require('../templates/detail/title.html'),
  className: 'body-title',
  modelEvents: {
    sync: 'render'
  },

  templateHelpers: {
    hasProjects: function(projects) {
      return projects.length;
    },

    project: function(projects) {
      if (projects.length > 1) {
        return `${projects.length} projects`;
      }
      const project = _.first(projects);

      if (_.isUndefined(project.attributes)) {
        return project.title;
      }
      return project.get('title');
    }
  }
});

export const FooterView = Marionette.LayoutView.extend({
  tagName: 'ul',
  className: 'row list-unstyled list-inline list-facts-three',
  template: require('../templates/detail/footer.html')
});

export const GrantView = Marionette.LayoutView.extend({
  behaviors: {
    modal: {
      behaviorClass: ModalBehavior
    },
    grant: {
      behaviorClass: GrantModal
    }
  },
  template: require('../templates/detail/layout.html'),

  templateHelpers: {
    fromNow: fromNow,
    renderMarkdown: markdown.toHTML
  },

  regions: {
    title: '.title-hook',
    footer: '.footer-hook'
  },

  onRender: function() {
    this.showTitle();
    this.showFooter();
    this.showOther();
  },

  showTitle: function() {
    const title = new TitleView({
      model: this.model
    });

    this.showChildView('title', title);
  },

  showFooter: function() {
    const footer = new FooterView({
      model: this.model
    });


    this.showChildView('footer', footer);
  },

  showOther: function() {}
});
