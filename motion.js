/* GamiForest: progressive, accessible cinematic motion. */
(()=>{'use strict';
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
const videos=[...document.querySelectorAll('video.motion-video')];
videos.forEach(v=>{v.addEventListener('playing',()=>v.classList.add('video-playing'));v.addEventListener('error',()=>v.classList.add('video-unavailable'));});
const reveal=[...document.querySelectorAll('.section-kicker,.section-heading,.intro-grid,.feature,.game-card,.paper,.workshop-panel,.about-grid,.featured-quest,.cinema-content,.contribute,.content-card,.entry-card')];
if(!reduced.matches){document.documentElement.classList.add('motion-ready');reveal.forEach(e=>e.classList.add('reveal'));}
const obs=('IntersectionObserver' in window)?new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in-view');obs.unobserve(e.target)}}),{threshold:.09,rootMargin:'0px 0px -24px 0px'}):null;
reveal.forEach(el=>obs?obs.observe(el):el.classList.add('in-view'));
let enabled=!reduced.matches;
const button=document.createElement('button');button.type='button';button.className='motion-toggle';button.setAttribute('aria-label','Pause background motion');
function label(){button.textContent=enabled?'Ⅱ  Pause motion':'▶  Play motion';button.setAttribute('aria-pressed',String(!enabled));button.setAttribute('aria-label',enabled?'Pause background motion':'Play background motion')}
label();document.body.append(button);
function stop(v){v.pause()}
function start(v){if(!v.dataset.loaded){v.src=v.dataset.videoSrc;v.dataset.loaded='1'}let promise=v.play();if(promise&&promise.catch)promise.catch(()=>{})}
const videoObserver=('IntersectionObserver' in window)?new IntersectionObserver(es=>es.forEach(e=>{e.target.dataset.visible=String(e.isIntersecting);if(enabled&&e.isIntersecting&&!document.hidden)start(e.target);else stop(e.target)}),{rootMargin:'100px 0px'}):null;
videos.forEach(v=>{v.muted=true;v.setAttribute('muted','');v.setAttribute('playsinline','');if(videoObserver)videoObserver.observe(v);else if(enabled)start(v)});
function refresh(){videos.forEach(v=>enabled&&v.dataset.visible==='true'&&!document.hidden?start(v):stop(v));document.body.classList.toggle('motion-paused',!enabled)}
button.addEventListener('click',()=>{enabled=!enabled;label();refresh()});
document.addEventListener('visibilitychange',refresh);
reduced.addEventListener?.('change',e=>{enabled=!e.matches;document.documentElement.classList.toggle('motion-ready',enabled);reveal.forEach(x=>x.classList.toggle('reveal',enabled));label();refresh()});
const layers=[...document.querySelectorAll('.hero-film,.cinema-film,.interlude-video,.page-motion-film')];
let ticking=false;function position(){ticking=false;if(!enabled||reduced.matches||innerWidth<700)return;for(const el of layers){const parent=el.closest('.hero,.cinematic-break,.forest-interlude,.page-motion-sky')||el.parentElement;const r=parent.getBoundingClientRect();if(r.bottom<0||r.top>innerHeight)continue;const t=Math.max(-1,Math.min(1,(innerHeight/2-(r.top+r.height/2))/innerHeight));el.style.setProperty('--parallax',`${(t*27).toFixed(1)}px`)}}
addEventListener('scroll',()=>{if(!ticking){ticking=true;requestAnimationFrame(position)}},{passive:true});addEventListener('resize',position,{passive:true});position();
})();