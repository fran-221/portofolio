// ==UserScript==
// @name         Tandai Menu Murah
// @match        https://fran-221.github.io/portofolio/kopi-senja.html
// @match        http://127.0.0.1:5500/kopi-senja.html
// @grant        none
// ==/UserScript==
(function () {
  'use strict';
  document.querySelectorAll('.kartu').forEach(function (kartu) {
    const teks = kartu.querySelector('.harga').textContent;
    const angka = parseInt(teks.replace(/[^0-9]/g, ''), 10);
    if (angka < 16000) {
      kartu.style.border = '2px solid red';
    }
  });
})();
