import{A as i}from"./assets/vendor-BqaxvlI9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();document.addEventListener("DOMContentLoaded",()=>{[...document.querySelectorAll(".accordion-el")].forEach(t=>{if(t.classList.contains("is-active")){const n=t.querySelector(".arrow-top");n&&(n.style.transform="rotate(0deg)")}})});new i(".accordion-container",{openOnInit:[0],duration:400,showMultiple:!1,onOpen:r=>{const t=r.querySelector(".arrow-top");t&&(t.style.transform="rotate(0deg)")},onClose:r=>{const t=r.querySelector(".arrow-top");t&&(t.style.transform="rotate(180deg)")}});
//# sourceMappingURL=index.js.map
