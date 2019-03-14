
import '@polymer/polymer/polymer-element.js';

const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `<dom-module id="ripple">
  <template>
    <style>

    .lds-ripple {
        margin: 100px auto 0;
        width: 70px;
        text-align: center;
        display: inline-block;
        position: relative;
        height: 80px;
      }
      .lds-ripple div {
        position: absolute;
        border: 4px solid var(--background-color-spinner, #b9b5b524);
        opacity: 1;
        border-radius: 50%;
        animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
      }
      .lds-ripple div:nth-child(2) {
        animation-delay: -0.5s;
      }
      @keyframes lds-ripple {
        0% {
          top: 28px;
          left: 28px;
          width: 0;
          height: 0;
          opacity: 1;
        }
        100% {
          top: -1px;
          left: -1px;
          width: 58px;
          height: 58px;
          opacity: 0;
        }
      }
    
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
