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

/* ---- Movimento extra (barra de progresso, cabeçalho, imagens, secções) ---- */
(function(){
var reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
/* introdução só na primeira visita da sessão */
try{var intro=document.querySelector('.tf-intro');if(intro){if(sessionStorage.getItem('tf-intro')){intro.parentNode.removeChild(intro);}else{sessionStorage.setItem('tf-intro','1');}}}catch(e){}
var bar=null;if(!reduce){bar=document.createElement('div');bar.className='tf-prog';bar.setAttribute('aria-hidden','true');document.body.appendChild(bar);}
var hd=document.querySelector('header'),tick=false;
function upd(){tick=false;var y=window.pageYOffset||0,h=document.documentElement.scrollHeight-window.innerHeight;
 if(bar)bar.style.transform='scaleX('+(h>0?Math.min(1,y/h):0).toFixed(4)+')';
 if(hd){if(y>12)hd.classList.add('tf-scrolled');else hd.classList.remove('tf-scrolled');}}
function onS(){if(!tick){tick=true;requestAnimationFrame(upd);}}
window.addEventListener('scroll',onS,{passive:true});window.addEventListener('resize',onS,{passive:true});upd();
if(reduce||!('IntersectionObserver' in window))return;
function watch(els,cls){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('tf-on');io.unobserve(e.target);}});},{threshold:0.01,rootMargin:'0px 0px 20% 0px'});
 els.forEach(function(el){el.classList.add(cls);io.observe(el);});}
/* imagens em cortina (fora do herói e da galeria rotativa) */
var figs=[].slice.call(document.querySelectorAll('figure.tf-zoom')).filter(function(f){return !f.closest('.tf-hero')&&!f.querySelector('#g-img')&&f.querySelector(':scope > img, :scope > div > img');});
figs=figs.filter(function(f){return f.querySelector(':scope > img');});
/* fotos sempre visíveis, sem efeito de cortina */
/* secções das páginas de curso */
if(!document.getElementById('topo')){var secs=[].slice.call(document.querySelectorAll('main > section:not(.c-hero) .c-eye, main > section:not(.c-hero) .c-h2, main > section:not(.c-hero) .c-lead, main > section:not(.c-hero) .c-info'));watch(secs,'tf-r2');}
})();

/* descarrega todas as fotos logo a seguir ao carregamento, para não haver espera ao fazer scroll */
(function(){function go(){[].forEach.call(document.querySelectorAll('img[loading="lazy"]'),function(i){i.loading='eager';});}
if(document.readyState==='complete')setTimeout(go,300);else window.addEventListener('load',function(){setTimeout(go,300);});})();
