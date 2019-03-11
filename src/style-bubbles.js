import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../style/bubbles';
import '@polymer/iron-meta/iron-meta.js';

class StyleBubbles extends PolymerElement {
    static get properties() {
        return {
            visible: { type: Boolean, value: false, observer: 'visibleChanged' },
        }
    }

    static get template() {
        return html`
        <style include="bubbles">
        #bubbles{
            display: none;
        }
      </style>
      <div class="bubbles"  id="bubbles">
        <div class="double-bounce1"></div>
        <div class="double-bounce2"></div>
      </div>
      <iron-meta id="metabubbles" key="bubbles"></iron-meta>

        `;
    }
    ready() {
        super.ready();
        this.$.metabubbles.value = this;
    }
    visibleChanged(e) {
        var spin = this.$.bubbles;
        if (this.visible) {
            spin.style.display = "block";
        }else{
            spin.style.display = "none";
        }
    }
}

customElements.define('style-bubbles', StyleBubbles);