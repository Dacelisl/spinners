/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import '@polymer/polymer/polymer-element.js';

const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `<dom-module id="dots">
  <template>
    <style>
    .spinner {
        margin: 100px auto;
        width: 40px;
        height: 40px;
        position: relative;
        text-align: center;
        
        -webkit-animation: sk-rotate 2.0s infinite linear;
        animation: sk-rotate 2.0s infinite linear;
      }
      
      .dot1, .dot2 {
        width: 60%;
        height: 60%;
        display: inline-block;
        position: absolute;
        top: 0;
        background-color: var(--background-color-spinner, #b9b5b524);
        border-radius: 100%;
        
        -webkit-animation: sk-bounce 2.0s infinite ease-in-out;
        animation: sk-bounce 2.0s infinite ease-in-out;
      }
      
      .dot2 {
        top: auto;
        bottom: 0;
        -webkit-animation-delay: -1.0s;
        animation-delay: -1.0s;
      }
      
      @-webkit-keyframes sk-rotate { 100% { -webkit-transform: rotate(360deg) }}
      @keyframes sk-rotate { 100% { transform: rotate(360deg); -webkit-transform: rotate(360deg) }}
      
      @-webkit-keyframes sk-bounce {
        0%, 100% { -webkit-transform: scale(0.0) }
        50% { -webkit-transform: scale(1.0) }
      }
      
      @keyframes sk-bounce {
        0%, 100% { 
          transform: scale(0.0);
          -webkit-transform: scale(0.0);
        } 50% { 
          transform: scale(1.0);
          -webkit-transform: scale(1.0);
        }
      }
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
