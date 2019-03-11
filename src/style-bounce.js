import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../style/bounce';
import '@polymer/iron-meta/iron-meta.js';

class StyleBounce extends PolymerElement {
    static get properties() {
        return {
            visible: { type: Boolean, value: false, observer: 'visibleChanged' },
        }
    }

    static get template() {
        return html`
        <style include="bounce">
        #bounce{
            display: none;
        }
      </style>
      <div class="bounce" id="bounce">
            <div class="bounce1"></div>
            <div class="bounce2"></div>
            <div class="bounce3"></div>
        </div>
      <iron-meta id="metabounce" key="bounce"></iron-meta>

        `;
    }
    ready() {
        super.ready();
        this.$.metabounce.value = this;
    }
    visibleChanged(e) {
        var spin = this.$.bounce;
        if (this.visible) {
            spin.style.display = "block";
        }else{
            spin.style.display = "none";
        }
    }
}

customElements.define('style-bounce', StyleBounce);