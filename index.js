import{a as f}from"./assets/vendor-C19taMLP.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function e(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=e(t);fetch(t.href,i)}})();const y="31316386-df3d7a07dab36b9800dfb8d2b",h="&image_type=photo&orientation=horisontal&savesearch=true&per_page=40";f.defaults.baseURL="https://pixabay.com/api/";f.defaults.headers.post["Content-Type"]="application/json";function u(o,r){return f.get(`?key=${y}&q=${o}${h}&page=${r}`).then(({data:e})=>e)}const b=document.querySelector("#search-form"),d=document.querySelector(".gallery"),n=document.querySelector(".load-more");let l=null,s=1;b.addEventListener("submit",g);n.addEventListener("click",L);function g(o){if(o.preventDefault(),l=o.target.elements.searchQuery.value,s=1,v(),M(),l===""){Notiflix.Notify.failure("Please fill in all the fields!");return}u(l,s).then(({hits:e,totalHits:a})=>{if(e.length===0){Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.");return}p(e,a,s),m(e),s+=1}).catch(e=>{console.log(e)})}function L(){u(l,s).then(({hits:o,totalHits:r})=>{p(o,r,s),m(o),s+=1}).catch(o=>{console.log(o)})}function m(o){const r=o.map(e=>`<div class="photo-card">
  <img src=${e.webformatURL} alt=${e.tags} loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>Likes</b> ${e.likes}
    </p>
    <p class="info-item">
      <b>Views</b> ${e.views}
    </p>
    <p class="info-item">
      <b>Comments</b> ${e.comments}
    </p>
    <p class="info-item">
      <b>Downloads</b> ${e.downloads}
    </p>
  </div>
</div>`).join("");d.insertAdjacentHTML("beforeend",r)}function p(o,r,e){if(o.length%40===0&&o.length*e<r)return n.classList.add("load-more-visible");n.classList.remove("load-more-visible"),Notiflix.Notify.failure("We're sorry, but you've reached the end of search results.")}function v(){d.innerHTML=""}function M(){n.classList.contains("load-more-visible")&&n.classList.remove("load-more-visible")}
//# sourceMappingURL=index.js.map
