# \<spinner-element\>


## Description.

varied set of spinners, you can choose any of the 9 types and additional you can edit the color, the time of activity and visibility.

Use `visible` to show the spinner:

```html
<spinner-element visible></spinner-element>
```

## Polymer Element to display a spinner

the polymer element shows a spinner, which we can select any of the 9 types, (default, bars, bubble, circle, ripple, dots, folding, cube, bounce) but the type of spinner is specified, it will show the type 'default ', to activate it requires the' visible 'property

optionally we can set the activity time in milliseconds, if it is not set by default it is infinite

```html
<spinner-element 
    visible 
    tipo="bars"
    duration="3000"
></spinner-element>
```

## Styling
The following custom properties are available for styling

Custom property | Description | Default
----------------|-------------|---------
--background-color-spinner | The spinner-element background-color | #b9b5b524

## Usage

### In an html file
```html
<html>
  <head>
    <script type="module">
      import '@polymer/spinner/spinner-element.js';
    </script>
    <custom-style>
      <style is="custom-style">
        #spinner {
          --background-color-spinner: #f0f000;
        }
      </style>
    </custom-style>
  </head>
  <body>
    <spinner-element id="spinner" visible tipo="bars"></spinner-element>
  </body>
</html>
```

### In a Polymer 3 element
```js
import {PolymerElement, html} from '@polymer/polymer';
/* import '@polymer/spinner/spinner-element.js'; */

class SampleElement extends PolymerElement {
  static get template() {
    return html`
      <spinner-element visible tipo="bubbles"></spinner-element>
    `;
  }
}
customElements.define('sample-element', SampleElement);
```

## Credits

This repository is based on the CSS code of https://github.com/tobiasahlin/SpinKit
You can also see a sample of the spinners in action http://tobiasahlin.com/spinkit/