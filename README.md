# Pebble JS Helpers

Helpers and widgets for our JS applications.

## Views

The JS Helpers library includes some views for different situations.

### Grants

`GrantView` - Render a Grant as a modal.

To use the `GrantView`, you can either use it as-is and just display a grant.
The `GrantView` has a number of hooks to customise its appearance for your
project's purpose.

#### Base Views

  * `TitleView` - The grant title bar.
  * `FooterView` - The grant footer with options.

#### Hook Points

The `GrantView` provides three hooks for displaying different areas:

  * `showTitle` - Renders the title bar.
  * `showFooter` - Renders the footer bar.
  * `showOther` - Render any other regions you have added.

#### Overriding regions

When adding new regions, be sure to keep the following:

  * `title` - Title region
  * `footer` - Footer region

## Navbar

The navbar handles all the logic for rendering the status of the navbar and all
notifications attached to it. To run the navbar code, simply import the
initializer function and pass in the URL roots to synchronize notifications
with:

```javascript
import Marionette from 'backbone.marionette';

import {navInit} from 'javascript-helpers';


const app = new Marionette.Application();
app.addInitializer(navInit);
app.start({
  arroUrl: 'https://arro.mypebble.co.uk/school/1/notification/',
  grantUrl: 'https://grants.mypebble.co.uk/notification/'
});
```

Leaving any of these blank will cause the navbar to not attempt to poll for
notifications on that application.

### Manually updating notifications

To manually update a notification, use the `navigation` channel and send the
`update` command:

```javascript
import Backbone from 'backbone';

// Reduce the Project notifications by 5
const channel = Backbone.Wreqr.radio.channel('navigation');
navigation.vent.trigger('update', 'project', 5);
```

## Behaviors

List of useful behaviors.

### Modal

`ModalBehavior` renders a view as a Bootstrap Modal. This modal must be closed
by clicking the X at the top corner.

#### Usage

```javascript
import {LayoutView} from 'backbone.marionette';

import {ModalBehavior} from 'javascript-helpers';

export const ModalView = LayoutView.extend({
  behaviors: {
    modal: {
      behaviorClass: ModalBehavior
    }
  },

  template: require('modal.html')
});
```

#### Template

An example Modal Template:

```html
<div class="modal modal-hook" role="dialog">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close close-modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <h4 class="modal-title"></h4>
      </div>

      <div class="modal-body"></div>

      <div class="modal-footer">
        <button class="btn btn-default close-modal">Abandon</button>
      </div>
    </div>
  </div>
</div>
```

The modal listens to clicks on the `.close-modal` class - set this class on any
buttons that are to close the modal.

#### Code

To close the modal inside your view, do:

```javascript
view.triggerMethod('close:modal');
```

#### Events

The modal behavior fires the following events:

1. `close:modal:complete` - once the modal is closed and removed from its parent
  region.
2. `comfirm:action` - when the `.confirm-modal` class is clicked

### Link

`LinkBehavior` causes all injected links to open in a new tab when clicked.
