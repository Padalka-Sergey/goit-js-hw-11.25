import{a as f}from"./assets/vendor-C19taMLP.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function e(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(r){if(r.ep)return;r.ep=!0;const n=e(r);fetch(r.href,n)}})();const p="31316386-df3d7a07dab36b9800dfb8d2b",g="&image_type=photo&orientation=horisontal&savesearch=true&per_page=40";f.defaults.baseURL="https://pixabay.com/api/";f.defaults.headers.post["Content-Type"]="application/json";function u(o,t){return f.get(`?key=${p}&q=${o}${g}&page=${t}`).then(({data:e})=>e)}const h=document.querySelector("#search-form"),y=document.querySelector(".gallery"),a=document.querySelector(".load-more");let c=null,s=1;h.addEventListener("submit",b);a.addEventListener("click",L);function b(o){if(o.preventDefault(),c=o.target.elements.searchQuery.value,c==="")return console.log("Please fill in all the fields!");u(c,s).then(({hits:e,totalHits:l})=>{if(e.length===0)return console.log("Sorry, there are no images matching your search query. Please try again.");m(e,l,s),d(e),s+=1}).catch(e=>{console.log(e)})}function d(o){const t=o.map(e=>`<div class="photo-card">
  <img src=${e.webformatURL} alt=${e.tags} loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>Likes ${e.likes}</b>
    </p>
    <p class="info-item">
      <b>Views ${e.views}</b>
    </p>
    <p class="info-item">
      <b>Comments ${e.comments}</b>
    </p>
    <p class="info-item">
      <b>Downloads ${e.downloads}</b>
    </p>
  </div>
</div>`).join("");y.insertAdjacentHTML("beforeend",t)}function L(){u(c,s).then(({hits:o,totalHits:t})=>{m(o,t,s),d(o),s+=1}).catch(o=>{console.log(o)})}function m(o,t,e){if(console.log(e),console.log(o.length*e),console.log(t),o.length%40===0&&o.length*e<t)return console.log("Первый иф"),a.classList.add("load-more-visible");if(o.length*e>=t-40)return console.log("Второй иф"),a.classList.remove("load-more-visible")}
//# sourceMappingURL=index.js.map
