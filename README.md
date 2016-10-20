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

## Navigation Panel

The navigation panel renders the HTML side-bar and keeps it consistent between
all Pebble systems. To initialise the nav panel, simply import the navigation
region, attach it to a region manager and call `showNav(user)` with the user
instance.

The following example is a cut down version of the code from Arro:

```javascript
import Mn from 'backbone.marionette';

import {NavRegion} from 'javascript-helpers';

import {User} from 'user/models';


const app = new Mn.Application({
  onStart: function(options) {
    const user = new User();
    user.fetch();

    this.regionManager = new Mn.RegionManager({
      regions: {
        nav: NavRegion
      }
    });

    this.regionManager.get('nav').showNav(user);
  }
});
```

## User

To get access to the shared user model, you can use the localstorage-backed
class `User`:

```javascript
import {User} from 'javascript-helpers';

const user = new User();
user.fetch();
```

The `User` contains a number of useful methods:

* `setCredentials(jwt)` - Assign the `jwt` to local storage.
* `getToken()` - Return the JWT to authenticate with the server.
* `setActiveSchool()` - Lookup the active school from the URL.
* `getActiveSchool()` - Return the active school from localstorage.
* `getSchools()` - Return the list of schools a user can view.

**Note** The information attached to the token is for informational purposes
only. Changing information _should_ have no effect on the server's behaviour as
the encoded token is what the server should actually read.

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

## Utility Functions

The Javascript Helpers provide a selection of utility functions to format common
outputs across the Pebble platform.

### Decimal Numbers

`formatAmount` is a helper that formats numerical outputs into a decimal values
with a leading `£` sign:

```javascript
const amount = formatAmount('1000');
// amount is £1,000.00

const noPlaces = formatAmount(1000, 0);
// noPlaces is £1,000
```

### Dates

The date utilities provide a number of helpers with a simple output function:

1. `dateObj` takes a date string and outputs a JavaScript `Date` object.
2. `formatObj` takes a JavaScript `Date` object and outputs a formatted date.
3. `formatDate` takes a date string and outputs a formatted string of DD/MM/YYYY.

```javascript
const date = dateObj('2016-01-01');
const output = formatObj(date);
// output is 01/01/2016

const year = formatObj(date, 'YYYY');
// year is 2016

const fullOutput = formatDate('2016-01-03', 'DD/MM');
// fullOutput is 03/01
```