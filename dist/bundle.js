(()=>{"use strict";const e=function(){var e=document.body;e.classList.toggle("lock");var t=function(){var e=document.createElement("div");e.style.width="500px",e.style.height="500px",e.style.overflowY="scroll",e.style.visibility="hidden",document.body.appendChild(e);var t=e.offsetWidth-e.clientWidth;return e.remove(),t}();e.classList.contains("lock")?e.style.marginRight="".concat(t,"px"):e.style.marginRight="0"},t=function(){document.querySelector(".popup-dialog-menu").classList.toggle("active")},r=function(r,n){document.querySelector(".popup-dialog-menu.active")&&t(),r.classList.toggle("open"),e(),n&&n()},n=function(e,t){var r,n=performance.now(),i=e.getBoundingClientRect().top,o=document.documentElement.scrollTop,s=0;!function e(){var a=performance.now();(s=(a-n)/t)<=1?(document.documentElement.scrollTop=o+i*s,r=requestAnimationFrame(e)):(document.documentElement.scrollTop=o+i,cancelAnimationFrame(r))}()},i=function(t,n){var i=document.querySelectorAll(".popup.open");i.length>0&&i.forEach((function(e){return r(e)})),t.classList.toggle("open"),e(),n&&n()};function o(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?s(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,l=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return a=e.done,e},e:function(e){l=!0,o=e},f:function(){try{a||null==r.return||r.return()}finally{if(l)throw o}}}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const a=function(e,t,r){for(var n=arguments.length,o=new Array(n>3?n-3:0),s=3;s<n;s++)o[s-3]=arguments[s];var a=document.querySelectorAll(e),l=document.querySelector(t);a.length>0&&a.forEach((function(e){e.addEventListener("click",(function(e){console.log(),e.preventDefault(),i.apply(void 0,[l,r].concat(o))}))}))};function l(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=d(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,a=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return s=e.done,e},e:function(e){a=!0,o=e},f:function(){try{s||null==r.return||r.return()}finally{if(a)throw o}}}}function c(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||d(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){if(e){if("string"==typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(e,t):void 0}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function h(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}const p=function(){function e(t){var r=this,n=t.main,i=void 0===n?".glo-slider":n,o=t.wrapper,s=void 0===o?"glo-slider__wrapper":o,a=t.position,l=void 0===a?0:a,d=t.slidesToShow,u=void 0===d?3:d,h=t.responsive,p=void 0===h?[]:h,v=t.arrowNext,f=t.arrowPrev,m=t.progress,y=void 0===m?{useProgress:!1}:m,w=t.maxWidth,g=void 0!==w&&w,S=t.addStyleDefault,b=void 0===S||S,_=t.useOverflow,k=void 0===_||_,x=t.preview,E=void 0===x?{usePreview:!1,previewContainer:"",previewItemClass:""}:x;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);try{if(this.main=document.querySelector(i),this.wrapper=document.querySelector(s),!this.main||!this.wrapper)throw"Not any sliders!";this.slides=c(document.querySelector(s).children),this.position=l,this.slidesToShow=u,this.slidesToShowDefault=u,this.responsive=p,this.slideWidth=Math.floor(100/this.slidesToShow),this.next=document.querySelector(v),this.prev=document.querySelector(f),this.rand=this.randomInteger(100,1e4),this.progress=y,this.psThis=this.prevSlide.bind(this),this.nxThis=this.nextSlide.bind(this),this.maxWidth=g,this.addStyleDefault=b,this.useOverflow=k,this.preview=E,this.maxWidth?(document.documentElement.clientWidth<this.maxWidth&&this.init(),window.addEventListener("resize",(function(){document.documentElement.clientWidth<r.maxWidth?r.init():r.deInit()}))):this.init()}catch(e){console.error(e)}}var t,r;return t=e,(r=[{key:"init",value:function(){this.addGloClass(),this.addStyleDefault&&this.addStyle(),this.next||this.prev||this.addArrows(),this.addControls(),0!==this.responsive.length&&this.responsiveInit(),this.progress.useProgress&&(this.totalField=document.querySelector(this.progress.total),this.currentField=document.querySelector(this.progress.current),this.totalField&&this.currentField?(this.setTotalField(),this.setCurrentField()):this.progress.useProgress=!1),this.preview.usePreview&&this.renderPreview()}},{key:"renderPreview",value:function(){var e=this,t=document.querySelector(this.preview.previewContainer);t.innerHTML="";try{this.slides.forEach((function(r,n){var i=r.querySelector("img").getAttribute("src"),o='<div class="'.concat(e.preview.previewItemClass,'" data-index="').concat(n,'">\n                                        <div class="preview-block__item-inner scand ').concat(e.position===n?"preview_active":"",'">Интерьер ').concat(n,'</div>\n                                        <img src="').concat(i,'" alt="" style="width: 100%; height: 100%">\n                                    </div>');t.insertAdjacentHTML("beforeend",o)}))}catch(e){console.error(e)}}},{key:"setCurrentField",value:function(){this.currentField.innerText="".concat(this.position+1)}},{key:"setTotalField",value:function(){this.totalField.innerText=this.slides.length}},{key:"addGloClass",value:function(){this.main.classList.add("glo-slider"+this.rand),this.wrapper.classList.add("glo-slider__wrapper"+this.rand);var e,t=l(this.slides);try{for(t.s();!(e=t.n()).done;)e.value.classList.add("glo-slider__item"+this.rand)}catch(e){t.e(e)}finally{t.f()}}},{key:"removeGloClass",value:function(){this.main.classList.remove("glo-slider"+this.rand),this.wrapper.classList.remove("glo-slider__wrapper"+this.rand);var e,t=l(this.slides);try{for(t.s();!(e=t.n()).done;)e.value.classList.remove("glo-slider__item"+this.rand)}catch(e){t.e(e)}finally{t.f()}}},{key:"responsiveInit",value:function(){var e=this,t=new Map;this.responsive.forEach((function(e){t.set(e.breakpoint,e.slidesToShow)}));var r=Math.max.apply(Math,c(t.keys())),n=function(){var n=document.documentElement.clientWidth;if(n<r){var i,o=l(t.keys());try{for(o.s();!(i=o.n()).done;){var s=i.value;n<s&&(e.slidesToShow=t.get(s),e.slideWidth=Math.floor(100/e.slidesToShow),e.addStyle())}}catch(e){o.e(e)}finally{o.f()}}else e.slidesToShow=e.slidesToShowDefault,e.slideWidth=Math.floor(100/e.slidesToShow),e.addStyle()};n(),window.addEventListener("resize",n)}},{key:"addStyle",value:function(){var e=document.getElementById("gloSliderStyle"+this.rand);e||((e=document.createElement("style")).id="gloSliderStyle"+this.rand);var t="";this.useOverflow&&(t+="\n            .glo-slider".concat(this.rand,"{\n                overflow: hidden;\n            }\n            ")),t+="\n            .glo-slider__wrapper".concat(this.rand,"{\n                display: flex;\n                flex-wrap: nowrap;\n                transition: transform 0.5s !important;\n                will-change: transform !important;\n\n            }\n            .glo-slider__item").concat(this.rand,"{\n                flex: 0 0 ").concat(this.slideWidth,"% !important;\n                display: flex !important;;\n                align-items: center !important;;\n                justify-content: center !important;;\n                margin: auto 0 !important;\n            }\n        "),e.textContent=t,document.head.appendChild(e)}},{key:"goToPosition",value:function(e){e>=0&&e<this.slides.length&&(e>this.position?(this.position=e-1,this.nextSlide()):e<this.position&&(this.position=e+1,this.prevSlide()))}},{key:"nextSlide",value:function(){this.position+this.slidesToShow<this.slides.length&&(this.wrapper.style.transform="translateX(".concat(-++this.position*this.slideWidth,"%)"),this.progress.useProgress&&this.setCurrentField())}},{key:"prevSlide",value:function(){this.position>0&&(this.wrapper.style.transform="translateX(-".concat(--this.position*this.slideWidth,"%)"),this.progress.useProgress&&this.setCurrentField())}},{key:"addArrows",value:function(){this.prev=document.createElement("button"),this.next=document.createElement("button"),this.prev.classList.add("glo-button__prev"+this.rand),this.next.classList.add("glo-button__next"+this.rand),this.main.appendChild(this.prev),this.main.appendChild(this.next);var e=document.createElement("style");e.textContent="\n            .glo-button__prev".concat(this.rand,",\n            .glo-button__next").concat(this.rand,"{\n                width: 40px;\n                height: 40px;\n                margin: 5px 20px;\n                padding: 0;\n                border-top: 5px solid #19b5fe;\n                border-bottom: none;\n                background: transparent;\n            }\n            .glo-button__prev").concat(this.rand,"{\n                transform: rotate(-45deg);\n                border-left: 5px solid #19b5fe;\n                border-right: none;\n            }\n            .glo-button__next").concat(this.rand,"{\n                transform: rotate(45deg);\n                border-right: 5px solid #19b5fe;\n                border-left: none;\n\n            }\n            .glo-button__prev").concat(this.rand,":hover,\n            .glo-button__next").concat(this.rand,":hover,\n            .glo-button__prev").concat(this.rand,":focus,\n            .glo-button__next").concat(this.rand,":focus{\n                background: transparent;\n                outline: none;\n            }\n        "),document.head.appendChild(e)}},{key:"addControls",value:function(){var e=this;this.prev.addEventListener("click",this.psThis),this.next.addEventListener("click",this.nxThis),this.preview.usePreview&&document.querySelector(this.preview.previewContainer).addEventListener("click",(function(t){var r=t.target.closest(".".concat(e.preview.previewItemClass));if(r){var n=+r.dataset.index;e.goToPosition(n)}}))}},{key:"deInit",value:function(){this.prev.removeEventListener("click",this.psThis),this.next.removeEventListener("click",this.nxThis),this.wrapper.style.transform="translateX(0)";var e=document.getElementById("gloSliderStyle"+this.rand);e&&e.remove(),this.removeGloClass()}},{key:"randomInteger",value:function(e,t){var r=e-.5+Math.random()*(t-e+1);return Math.round(r)}}])&&h(t.prototype,r),e}();function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}const m=function(){function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];v(this,e),this.form=t,this.elements=r,this.errors=new Set}var t,r;return t=e,(r=[{key:"init",value:function(){var e=this;return this.elements.forEach((function(t){e.checkIt(t)})),!!this.getErrorsCount()&&(this.showErrors(),this.getErrors())}},{key:"getErrors",value:function(){return this.errors}},{key:"cleanErrors",value:function(){this.errors.clear()}},{key:"getErrorsCount",value:function(){return this.errors.size}},{key:"showErrors",value:function(){this.errors.forEach((function(e){e.element.style.border="2px solid red",setTimeout((function(){e.element.style.border=""}),2e3)}))}},{key:"checkIt",value:function(e){var t=e.element,r=e.pattern,n=e.method,i=e.type,o=void 0===i?"text":i;if("text"===o){if(r){var s=t.value;r.test(s)||this.errors.add({element:t,pattern:r,method:n})}else if(n){var a=t.value;this.getPattern(n)&&!this.getPattern(n).test(a)&&this.errors.add({element:t,pattern:r,method:n})}}else"checkbox"===o&&(t.checked||this.errors.add({element:t}))}},{key:"getPattern",value:function(e){return{email:new RegExp("^[a-z0-9-_.]{2,30}@[a-z]{2,10}.[a-z]{2,5}$","i"),phone:new RegExp("^[+]?[0-9]{7,11}$","i"),name:new RegExp("^[а-яё]{2,20}$","i"),message:new RegExp("[а-яё0-9.,:!?; -]","ig")}[e]}}])&&f(t.prototype,r),e}(),y=function(e){var t=e.icon,r=e.item,n=e.popup,i=document.querySelectorAll(t),o=document.querySelectorAll(r),s=function(e){var t=e.target,i=t.closest(r),o=t.querySelector(n),s=o.getBoundingClientRect().top,a=o.getBoundingClientRect().bottom;i.style.opacity="1",(s<0||a>document.documentElement.clientHeight)&&o.classList.add("popup-reverted"),i.classList.add("active-item"),i.style.zIndex="111",o.style.zIndex="111"},a=function(e){var t=e.target,i=t.querySelectorAll(n),s=t.closest(r);i.forEach((function(e){e.classList.contains("popup-reverted")&&e.classList.remove("popup-reverted")})),o.forEach((function(e){e.classList.contains("active-item")&&e.classList.remove("active-item")})),s.style.opacity="0.4"};i.forEach((function(e){e.addEventListener("mouseenter",s)})),i.forEach((function(e){e.addEventListener("mouseleave",a)}))};function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function g(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}const S=function(){function e(t){var r,n=t.slider,i=t.wrapper,o=t.arrowNext,s=t.arrowPrev,a=t.total,l=void 0!==a&&a,c=t.current,d=void 0!==c&&c,u=t.slideToShow,h=void 0===u?1:u,p=t.hideArrows,v=void 0!==p&&p,f=t.position,m=void 0===f?0:f,y=t.connectionElements,g=void 0!==y&&y;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.slider=document.querySelector(n),this.wrapper=document.querySelector(i),this.slides=function(e){if(Array.isArray(e))return w(e)}(r=document.querySelector(i).children)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(r)||function(e,t){if(e){if("string"==typeof e)return w(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?w(e,t):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),this.arrowNext=document.querySelector(o),this.arrowPrev=document.querySelector(s),this.position=m,this.hideArrows=v,l&&(this.total=this.slider.querySelector(l)),d&&(this.current=this.slider.querySelector(d)),this.currentSlide=0,this.slideToShow=h,g&&(this.connectionElements=document.querySelectorAll(g))}var t,r;return t=e,(r=[{key:"init",value:function(){var e=this;this.slides.forEach((function(t,r){r<e.slideToShow&&(e.slides[r].classList.add("active"),e.connectionElements&&e.connectionElements[r].classList.add("active"))})),this.writeTotal(),this.addListeners(),this.checkPrevSlide()||this.hidePrevArrow(),this.checkNextSlide()||this.hideNextArrow(),this.arrowPrev.style.zIndex="10000",this.arrowNext.style.zIndex="10000"}},{key:"writeTotal",value:function(){this.total&&(this.total.textContent="".concat(this.slides.length)),this.current&&(this.current.textContent="".concat(this.currentSlide+1))}},{key:"checkSlideNumber",value:function(){this.currentSlide<0?this.currentSlide=this.slides.length-1:this.currentSlide>=this.slides.length&&(this.currentSlide=0)}},{key:"checkNextSlide",value:function(){return this.currentSlide+this.slideToShow<this.slides.length}},{key:"checkPrevSlide",value:function(){return this.currentSlide>0}},{key:"hideNextArrow",value:function(){this.hideArrows&&(this.arrowNext.style.opacity="0")}},{key:"hidePrevArrow",value:function(){this.hideArrows&&(this.arrowPrev.style.opacity="0")}},{key:"showNextArrow",value:function(){this.arrowNext.style.opacity="1"}},{key:"showPrevArrow",value:function(){this.arrowPrev.style.opacity="1"}},{key:"nextSlide",value:function(){this.checkNextSlide()&&(this.slides[this.currentSlide].classList.remove("active"),this.connectionElements&&this.connectionElements[this.currentSlide].classList.remove("active"),++this.currentSlide,this.slides[this.currentSlide+this.slideToShow-1].classList.add("active"),this.connectionElements&&this.connectionElements[this.currentSlide+this.slideToShow-1].classList.add("active"),this.checkNextSlide()||this.hideNextArrow(),this.showPrevArrow(),this.writeTotal())}},{key:"prevSlide",value:function(){this.checkPrevSlide()&&(this.slides[this.currentSlide+this.slideToShow-1].classList.remove("active"),this.connectionElements&&this.connectionElements[this.currentSlide+this.slideToShow-1].classList.remove("active"),--this.currentSlide,this.checkSlideNumber(),this.slides[this.currentSlide].classList.add("active"),this.connectionElements&&this.connectionElements[this.currentSlide].classList.add("active"),this.checkPrevSlide()||this.hidePrevArrow(),this.showNextArrow(),this.writeTotal())}},{key:"addListeners",value:function(){var e=this;this.arrowNext.addEventListener("click",(function(t){e.nextSlide(),e.writeTotal()})),this.arrowPrev.addEventListener("click",(function(t){e.prevSlide(),e.writeTotal()}))}}])&&g(t.prototype,r),e}();function b(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=k(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,a=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return s=e.done,e},e:function(e){a=!0,o=e},f:function(){try{s||null==r.return||r.return()}finally{if(a)throw o}}}}function _(e){return function(e){if(Array.isArray(e))return x(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||k(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(e,t){if(e){if("string"==typeof e)return x(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?x(e,t):void 0}}function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function E(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}const T=function(){function e(t){var r=t.main,n=void 0===r?".glo-slider":r,i=t.wrapper,o=void 0===i?"glo-slider__wrapper":i,s=t.position,a=void 0===s?0:s,l=t.slidesToShow,c=void 0===l?3:l,d=t.responsive,u=void 0===d?[]:d,h=t.arrowNext,p=t.arrowPrev,v=t.maxWidth,f=void 0!==v&&v,m=t.addStyleDefault,y=void 0===m||m,w=t.variableWidth,g=void 0!==w&&w;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);try{if(this.main=document.querySelector(n),this.wrapper=document.querySelector(o),!this.main||!this.wrapper)throw"Not any sliders!";this.slides=_(document.querySelector(o).children),this.position=a,this.slidesToShow=c,this.slidesToShowDefault=c,this.responsive=u,this.slideWidth=Math.floor(100/this.slidesToShow),this.next=document.querySelector(h),this.prev=document.querySelector(p),this.rand=this.randomInteger(100,1e4),this.psThis=this.prevSlide.bind(this),this.nxThis=this.nextSlide.bind(this),this.maxWidth=f,this.addStyleDefault=y,this.variableWidth=g,this.currentScroll=0,this.init()}catch(e){console.error(e)}}var t,r;return t=e,(r=[{key:"init",value:function(){this.addGloClass(),this.addControls(),0!==this.responsive.length&&this.responsiveInit()}},{key:"addGloClass",value:function(){this.main.classList.add("glo-slider"+this.rand),this.wrapper.classList.add("glo-slider__wrapper"+this.rand);var e,t=b(this.slides);try{for(t.s();!(e=t.n()).done;)e.value.classList.add("glo-slider__item"+this.rand)}catch(e){t.e(e)}finally{t.f()}}},{key:"removeGloClass",value:function(){this.main.classList.remove("glo-slider"+this.rand),this.wrapper.classList.remove("glo-slider__wrapper"+this.rand);var e,t=b(this.slides);try{for(t.s();!(e=t.n()).done;)e.value.classList.remove("glo-slider__item"+this.rand)}catch(e){t.e(e)}finally{t.f()}}},{key:"responsiveInit",value:function(){var e=this,t=new Map;this.responsive.forEach((function(e){t.set(e.breakpoint,e.slidesToShow)}));var r=Math.max.apply(Math,_(t.keys())),n=function(){var n=document.documentElement.clientWidth;if(n<r){var i,o=b(t.keys());try{for(o.s();!(i=o.n()).done;){var s=i.value;n<s&&(e.slidesToShow=t.get(s),e.wrapper.style.transform="translateX(0)",e.position=0,e.currentScroll=0)}}catch(e){o.e(e)}finally{o.f()}}else e.slidesToShow=e.slidesToShowDefault,e.wrapper.style.transform="translateX(0)",e.position=0,e.currentScroll=0};n(),window.addEventListener("resize",n)}},{key:"getOffsetLastSlide",value:function(){var e=parseInt(getComputedStyle(this.main).width),t=parseInt(getComputedStyle(this.slides[this.slides.length-1]).width);return e+this.main.getBoundingClientRect().left-this.slides[this.slides.length-1].getBoundingClientRect().left-t}},{key:"nextSlide",value:function(){if(this.position+this.slidesToShow<this.slides.length){if(++this.position,this.variableWidth){var e=this.main.getBoundingClientRect().left,t=this.slides[this.position].getBoundingClientRect().left-e+this.currentScroll;this.wrapper.style.transform="translateX(".concat(-t,"px)"),this.currentScroll=t}}else if(this.getOffsetLastSlide()<0){var r=this.currentScroll+Math.abs(this.getOffsetLastSlide());this.wrapper.style.transform="translateX(".concat(-r,"px)")}}},{key:"prevSlide",value:function(){if(this.position>0){--this.position;var e=this.wrapper.getBoundingClientRect().left,t=this.slides[this.position].getBoundingClientRect().left,r=Math.abs(e)-Math.abs(t);this.wrapper.style.transform="translateX(".concat(-r,"px)"),this.currentScroll=r}}},{key:"addControls",value:function(){this.prev.addEventListener("click",this.psThis),this.next.addEventListener("click",this.nxThis)}},{key:"deInit",value:function(){this.prev.removeEventListener("click",this.psThis),this.next.removeEventListener("click",this.nxThis),this.wrapper.style.transform="translateX(0)",this.removeGloClass()}},{key:"randomInteger",value:function(e,t){var r=e-.5+Math.random()*(t-e+1);return Math.round(r)}}])&&E(t.prototype,r),e}();var L,A,q,C,P,I,N,W,O,j,M,R,D,B,F,z,X;D=document.querySelector(".header-contacts-wrap"),B=document.querySelector(".header-contacts__phone-number-accord a"),F=document.querySelector(".header-contacts__arrow"),z=document.querySelector(".header-contacts__phone-number-accord"),X=document.querySelector(".header-contacts__phone-number-wrap"),F.addEventListener("click",(function(){D.classList.contains(".header-contacts__wrap-opened")?(z.style.top="0",F.style.transform="rotate(0deg)",B.style.opacity="0",D.classList.remove(".header-contacts__wrap-opened")):(z.style.top=getComputedStyle(X).height,F.style.transform="rotate(180deg)",B.style.opacity="1",D.classList.add(".header-contacts__wrap-opened"))})),M=document.querySelectorAll(".menu__icon"),R=document.querySelector(".popup.popup-menu"),document.querySelector(".popup-dialog-menu"),M.forEach((function(e){e.addEventListener("click",(function(e){i(R,t)}))})),R.addEventListener("click",(function(e){var t=e.target.closest(".popup-menu-nav__item");if(t){e.preventDefault();var i=t.querySelector("a").getAttribute("href").slice(1),o=document.getElementById(i);n(o,200),r(R)}})),document.addEventListener("click",(function(e){var t=e.target,n=t.closest(".popup");if(n)if(t.closest(".popup-content")){var i=t.closest(".close");i&&r(i.closest(".popup"))}else r(n)})),document.addEventListener("keydown",(function(e){if("Escape"===e.key){var t=document.querySelector(".popup.open");t&&r(t)}})),(j=document.querySelector(".button-footer")).addEventListener("click",(function(e){e.preventDefault();var t=j.querySelector("a").getAttribute("href").slice(1),r=document.getElementById(t);n(r,500)})),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"+7 (___) ___-__-__",r=document.querySelectorAll(e);function n(e){var r=e.keyCode,n=t,i=n.replace(/\D/g,""),o=this.value.replace(/\D/g,""),s=0,a=n.replace(/[_\d]/g,(function(e){return s<o.length?o.charAt(s++)||i.charAt(s):e}));-1!=(s=a.indexOf("_"))&&(a=a.slice(0,s));var l=n.substr(0,this.value.length).replace(/_+/g,(function(e){return"\\d{1,"+e.length+"}"})).replace(/[+()]/g,"\\$&");(!(l=new RegExp("^"+l+"$")).test(this.value)||this.value.length<5||r>47&&r<58)&&(this.value=a),"blur"==e.type&&this.value.length<5&&(this.value="")}var i,s=o(r);try{for(s.s();!(i=s.n()).done;){var a=i.value;a.addEventListener("input",n),a.addEventListener("focus",n),a.addEventListener("blur",n)}}catch(e){s.e(e)}finally{s.f()}}("input[name=phone]"),a(".link-privacy",".popup-privacy"),a(".link-list",".popup-repair-types"),a(".button_wide",".popup-consultation"),a(".transparency-item",".popup-transparency",(function(){document.querySelector(".popup-transparency-slider");var e=document.querySelector(".popup-transparency-slider-wrap"),t=document.querySelectorAll(".popup-transparency-slider__slide"),r=document.getElementById("transparency_right"),n=document.getElementById("transparency_left"),i=e.querySelector(".slider-counter-content__total"),o=e.querySelector(".slider-counter-content__current"),s=0;t[s].classList.add("active"),i.textContent="".concat(t.length),o.textContent="".concat(s+1);var a=function(){s<0?s=t.length-1:s>=t.length&&(s=0)},l=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];t[s].classList.remove("active"),e?s++:s--,a(),t[s].classList.add("active")};r.addEventListener("click",(function(e){l(!0),o.textContent="".concat(s+1)})),n.addEventListener("click",(function(e){l(!1),o.textContent="".concat(s+1)}))})),I=document.querySelectorAll(".feedback-block__form"),N=document.querySelectorAll(".feedback__form"),W=document.querySelector(".popup.popup-thank"),O=function(e,t){e.addEventListener("submit",(function(r){r.preventDefault();var n=new FormData(e),o={};n.forEach((function(e,t){return o[t]=e})),t.init()?(t.getErrors().forEach((function(t,r,n){if("checkbox"===t.element.type){var i=e.querySelector(".checkbox__descr");i.style.cssText="color: #bf0d0d; font-size: 16px; font-weight: bold",setTimeout((function(){i.style.cssText=""}),2e3)}})),t.cleanErrors()):function(e){return fetch("./server.php",{body:e,method:"POST"})}(JSON.stringify(o)).then((function(e){if(200!==e.status)throw new Error("status not 200");i(W)})).then((function(){setTimeout((function(){r.target.reset()}),2e3)})).catch((function(e){console.error(e)}))}))},I.forEach((function(e){var t=e.querySelector(".feedback-block__form-input_name"),r=e.querySelector(".feedback-block__form-input_phone"),n=e.querySelector(".checkbox__input");O(e,new m(e,[{element:t,method:"name"},{element:r,pattern:new RegExp("[0-9()+ ]","ig")},{element:n,type:"checkbox"}]))})),N.forEach((function(e){var t=e.querySelector("input[name=phone]"),r=e.querySelector(".checkbox__input");O(e,new m(e,[{element:t,pattern:new RegExp("[0-9()+ ]","ig")},{element:r,type:"checkbox"}]))})),y({icon:".formula-item__icon",item:".formula-item",popup:".formula-item-popup"}),y({icon:".problems-item__icon",item:".problems-item",popup:".problems-item-popup"}),A=document.querySelectorAll(".types-repair-item"),q=document.querySelector(".repair-types-tab"),C=document.querySelectorAll(".repair-types-nav__item"),P=new p({main:".repair-types-slider",wrapper:".types-repair1",slidesToShow:1,arrowNext:"#repair-types-arrow_right",arrowPrev:"#repair-types-arrow_left",progress:{useProgress:!0,total:".slider-counter-content__total",current:".slider-counter-content__current"},preview:{usePreview:!1}}),q.addEventListener("click",(function(e){var t=e.target;t.closest(".repair-types-nav__item")&&C.forEach((function(e,r){e===t?(A[r].style.display="flex",e.classList.add("active"),P.deInit(),P=new p({main:".repair-types-slider",wrapper:".types-repair".concat(r+1),slidesToShow:1,arrowNext:"#repair-types-arrow_right",arrowPrev:"#repair-types-arrow_left",position:0,progress:{useProgress:!0,total:".slider-counter-content__total",current:".slider-counter-content__current"}})):(A[r].style.display="none",e.classList.remove("active"))}))})),new p({main:".transparency-slider-wrap",wrapper:".transparency-slider",slidesToShow:1,arrowPrev:".transparency-slider-wrap .slider-arrow_left",arrowNext:".transparency-slider-wrap .slider-arrow_right",maxWidth:1024}),function(){new S({slider:".portfolio-slider-wrap",wrapper:".portfolio-slider.mobile-hide",slideToShow:3,arrowNext:"#portfolio-arrow_right",arrowPrev:"#portfolio-arrow_left",hideArrows:!0}).init(),new S({slider:".portfolio-slider-wrap",wrapper:".portfolio-slider-mobile.tablet-hide.desktop-hide",slideToShow:1,arrowNext:"#portfolio-arrow-mobile_right",arrowPrev:"#portfolio-arrow-mobile_left",hideArrows:!0,total:".slider-counter-content__total",current:".slider-counter-content__current"}).init(),new S({slider:".popup-portfolio-slider-wrap",wrapper:".popup-portfolio-slider",slideToShow:1,arrowNext:"#popup_portfolio_right",arrowPrev:"#popup_portfolio_left",hideArrows:!0,total:".slider-counter-content__total",current:".slider-counter-content__current",connectionElements:".popup-portfolio-connection"}).init();var e=document.querySelector(".portfolio-slider-wrap"),t=document.querySelector(".popup-portfolio");e.addEventListener("click",(function(e){e.target.closest(".portfolio-popup-link")&&i(t)}))}(),new S({slider:".reviews-slider-wrap",wrapper:".reviews-slider",slidesToShow:1,arrowPrev:"#reviews-arrow_left",arrowNext:"#reviews-arrow_right",hideArrows:!0}).init(),function(){var e=document.querySelectorAll(".scheme-slider__slide"),t=document.querySelector(".sheme-button-slider"),r=document.querySelectorAll(".scheme-nav__item"),n=document.querySelectorAll(".scheme-description-block");t.addEventListener("click",(function(t){var i=t.target;i.closest(".scheme-nav__item")&&r.forEach((function(t,r){t===i?(e[r].style.display="block",n[r].classList.add("visible-content-block"),t.classList.add("active")):(e[r].style.display="none",n[r].classList.remove("visible-content-block"),t.classList.remove("active"))}))}))}(),(L=document.querySelector(".accordion")).querySelectorAll(".title_block"),L.addEventListener("click",(function(e){var t=e.target.closest(".title_block");t&&t.classList.toggle("msg-active")})),function(){var e=document.querySelectorAll("#designs .designs-slider__style-item"),t=document.querySelector("#designs .nav-wrap"),r=document.querySelectorAll("#designs .designs-nav__item"),n=new p({main:".designs-slider",wrapper:".designs-slider__style1",slidesToShow:1,arrowNext:"#design_right",arrowPrev:"#design_left",progress:{useProgress:!0,total:"#designs .slider-counter-content__total",current:"#designs .slider-counter-content__current"},preview:{usePreview:!0,previewContainer:"#designs .preview-block",previewItemClass:"preview-block__item"}});t.addEventListener("click",(function(t){var i=t.target;i.closest(".designs-nav__item")&&r.forEach((function(t,r){t===i?(e[r].style.display="flex",t.classList.add("active"),n.deInit(),n=new p({main:".designs-slider",wrapper:".designs-slider__style".concat(r+1),slidesToShow:1,arrowNext:"#design_right",arrowPrev:"#design_left",progress:{useProgress:!0,total:"#designs .slider-counter-content__total",current:"#designs .slider-counter-content__current"},preview:{usePreview:!0,previewContainer:"#designs .preview-block",previewItemClass:"preview-block__item"}})):(e[r].style.display="none",t.classList.remove("active"))}))})),new T({main:".nav.nav-designs",wrapper:".nav-list.nav-list-designs",slidesToShow:3,arrowPrev:"#nav-arrow-designs_left",arrowNext:"#nav-arrow-designs_right",maxWidth:1135,variableWidth:!0,responsive:[{breakpoint:1135,slidesToShow:3},{breakpoint:575,slidesToShow:1}]})}(),new p({main:".formula-slider-wrap",wrapper:".formula-slider",slidesToShow:3,arrowPrev:"#formula-arrow_left",arrowNext:"#formula-arrow_right",maxWidth:1024,useOverflow:!1,responsive:[{breakpoint:1024,slidesToShow:3},{breakpoint:767,slidesToShow:1}]}),new p({main:".problems-slider-wrap",wrapper:".problems-slider",slidesToShow:1,arrowPrev:"#problems-arrow_left",arrowNext:"#problems-arrow_right",maxWidth:1024,useOverflow:!1}),new T({main:".sheme-button-slider",wrapper:"#scheme-list",slidesToShow:3,arrowPrev:"#nav-arrow-scheme_left",arrowNext:"#nav-arrow-scheme_right",maxWidth:1024,variableWidth:!0,responsive:[{breakpoint:1024,slidesToShow:3},{breakpoint:575,slidesToShow:1}]}),new T({main:".repair-types-nav",wrapper:".nav-list-repair",slidesToShow:3,arrowPrev:".nav-arrow_left",arrowNext:".nav-arrow_right",maxWidth:1024,variableWidth:!0,responsive:[{breakpoint:1024,slidesToShow:3},{breakpoint:575,slidesToShow:1}]}),new p({main:"#partners .wrapper",wrapper:".partners-slider",slidesToShow:3,arrowPrev:"#partners-arrow_left",arrowNext:"#partners-arrow_right",responsive:[{breakpoint:1024,slidesToShow:3},{breakpoint:767,slidesToShow:1}]})})();