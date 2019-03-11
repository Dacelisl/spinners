import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../style/ripple';
import '@polymer/iron-meta/iron-meta.js';

class StyleRipple extends PolymerElement {
    static get properties() {
        return {
            visible: { type: Boolean, value: false, observer: 'visibleChanged' },
        }
    }

    static get template() {
        return html`
        <style include="ripple">
        #ripple{
            display: none;
        }
      </style>
      <div class="lds-ripple" id="ripple">
        <div></div>
        <div></div>
        </div>

      <iron-meta id="metaripple" key="ripple"></iron-meta>

        `;
    }
    ready() {
        super.ready();
        this.$.metaripple.value = this;
    }
    visibleChanged(e) {
        var spin = this.$.ripple;
        if (this.visible) {
            spin.style.display = "block";
        }else{
            spin.style.display = "none";
        }
    }
}

customElements.define('style-ripple', StyleRipple);