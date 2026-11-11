if(document.getElementById('topo')){
(function(){
var G=[{"src": "unha-camisola.jpg", "tech": "Molde F1", "title": "Alongamento longo", "text": "Formato longo e acabamento nude, feito em molde F1.", "pos": "center 62%", "alt": "Alongamento longo em molde F1"}, {"src": "unha-coluna.jpg", "tech": "Molde F1 · nail art", "title": "Nude com flores secas", "text": "Alongamento nude com flores secas encapsuladas.", "pos": "center 55%", "alt": "Alongamento nude com flores secas"}, {"src": "unha-pelo.jpg", "tech": "Molde F1 · nail art", "title": "Flores e folha de ouro", "text": "Formato quadrado com flores secas e folha de ouro.", "pos": "center 55%", "alt": "Unhas quadradas com flores e folha de ouro"}, {"src": "unha-macro.jpg", "tech": "Nail art", "title": "Detalhe em macro", "text": "Flores secas e folha de ouro sob acabamento brilhante.", "pos": "center 45%", "alt": "Detalhe de unha com flores secas e folha de ouro"}, {"src": "unha-polegar.jpg", "tech": "Esmaltação em gel", "title": "Tom chocolate", "text": "Esmaltação em gel com acabamento brilhante.", "pos": "center 50%", "alt": "Esmaltação em gel cor chocolate"}, {"src": "thalia-maos.jpg", "tech": "Esmaltação em gel", "title": "Chocolate em amêndoa", "text": "Formato amêndoa com esmaltação em gel.", "pos": "60% center", "alt": "Unhas amêndoa cor chocolate"}];
var root=document.getElementById('topo');
var reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
var thumbs=[].slice.call(document.querySelectorAll('.tf-thumb'));
var pic=0,auto=null;
function show(i){pic=i;var g=G[i];var im=document.getElementById('g-img');
 im.src=g.src;im.alt=g.alt||'';im.style.objectPosition=g.pos;im.style.animation='none';void im.offsetWidth;im.style.animation='';
 document.getElementById('g-tech').textContent=g.tech;document.getElementById('g-title').textContent=g.title;document.getElementById('g-text').textContent=g.text;
 thumbs.forEach(function(t,j){t.setAttribute('aria-pressed',j===i?'true':'false');t.style.borderColor=j===i?'#D9C29A':'transparent';t.style.opacity=j===i?'1':'0.55';});}
thumbs.forEach(function(t){t.addEventListener('click',function(){if(auto){clearInterval(auto);auto=null;}show(+t.getAttribute('data-i'));});});
var track=document.getElementById('tf-track'),chap=0,lab=document.getElementById('chap-label');
function setChap(i){chap=i;if(lab)lab.textContent='0'+(i+1)+' / 04';}
function step(){var c=track.firstElementChild;return c?c.getBoundingClientRect().width+20:1;}
if(track){track.addEventListener('scroll',function(){var i=Math.max(0,Math.min(track.children.length-1,Math.round(track.scrollLeft/step())));if(i!==chap)setChap(i);},{passive:true});
 function go(d){var i=Math.max(0,Math.min(track.children.length-1,chap+d));track.scrollTo({left:i*step(),behavior:'smooth'});setChap(i);}
 document.getElementById('chap-prev').addEventListener('click',function(){go(-1)});document.getElementById('chap-next').addEventListener('click',function(){go(1)});}
if(reduce)return;
auto=setInterval(function(){if(!document.hidden)show((pic+1)%G.length);},4500);
if('IntersectionObserver' in window){root.setAttribute('data-anim','');
 var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.setAttribute('data-in','');io.unobserve(e.target);}});},{threshold:0.12,rootMargin:'0px 0px -8% 0px'});
 [].forEach.call(root.querySelectorAll('.tf-rv, .tf-stag'),function(el){io.observe(el);});}
var hero=root.querySelector('.tf-hero-img'),man=root.querySelector('.tf-manifesto'),tick=false;
function cl(v){return Math.max(0,Math.min(1,v));}
function onS(){if(tick)return;tick=true;requestAnimationFrame(function(){var vh=window.innerHeight||1;[].forEach.call(root.querySelectorAll('.tf-rv:not([data-in]), .tf-stag:not([data-in])'),function(el){if(el.getBoundingClientRect().top<vh*0.95)el.setAttribute('data-in','');});
 if(hero){var r=hero.getBoundingClientRect();if(r.bottom>0)hero.style.setProperty('--tf-py',(Math.max(0,-r.top)*0.18).toFixed(1)+'px');}
 if(man){var r2=man.getBoundingClientRect();man.style.setProperty('--p',cl((vh*0.9-r2.top)/(r2.height+vh*0.2)).toFixed(3));}
 tick=false;});}
window.addEventListener('scroll',onS,{passive:true});window.addEventListener('resize',onS,{passive:true});onS();
})();
}

(function(){var b=document.getElementById('tf-ck');if(!b)return;var k='tf-cookie-ok',seen=false;try{seen=localStorage.getItem(k)==='1'}catch(e){}
if(!seen)b.classList.add('on');var ok=document.getElementById('tf-ck-ok');if(ok)ok.addEventListener('click',function(){try{localStorage.setItem(k,'1')}catch(e){}b.classList.remove('on')});})();
