[![Published on Vaadin  Directory](https://img.shields.io/badge/Vaadin%20Directory-published-00b4f0.svg)](https://vaadin.com/directory/component/dacelislspinners)
[![Published on NPM](https://img.shields.io/badge/NPM-Published-red.svg)](https://www.npmjs.com/package/spinner-element)
![License - MIT](https://img.shields.io/github/license/dacelisl/confirm-element.svg)


# \<spinner-element\>


## Description.

varied set of spinners, you can choose any of the 10 types and additional you can edit the color, the time of activity and visibility.

Use `visible` to show the spinner:

```html
<spinner-element visible></spinner-element>
```

## Installation

`npm install spinner-element"@0.0.4" --save` 

## Polymer Element to display a spinner

the polymer element shows a spinner, which we can select any of the 10 types, (default, bars, bubbles, circles, ripple, dots, folding, cube, bounce, infinity) but the type of spinner is specified, it will show the type 'default ', to activate it requires the' visible 'property

optionally we can set the activity time in milliseconds, if it is not set by default it is infinite

```html
<spinner-element 
    visible 
    tipo="bars"
    duration="3000"
></spinner-element>
```

![Screenshot of confirm-element](https://raw.githubusercontent.com/Dacelisl/spinners/master/spinner-element.gif)



## Styling
The following custom properties are available for styling

Custom property | Description | Default
----------------|-------------|---------
--background-color-spinner | The spinner-element background-color | #b9b5b524
--background-border-infinity | background-color only for infinite spinner | #5d535314
--background-center-infinity | background-color only for infinite spinner | #ffffff00

## Usage

### In an html file
```html
<html>
  <head>
    <script type="module">
      import '.././spinner/spinner-element.js';
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
import '.././spinner/spinner-element.js';

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