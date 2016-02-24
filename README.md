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

## Behaviors

List of useful behaviors.

### Modal

`ModalBehavior` renders a view as a Bootstrap Modal.
