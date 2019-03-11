import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../style/default';
import '@polymer/iron-meta/iron-meta.js';

class StyleDefault extends PolymerElement {
    static get properties() {
        return {
            visible: { type: Boolean, value: false, observer: 'visibleChanged' },
        }
    }

    static get template() {
        return html`
        <style include="default">
        #default{
            display: none;
        }
      </style>

      <div class="lds-spinner" id="default">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
      <iron-meta id="metadefault" key="default"></iron-meta>

        `;
    }
    ready() {
        super.ready();
        this.$.metadefault.value = this;
    }
    visibleChanged(e) {
        var spin = this.$.default;
        if (this.visible) {
            spin.style.display = "block";
        }else{
            spin.style.display = "none";
        }
    }
}

customElements.define('style-default', StyleDefault);