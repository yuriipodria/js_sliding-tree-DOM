function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var t,r=document.querySelectorAll("li");function n(e){var t=e.target.nextElementSibling;t.style.display?t.style.display="":t.style.display="none"}(r=((function(t){if(Array.isArray(t))return e(t)})(t=r)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(t,r){if(t){if("string"==typeof t)return e(t,void 0);var n=Object.prototype.toString.call(t).slice(8,-1);if("Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return e(t,void 0)}}(t)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).filter(function(e){return e.querySelector("ul")})).forEach(function(e){var t=e.firstChild,r=document.createElement("span");r.className="list-header",r.appendChild(document.createTextNode(t.nodeValue)),e.replaceChild(r,t)}),(r=document.querySelectorAll(".list-header")).forEach(function(e){e.addEventListener("click",n)});
//# sourceMappingURL=index.ca090a7d.js.map