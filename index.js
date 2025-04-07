import{A as E,S as y,N as w,K as B,M as k,a as x,b as I,i as A}from"./assets/vendor-SJvudjR_.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function o(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=o(n);fetch(n.href,s)}})();const q="/project-web_undefined/assets/header_logo@1x-BcRfU5S5.png",P="/project-web_undefined/assets/header_logo@2x-9C1GhDcy.png",L={header:{srcset:P,src:q}};document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".header-image").forEach(r=>{r.srcset=L.header.srcset,r.src=L.header.src});const e=document.querySelector(".header-burger-button"),t=document.querySelector(".header-mobile-menu-close-button"),o=document.querySelector(".header-mobile-menu-background"),i=document.querySelectorAll(".header-mobile-menu-link"),n=document.querySelector(".header-mobile-menu-order-button"),s=document.querySelector(".header-navbar-button"),c=document.querySelector(".tittle-menu"),a=document.querySelector(".header-desk-menu-list"),d=document.querySelectorAll(".header-desk-menu-link");function h(){o.classList.add("is-open"),document.body.style.overflow="hidden"}function l(){o.classList.remove("is-open"),document.body.style.overflow=""}e&&e.addEventListener("click",h),t&&t.addEventListener("click",l),i.forEach(r=>{r.addEventListener("click",p=>{p.preventDefault();const f=document.getElementById(r.getAttribute("href").substring(1));f&&f.scrollIntoView({behavior:"smooth",block:"start"}),l()})}),o&&o.addEventListener("click",r=>{r.target.closest(".header-mobile-menu-wrapper")||l()});function u(){a.classList.remove("is-open")}c&&c.addEventListener("click",()=>{a.classList.toggle("is-open")}),d.forEach(r=>{r.addEventListener("click",p=>{p.preventDefault();const f=document.getElementById(r.getAttribute("href").substring(1));f&&f.scrollIntoView({behavior:"smooth",block:"start"}),u()})}),document.addEventListener("click",r=>{!r.target.closest(".header-desk-menu-list")&&!r.target.closest(".tittle-menu")&&u()}),document.addEventListener("keydown",r=>{r.key==="Escape"&&(l(),u())});function m(r){const p=document.getElementById(r);p&&p.scrollIntoView({behavior:"smooth",block:"start"})}n&&n.addEventListener("click",r=>{r.preventDefault(),m("form-foot"),l()}),s&&s.addEventListener("click",r=>{r.preventDefault(),m("footer")})});document.addEventListener("DOMContentLoaded",()=>{[...document.querySelectorAll(".accordion-el")].forEach(t=>{if(t.classList.contains("is-active")){const o=t.querySelector(".arrow-top");o&&(o.style.transform="rotate(0deg)")}}),new E(".description-list",{openOnInit:[0],duration:400,showMultiple:!1,onOpen:t=>{const o=t.querySelector(".arrow-top");o&&(o.style.transform="rotate(0deg)")},onClose:t=>{const o=t.querySelector(".arrow-top");o&&(o.style.transform="rotate(180deg)")}}),new y(".a-m-swiper",{direction:"horizontal",loop:!0,loopAdditionalSlides:1,slidesPerGroup:1,modules:[w],slidesPerView:2,navigation:{nextEl:".swiper-button-next"},breakpoints:{375:{slidesPerGroup:1,slidesPerView:2},768:{slidesPerGroup:1,slidesPerView:3},1440:{slidesPerGroup:1,slidesPerView:6}}})});const v=document.querySelector(".projects-prev-btn"),g=document.querySelector(".projects-next-btn");new y(".projects-swiper",{modules:[w,B,k,x],direction:"horizontal",speed:400,slidesPerView:1,spaceBetween:40,keyboard:{enabled:!0,onlyInViewport:!1},mousewheel:{forceToAxis:!0},navigation:{nextEl:".projects-next-btn",prevEl:".projects-prev-btn"},a11y:{enabled:!0,prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide"},on:{init:function(){S(this)},slideChange:function(){S(this)}}});function S(e){e.isBeginning?(v.classList.add("projects-btn-disabled"),v.disabled=!0):(v.classList.remove("projects-btn-disabled"),v.disabled=!1),e.isEnd?(g.classList.add("projects-btn-disabled"),g.disabled=!0):(g.classList.remove("projects-btn-disabled"),g.disabled=!1)}document.addEventListener("DOMContentLoaded",()=>{new E(".accordion-container",{duration:300,showMultiple:!0,openOnInit:[]}),document.querySelectorAll(".ac").forEach(t=>{const o=t.querySelector(".close-accordion-btn"),i=o==null?void 0:o.querySelector(".arrow-top");o&&i&&o.addEventListener("click",()=>{setTimeout(()=>{t.classList.contains("is-active")?i.style.transform="rotate(0deg)":i.style.transform="rotate(180deg)"},300)})})});document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".covers-line").forEach(n=>{let s=n.cloneNode(!0);s.classList.add("cloned-line");const c=s.querySelectorAll("li");s.prepend(c[c.length-1].cloneNode(!0)),s.prepend(c[c.length-2].cloneNode(!0)),document.querySelector(".cloned-lines").appendChild(s)});const t=document.querySelector(".covers-section"),o=document.querySelector(".covers-content"),i=new IntersectionObserver(n=>{n.forEach(s=>{s.isIntersecting?o.style.animationPlayState="running":o.style.animationPlayState="paused"})},{threshold:.2});t&&i.observe(t)});const C="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABOSURBVHgBzZLLDQAgCEOJE7H/Eo7gKKh3wJrGSBNOvEL4iJSRmfUVCnC62SgxsiJHJgOQBiEImz3DtdkpkpqbvBA1ArVE6oz0I9Gv/E0TMz3NWV1lPHoAAAAASUVORK5CYII=",M="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEpSURBVHgBrZXtEcIgDIZTzp5/3URHcSPpJLpBXcVd+FPwiqQt1y+SUNv3DuUkvA+0SQQg5Jx7WOt8zsBYyudEmXsPuijg3bbtB1ipa/jQYQ+UZVmBpHjyprEvyBTGSjf52zwbssdchBxhTkI4c2vtTTJMxcwgw6RObZReXDycMSYBcTWuQX/6RqcMQpCmIOPNHbG30SKAgkjmU8AJBJ3PpQ5GOO2KCYVFGEaFa9J+EbCEDIAsc5SCTCkFPjWXlHWD2Jvw5MNP2b1HBEzN42OZvhMRwmURly1cCvfrszSlC41PxR6SKjQs3g4Qg6z9PpdBxsitIhWDXrPDcZCtWplHHQEhzY+AiOZ7IJz5qg5iWygK/wjfFwD+T18pdfXe37e0j07jTeTBPZYfWztI8097RKsAAAAASUVORK5CYII=",b={reviewsSectionBox:document.querySelector(".swiper"),reviewsListBox:document.querySelector(".reviews-list")};async function O(){const e="https://portfolio-js.b.goit.study/api/reviews",t={};try{return await I.get(e,t).then(i=>{const n=R(i.data);return b.reviewsListBox.innerHTML=n})}catch(o){D(o),b.reviewsSectionBox.innerHTML='<p class="reviews-not-found">Not Found</p>'}}const j={messageColor:"#FAFAFB",messageSize:"16px",backgroundColor:"#EF4040",iconUrl:M,close:!1,buttons:[[`<button><img src = "${C}"/></button>`,function(e,t){e.hide({transitionOut:"fadeOut"},t,"button")},!0]],transitionIn:"bounceInLeft",position:"topRight",displayMode:"replace",closeOnClick:!0};function D(e){const t={rootMargin:"0px",threshold:1};new IntersectionObserver(i=>{i[0].isIntersecting&&A.show({...j,message:`Sorry! ${e}`})},t).observe(b.reviewsSectionBox)}function R(e){return e.map(({author:o,avatar_url:i,review:n,_id:s})=>`<li class="review-item swiper-slide">
          <img
            width="48px"
            height="48px"
            src="${i}"
            srcset="${i}"
            alt="Reviewer photo"
            class="review-photo"
          />
          <div class="review-info">
            <h3 class="review-author">${o}</h3>
            <p class="review-text">${n}</p>
          </div>
        </li>`).join(" ")}O();function V(){new y(".swiper",{speed:1e3,spaceBetween:16,autoHeight:!0,centeredSlidesBounds:!0,breakpoints:{320:{slidesPerView:1,slidesPerGroup:1},768:{slidesPerView:2,slidesPerGroup:1,autoHeight:!1},1440:{slidesPerView:4,slidesPerGroup:1,autoHeight:!1}},direction:"horizontal",modules:[w,B],navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0},mousewheel:{enabled:!0}})}V();document.addEventListener("DOMContentLoaded",function(){const e={form:document.querySelector(".work-together-form"),emailInput:document.querySelector("#email"),textInput:document.querySelector("#text"),submitButton:document.querySelector(".work-together-send-contact-btn"),modalBackdrop:document.querySelector(".work-together-backdrop"),modalBtn:document.querySelector(".work-together-modal-btn"),footerModal:document.querySelector(".work-together-modal")},t=document.createElement("p");t.classList.add("email-message"),e.emailInput.insertAdjacentElement("afterend",t);function o(){/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(e.emailInput.value)?(e.emailInput.classList.add("valid"),e.emailInput.classList.remove("invalid"),t.textContent="Success!",t.style.color="#3cbc81"):(e.emailInput.classList.add("invalid"),e.emailInput.classList.remove("valid"),t.textContent="Invalid email, try again",t.style.color="#e74a3b")}function i(){const d="...";e.textInput.value.length>50&&(e.textInput.value=e.textInput.value.substring(0,50-d.length)+d)}function n(){e.modalBackdrop.classList.add("is-open"),e.footerModal.classList.add("is-open"),document.body.classList.add("modal-open"),document.addEventListener("keydown",c)}function s(){e.modalBackdrop.classList.remove("is-open"),e.footerModal.classList.remove("is-open"),document.body.classList.remove("modal-open"),document.removeEventListener("keydown",c)}function c(a){a.key==="Escape"&&s()}e.emailInput.addEventListener("input",o),e.textInput.addEventListener("input",i),e.form.addEventListener("submit",async function(a){var l,u;if(a.preventDefault(),!e.emailInput.classList.contains("valid")){A.error({title:"Error",message:"Please enter a valid email."});return}const d={email:e.emailInput.value,comment:e.textInput.value},h="https://portfolio-js.b.goit.study/api/requests";try{(await I.post(h,d,{headers:{"Content-Type":"application/json"}})).status===201?(n(),e.form.reset(),e.emailInput.classList.remove("valid","invalid"),t.textContent="",A.success({title:"Success",message:"Your request has been submitted successfully!"})):A.error({title:"Error",message:"There was an error submitting your request."})}catch(m){const r=((u=(l=m.response)==null?void 0:l.data)==null?void 0:u.message)||"Network error. Please try again later.";A.error({title:"Error",message:r}),console.error(m)}}),e.modalBtn.addEventListener("click",s),e.modalBackdrop.addEventListener("click",function(a){a.target===e.modalBackdrop&&s()})});
//# sourceMappingURL=index.js.map
