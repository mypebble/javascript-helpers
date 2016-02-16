import Marionette from 'backbone.marionette';

/** Turn a given view into a modal that can be modified.
    This behavior automatically turns a view into a modal that must be closed
    by clicking the abandon button.

    Templates:
      The template must contain the close-modal class on all buttons that can
      close this modal.
    Triggers:
        To close the modal, you must fire the close:modal trigger so it can
        clean itself up properly.
        Once the close:modal is completed, this behavior fires the
        close:modal:complete trigger which you can listen to to apply additional
        clean-up in any parent views.
        If the confirm button is clicked, the confirm:action is fired
*/
export const ModalBehavior = Marionette.Behavior.extend({
  defaults: {
    backdrop: 'static'
  },

  ui: {
    wrapper: '.modal-hook',
    close: '.close-modal',
    confirm: '.confirm-modal'
  },

  triggers: {
    'hidden.bs.modal @ui.wrapper': 'destroy:modal',
    'click @ui.close': 'close:modal'
  },

  events: {
    'click @ui.confirm': 'fireConfirmTrigger'
  },

  /** Cause the dialog box to be displayed on-screen.
  */
  onAttach: function() {
    this._guardedModal(this.ui.wrapper, this._getModalOptions());
  },

  onCloseModal: function() {
    this._guardedModal(this.ui.wrapper, 'hide');
  },

  onDestroyModal: function() {
    this.view.triggerMethod('close:modal:complete');
  },

  fireConfirmTrigger: function() {
    this.view.triggerMethod('confirm:action');
  },

  _getModalOptions: function() {
    return {
      backdrop: this.getOption('backdrop')
    };
  },

  _guardedModal: function(selector, options) {
    if (selector.modal) {
      selector.modal(options);
    }
    else {
      console.warn('Bootstrap modal is not available');
    }
  }
});
