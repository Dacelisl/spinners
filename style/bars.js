

import '@polymer/polymer/polymer-element.js';

const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `<dom-module id="bars">
  <template>
    <style>
    .bars {
        margin: 100px auto;
        width: 50px;
        height: 40px;
        text-align: center;
        font-size: 10px;
      }
      
      .bars > div {
        background-color:var(--background-color-spinner, #b9b5b524);
        height: 100%;
        width: 6px;
        display: inline-block;
        
        -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;
        animation: sk-stretchdelay 1.2s infinite ease-in-out;
      }
      
      .bars .rect2 {
        -webkit-animation-delay: -1.1s;
        animation-delay: -1.1s;
      }
      
      .bars .rect3 {
        -webkit-animation-delay: -1.0s;
        animation-delay: -1.0s;
      }
      
      .bars .rect4 {
        -webkit-animation-delay: -0.9s;
        animation-delay: -0.9s;
      }
      
      .bars .rect5 {
        -webkit-animation-delay: -0.8s;
        animation-delay: -0.8s;
      }
       @-webkit-keyframes sk-stretchdelay {
        0%, 40%, 100% { -webkit-transform: scaleY(0.4) }  
        20% { -webkit-transform: scaleY(1.0) }
      }
       @keyframes sk-stretchdelay {
        0%, 40%, 100% { 
          transform: scaleY(0.4);
          -webkit-transform: scaleY(0.4);
        }  20% { 
          transform: scaleY(1.0);
          -webkit-transform: scaleY(1.0);
        }
      }
    </style>
  </template>
</dom-module>
`;

document.head.appendChild($_documentContainer.content);
