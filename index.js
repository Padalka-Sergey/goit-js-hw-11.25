import{a as u,S as g}from"./assets/vendor-DdMkFUeo.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function o(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(r){if(r.ep)return;r.ep=!0;const i=o(r);fetch(r.href,i)}})();const y="31316386-df3d7a07dab36b9800dfb8d2b",h="&image_type=photo&orientation=horisontal&savesearch=true&per_page=40";u.defaults.baseURL="https://pixabay.com/api/";u.defaults.headers.post["Content-Type"]="application/json";function d(e,t){return u.get(`?key=${y}&q=${e}${h}&page=${t}`).then(({data:o})=>o)}const n={form:document.querySelector("#search-form"),galery:document.querySelector(".gallery"),loadMore:document.querySelector(".load-more")};let a=null,s=1,f=null;n.form.addEventListener("submit",b);n.loadMore.addEventListener("click",L);n.galery.addEventListener("click",$);function b(e){if(e.preventDefault(),a=e.target.elements.searchQuery.value,s=1,v(),M(),a===""){Notiflix.Notify.failure("Please fill in all the fields!");return}d(a,s).then(({hits:o,totalHits:l})=>{if(o.length===0){Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.");return}Notiflix.Notify.success(`Hooray! We found ${l} images.`),p(o,l,s),m(o),s+=1}).catch(o=>{console.log(o)})}function L(){d(a,s).then(({hits:e,totalHits:t})=>{p(e,t,s),m(e),f&&f.refresh(),w(),s+=1}).catch(e=>{console.log(e)})}function m(e){const t=e.map(o=>`<a href=${o.largeImageURL} class="large-image"><div class="photo-card">
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
</div></a>`).join("");n.galery.insertAdjacentHTML("beforeend",t)}function p(e,t,o){if(e.length%40===0&&e.length*o<t)return n.loadMore.classList.add("load-more-visible");n.loadMore.classList.remove("load-more-visible"),Notiflix.Notify.failure("We're sorry, but you've reached the end of search results.")}function v(){n.galery.innerHTML=""}function M(){n.loadMore.classList.contains("load-more-visible")&&n.loadMore.classList.remove("load-more-visible")}function $(e){e.preventDefault(),f=new g(".gallery a")}function w(){const{height:e}=n.galery.firstElementChild.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
