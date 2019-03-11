import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../style/dots';
import '@polymer/iron-meta/iron-meta.js';

class StyleDots extends PolymerElement {
    static get properties() {
        return {
            visible: { type: Boolean, value: false, observer: 'visibleChanged' },
        }
    }

    static get template() {
        return html`
        <style include="dots">
        #dots{
            display: none;
        }
      </style>
      <div class="spinner" id="dots">
        <div class="dot1"></div>
        <div class="dot2"></div>
      </div>
      <iron-meta id="metadots" key="dots"></iron-meta>

        `;
    }
    ready() {
        super.ready();
        this.$.metadots.value = this;
    }
    visibleChanged(e) {
        var spin = this.$.dots;
        if (this.visible) {
            spin.style.display = "block";
        }else{
            spin.style.display = "none";
        }
    }
}

customElements.define('style-dots', StyleDots);