// ==UserScript==
// @name         Simple ChatGPT Widescreen Userscript
// @namespace    https://chat.openai.com
// @version      1.0
// @description  Removes the padding on the sides of the ChatGPT messages
// @author       Isak Lindgren
// @match        https://chat.openai.com/*
// @grant        GM_addStyle
// ==/UserScript==

(function () {
  const customCSS = `
        .text-base {
            max-width: calc(100% - 3em)!important;
        }
        .self-end {
            right: 2em!important;
            top: unset!important;
        }
    `;

  // Inject the CSS into the page
  GM_addStyle(customCSS);
})();
