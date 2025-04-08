import{A as E,S as w,N as y,K as k,M as I,a as x,b as B,i as A}from"./assets/vendor-SJvudjR_.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();const q="/project-web_undefined/assets/header_logo@1x-BcRfU5S5.png",C="/project-web_undefined/assets/header_logo@2x-9C1GhDcy.png",S={header:{srcset:C,src:q}};document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".header-image").forEach(i=>{i.srcset=S.header.srcset,i.src=S.header.src});const e=document.querySelector(".header-burger-button"),t=document.querySelector(".header-mobile-menu-close-button"),s=document.querySelector(".header-mobile-menu-background"),r=document.querySelectorAll(".header-mobile-menu-link"),o=document.querySelector(".header-mobile-menu-order-button"),n=document.querySelector(".header-navbar-button"),c=document.querySelector(".header-title-menu"),a=document.querySelector(".header-desk-menu-list"),d=document.querySelectorAll(".header-desk-menu-link");function b(){s.classList.add("is-open"),document.body.style.overflow="hidden"}function l(){s.classList.remove("is-open"),document.body.style.overflow=""}e&&e.addEventListener("click",b),t&&t.addEventListener("click",l),r.forEach(i=>{i.addEventListener("click",p=>{p.preventDefault();const f=document.getElementById(i.getAttribute("href").substring(1));f&&f.scrollIntoView({behavior:"smooth",block:"start"}),l()})}),s&&s.addEventListener("click",i=>{i.target.closest(".header-mobile-menu-wrapper")||l()});function u(){a.classList.remove("is-open")}c&&c.addEventListener("click",()=>{a.classList.toggle("is-open")}),d.forEach(i=>{i.addEventListener("click",p=>{p.preventDefault();const f=document.getElementById(i.getAttribute("href").substring(1));f&&f.scrollIntoView({behavior:"smooth",block:"start"}),u()})}),document.addEventListener("click",i=>{!i.target.closest(".header-desk-menu-list")&&!i.target.closest(".header-title-menu")&&u()}),document.addEventListener("keydown",i=>{i.key==="Escape"&&(l(),u())});function m(i){const p=document.getElementById(i);p&&p.scrollIntoView({behavior:"smooth",block:"start"})}o&&o.addEventListener("click",i=>{i.preventDefault(),m("work-together"),l()}),n&&n.addEventListener("click",i=>{i.preventDefault(),m("work-together")})});document.addEventListener("DOMContentLoaded",()=>{M(),O(),P()});function M(){const e=(t,s)=>{const r=t.querySelector(".a-m-arrow-top");r&&(r.style.transform=`rotate(${s}deg)`)};new E(".description-list",{openOnInit:[0],duration:400,showMultiple:!1,onOpen:t=>e(t,0),onClose:t=>e(t,180)}),Array.from(document.querySelectorAll(".a-m-accordion-el")).filter(t=>t.classList.contains("is-active")).forEach(t=>{e(t,0)})}function O(){new w(".a-m-swiper",{direction:"horizontal",loop:!0,loopAdditionalSlides:1,slidesPerGroup:1,slidesPerView:2,modules:[y],keyboard:{enabled:!1},navigation:{nextEl:".a-m-swiper-button"},breakpoints:{375:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}}})}function P(){document.addEventListener("keydown",e=>{if(e.key==="ArrowRight"){const t=document.querySelector(".a-m-swiper-button-next");t&&t.click()}else if(e.key==="ArrowLeft"){const t=document.querySelector(".a-m-swiper-button-prev");t&&t.click()}})}document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".benefits-btn");e&&e.addEventListener("click",s=>{s.preventDefault();const r=e.getAttribute("href").substring(1);t(r)});function t(s){const r=document.getElementById(s);r&&r.scrollIntoView({behavior:"smooth",block:"start"})}});const v=document.querySelector(".projects-prev-btn"),g=document.querySelector(".projects-next-btn");new w(".projects-swiper",{modules:[y,k,I,x],direction:"horizontal",speed:400,slidesPerView:1,spaceBetween:40,keyboard:{enabled:!0,onlyInViewport:!1},mousewheel:{forceToAxis:!0},navigation:{nextEl:".projects-next-btn",prevEl:".projects-prev-btn"},a11y:{enabled:!0,prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide"},on:{init:function(){L(this)},slideChange:function(){L(this)}}});function L(e){e.isBeginning?(v.classList.add("projects-btn-disabled"),v.disabled=!0):(v.classList.remove("projects-btn-disabled"),v.disabled=!1),e.isEnd?(g.classList.add("projects-btn-disabled"),g.disabled=!0):(g.classList.remove("projects-btn-disabled"),g.disabled=!1)}new E([".accordion-container-faq"],{duration:100,showMultiple:!1,onOpen:e=>{const t=e.querySelector(".arrow-top-faq");t&&(t.style.transform="rotate(0deg)")},onClose:e=>{const t=e.querySelector(".arrow-top-faq");t&&(t.style.transform="rotate(180deg)")}});document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".covers-line").forEach(o=>{let n=o.cloneNode(!0);n.classList.add("cloned-line");const c=n.querySelectorAll("li");n.prepend(c[c.length-1].cloneNode(!0)),n.prepend(c[c.length-2].cloneNode(!0)),document.querySelector(".cloned-lines").appendChild(n)});const t=document.querySelector(".covers-section"),s=document.querySelector(".covers-content"),r=new IntersectionObserver(o=>{o.forEach(n=>{n.isIntersecting?s.style.animationPlayState="running":s.style.animationPlayState="paused"})},{threshold:.2});t&&r.observe(t)});const j="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABOSURBVHgBzZLLDQAgCEOJE7H/Eo7gKKh3wJrGSBNOvEL4iJSRmfUVCnC62SgxsiJHJgOQBiEImz3DtdkpkpqbvBA1ArVE6oz0I9Gv/E0TMz3NWV1lPHoAAAAASUVORK5CYII=",D="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEpSURBVHgBrZXtEcIgDIZTzp5/3URHcSPpJLpBXcVd+FPwiqQt1y+SUNv3DuUkvA+0SQQg5Jx7WOt8zsBYyudEmXsPuijg3bbtB1ipa/jQYQ+UZVmBpHjyprEvyBTGSjf52zwbssdchBxhTkI4c2vtTTJMxcwgw6RObZReXDycMSYBcTWuQX/6RqcMQpCmIOPNHbG30SKAgkjmU8AJBJ3PpQ5GOO2KCYVFGEaFa9J+EbCEDIAsc5SCTCkFPjWXlHWD2Jvw5MNP2b1HBEzN42OZvhMRwmURly1cCvfrszSlC41PxR6SKjQs3g4Qg6z9PpdBxsitIhWDXrPDcZCtWplHHQEhzY+AiOZ7IJz5qg5iWygK/wjfFwD+T18pdfXe37e0j07jTeTBPZYfWztI8097RKsAAAAASUVORK5CYII=",h={reviewsSectionBox:document.querySelector(".reviews-swiper"),reviewsListBox:document.querySelector(".reviews-list")};async function R(){const e="https://portfolio-js.b.goit.study/api/reviews",t={};try{return await B.get(e,t).then(r=>{const o=N(r.data);return h.reviewsListBox.innerHTML=o})}catch(s){z(s),h.reviewsSectionBox.innerHTML='<p class="reviews-not-found">Not Found</p>'}}const V={messageColor:"#FAFAFB",messageSize:"16px",backgroundColor:"#EF4040",iconUrl:D,close:!1,buttons:[[`<button><img src = "${j}"/></button>`,function(e,t){e.hide({transitionOut:"fadeOut"},t,"button")},!0]],transitionIn:"bounceInLeft",position:"topRight",displayMode:"replace",closeOnClick:!0};function z(e){const t={rootMargin:"0px",threshold:1};new IntersectionObserver(r=>{r[0].isIntersecting&&A.show({...V,message:`Sorry! ${e}`})},t).observe(h.reviewsSectionBox)}function N(e){return e.map(({author:s,avatar_url:r,review:o,_id:n})=>`<li class="review-item reviews-swiper-slide swiper-slide">
          <img
            width="48px"
            height="48px"
            src="${r}"
            srcset="${r}"
            alt="Reviewer photo"
            class="review-photo"
          />
          <div class="review-info">
            <h3 class="review-author">${s}</h3>
            <p class="review-text">${o}</p>
          </div>
        </li>`).join(" ")}R();function U(){new w(".reviews-swiper",{speed:1e3,spaceBetween:16,autoHeight:!0,centeredSlidesBounds:!0,breakpoints:{320:{slidesPerView:1,slidesPerGroup:1,autoHeight:!1},768:{slidesPerView:2,slidesPerGroup:1,autoHeight:!1},1440:{slidesPerView:4,slidesPerGroup:1,autoHeight:!1}},direction:"horizontal",modules:[y,k],navigation:{nextEl:".reviews-swiper-button-next",prevEl:".reviews-swiper-button-prev"},keyboard:{enabled:!0},mousewheel:{enabled:!0}})}U();document.addEventListener("DOMContentLoaded",function(){const e={form:document.querySelector(".work-together-form"),emailInput:document.querySelector("#user_email"),textInput:document.querySelector("#user_comment"),submitButton:document.querySelector(".work-together-send-contact-btn"),modalBackdrop:document.querySelector(".work-together-backdrop"),modalBtn:document.querySelector(".work-together-modal-btn"),footerModal:document.querySelector(".work-together-modal")},t=document.createElement("p");t.classList.add("email-message"),e.emailInput&&e.emailInput.insertAdjacentElement("afterend",t);function s(){/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(e.emailInput.value)?(e.emailInput.classList.add("valid"),e.emailInput.classList.remove("invalid"),t.textContent="Success!",t.style.color="#3cbc81"):(e.emailInput.classList.add("invalid"),e.emailInput.classList.remove("valid"),t.textContent="Invalid email, try again",t.style.color="#e74a3b")}function r(){const d="...";e.textInput.value.length>50&&(e.textInput.value=e.textInput.value.substring(0,50-d.length)+d)}function o(){e.modalBackdrop.classList.add("is-open"),e.footerModal.classList.add("is-open"),document.body.classList.add("modal-open"),document.addEventListener("keydown",c)}function n(){e.modalBackdrop.classList.remove("is-open"),e.footerModal.classList.remove("is-open"),document.body.classList.remove("modal-open"),document.removeEventListener("keydown",c)}function c(a){a.key==="Escape"&&n()}e.emailInput.addEventListener("input",s),e.textInput.addEventListener("input",r),e.form.addEventListener("submit",async function(a){var l,u;if(a.preventDefault(),!e.emailInput.classList.contains("valid")){A.error({title:"Error",message:"Please enter a valid email."});return}const d={email:e.emailInput.value,comment:e.textInput.value},b="https://portfolio-js.b.goit.study/api/requests";try{(await B.post(b,d,{headers:{"Content-Type":"application/json"}})).status===201?(o(),e.form.reset(),e.emailInput.classList.remove("valid","invalid"),t.textContent="",A.success({title:"Success",message:"Your request has been submitted successfully!"})):A.error({title:"Error",message:"There was an error submitting your request."})}catch(m){const i=((u=(l=m.response)==null?void 0:l.data)==null?void 0:u.message)||"Network error. Please try again later.";A.error({title:"Error",message:i}),console.error(m)}}),e.modalBtn.addEventListener("click",n),e.modalBackdrop.addEventListener("click",function(a){a.target===e.modalBackdrop&&n()})});
//# sourceMappingURL=index.js.map
