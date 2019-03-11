# \<spinner-element\>

##Description.

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

