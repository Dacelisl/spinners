import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../style/folding';
import '@polymer/iron-meta/iron-meta.js';

class Stylefolding extends PolymerElement {
    static get properties() {
        return {
            visible: { type: Boolean, value: false, observer: 'visibleChanged' },
        }
    }

    static get template() {
        return html`
        <style include="folding">
        #folding{
            display: none;
        }
      </style>
      <div class="sk-folding-cube" id="folding">
            <div class="sk-cube1 sk-cube"></div>
            <div class="sk-cube2 sk-cube"></div>
            <div class="sk-cube4 sk-cube"></div>
            <div class="sk-cube3 sk-cube"></div>
        </div>
      <iron-meta id="metafolding" key="folding"></iron-meta>

        `;
    }
    ready() {
        super.ready();
        this.$.metafolding.value = this;
    }
    visibleChanged(e) {
        var spin = this.$.folding;
        if (this.visible) {
            spin.style.display = "block";
        }else{
            spin.style.display = "none";
        }
    }
}

customElements.define('style-folding', Stylefolding);