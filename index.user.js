// ==UserScript==
// @name         fotostart.me adblock fix
// @namespace    https://github.com/MRGRD56
// @version      0.1
// @author       MRGRD56
// @match        https://fotostars.me/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=openuserjs.org
// @grant        none
// ==/UserScript==

googletag.pubads = () => ({refresh: () => {}});
