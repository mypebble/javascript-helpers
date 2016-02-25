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

## Behaviors

List of useful behaviors.

### Modal

`ModalBehavior` renders a view as a Bootstrap Modal.
