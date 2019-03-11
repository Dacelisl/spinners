import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-meta/iron-meta.js';
import '../style/bars';

class StyleBars extends PolymerElement {
    static get properties() {
        return {
            visible: { type: Boolean, value: false, observer: 'visibleChanged' },
        }
    }

    static get template() {
        return html`
        <style include="bars">
            #bars {
            display: none;
            }
        </style>
        <div class="bars" id="bars">
            <div class="rect1"></div>
            <div class="rect2"></div>
            <div class="rect3"></div>
            <div class="rect4"></div>
            <div class="rect5"></div>
        </div>

        <iron-meta id="metabars" key="bars"></iron-meta>
        `;
    }

    ready() {
        super.ready();
        this.$.metabars.value = this;
    }

    visibleChanged() {
        var spin = this.$.bars;
        if (this.visible) {
            spin.style.display = "block";
        } else{
            spin.style.display = "none";
        }
    }
}

customElements.define('style-bars', StyleBars);