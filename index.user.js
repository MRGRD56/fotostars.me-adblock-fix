// ==UserScript==
// @name         fotostart.me adblock fix
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       MRGRD56
// @match        https://fotostars.me/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=openuserjs.org
// @grant        none
// ==/UserScript==

googletag.pubads = () => ({refresh: () => {}});
