!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=e.parcelRequire0a40;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},e.parcelRequire0a40=o);var r=o("h6c0i"),i=document.querySelector('button[type="submit"]'),u=document.querySelector('input[name="delay"]'),a=document.querySelector('input[name="step"]'),c=document.querySelector('input[name="amount"]'),l=document.querySelector(".form"),d=function(e,n){return new Promise((function(t,o){setTimeout((function(){Math.random()>.3?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))};i.addEventListener("click",(function(e){e.preventDefault();for(var n=0;n<c.value;n++)d(n+1,+u.value+ +a.value*n).then((function(e){var n=e.position,t=e.delay;return r.Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms"))})).catch((function(e){var n=e.position,t=e.delay;return r.Notify.failure("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))}));l.reset()}))}();
//# sourceMappingURL=03-promises.f46ae758.js.map