import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-meta/iron-meta.js';
import '../style/circles';

class Stylecircles extends PolymerElement {
    static get properties() {
        return {
            visible: { type: Boolean, value: false, observer: 'visibleChanged' },
        }
    }

    static get template() {
        return html`
        <style  include="circles">
        #circle {
          display: none;
        }
        </style>
        <div class="sk-circle" id="circles">
            <div class="sk-circle1 sk-child"></div>
            <div class="sk-circle2 sk-child"></div>
            <div class="sk-circle3 sk-child"></div>
            <div class="sk-circle4 sk-child"></div>
            <div class="sk-circle5 sk-child"></div>
            <div class="sk-circle6 sk-child"></div>
            <div class="sk-circle7 sk-child"></div>
            <div class="sk-circle8 sk-child"></div>
            <div class="sk-circle9 sk-child"></div>
            <div class="sk-circle10 sk-child"></div>
            <div class="sk-circle11 sk-child"></div>
            <div class="sk-circle12 sk-child"></div>
        </div>

        <iron-meta id="metacircle" key="circles"></iron-meta>
        `;
    }
    ready() {
        super.ready();
        this.$.metacircle.value = this;
    }

    visibleChanged() {
        var spin = this.$.circles;
        if (this.visible) {
            spin.style.display = "block";
        } else {
            spin.style.display = "none";
        }
    }
}

customElements.define('style-circles', Stylecircles);