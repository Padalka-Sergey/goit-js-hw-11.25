import{a as u,S as g}from"./assets/vendor-DdMkFUeo.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const f of i.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&l(f)}).observe(document,{childList:!0,subtree:!0});function o(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(t){if(t.ep)return;t.ep=!0;const i=o(t);fetch(t.href,i)}})();const h="31316386-df3d7a07dab36b9800dfb8d2b",y="&image_type=photo&orientation=horisontal&savesearch=true&per_page=40";u.defaults.baseURL="https://pixabay.com/api/";u.defaults.headers.post["Content-Type"]="application/json";function d(e,r){return u.get(`?key=${h}&q=${e}${y}&page=${r}`).then(({data:o})=>o)}const b=document.querySelector("#search-form"),c=document.querySelector(".gallery"),s=document.querySelector(".load-more");let a=null,n=1;b.addEventListener("submit",L);s.addEventListener("click",v);c.addEventListener("click",M);function L(e){if(e.preventDefault(),a=e.target.elements.searchQuery.value,n=1,w(),$(),a===""){Notiflix.Notify.failure("Please fill in all the fields!");return}d(a,n).then(({hits:o,totalHits:l})=>{if(o.length===0){Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.");return}p(o,l,n),m(o),n+=1}).catch(o=>{console.log(o)})}function v(){d(a,n).then(({hits:e,totalHits:r})=>{p(e,r,n),m(e),S(),n+=1}).catch(e=>{console.log(e)})}function m(e){const r=e.map(o=>`<a href=${o.largeImageURL} class="large-image"><div class="photo-card">
  <img src=${o.webformatURL} alt=${o.tags} loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>Likes</b> ${o.likes}
    </p>
    <p class="info-item">
      <b>Views</b> ${o.views}
    </p>
    <p class="info-item">
      <b>Comments</b> ${o.comments}
    </p>
    <p class="info-item">
      <b>Downloads</b> ${o.downloads}
    </p>
  </div>
</div></a>`).join("");c.insertAdjacentHTML("beforeend",r)}function p(e,r,o){if(e.length%40===0&&e.length*o<r)return s.classList.add("load-more-visible");s.classList.remove("load-more-visible"),Notiflix.Notify.failure("We're sorry, but you've reached the end of search results.")}function w(){c.innerHTML=""}function $(){s.classList.contains("load-more-visible")&&s.classList.remove("load-more-visible")}function M(e){e.preventDefault(),new g(".gallery a")}function S(){const{height:e}=c.firstElementChild.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
