import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../style/cube';
import '@polymer/iron-meta/iron-meta.js';

class StyleCube extends PolymerElement {
    static get properties() {
        return {
            visible: { type: Boolean, value: false, observer: 'visibleChanged' },
        }
    }

    static get template() {
        return html`
        <style include="cube">
        #cube{
            display: none;
        }
      </style>
      <div class="sk-cube-grid" id="cube">
            <div class="sk-cube sk-cube1"></div>
            <div class="sk-cube sk-cube2"></div>
            <div class="sk-cube sk-cube3"></div>
            <div class="sk-cube sk-cube4"></div>
            <div class="sk-cube sk-cube5"></div>
            <div class="sk-cube sk-cube6"></div>
            <div class="sk-cube sk-cube7"></div>
            <div class="sk-cube sk-cube8"></div>
            <div class="sk-cube sk-cube9"></div>
        </div>
      <iron-meta id="metacube" key="cube"></iron-meta>

        `;
    }
    ready() {
        super.ready();
        this.$.metacube.value = this;
    }
    visibleChanged(e) {
        var spin = this.$.cube;
        if (this.visible) {
            spin.style.display = "block";
        }else{
            spin.style.display = "none";
        }
    }
}

customElements.define('style-cube', StyleCube);