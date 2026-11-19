(function(){var bar=document.getElementById('c-bar');if(!bar||!('IntersectionObserver' in window))return;
var hero=document.querySelector('.c-hero'),inv=document.getElementById('investimento'),hv=true,iv=false;
function up(){if(!hv&&!iv)bar.classList.add('on');else bar.classList.remove('on');}
new IntersectionObserver(function(e){hv=e[0].isIntersecting;up();}).observe(hero);
new IntersectionObserver(function(e){iv=e[0].isIntersecting;up();},{threshold:0.15}).observe(inv);})();

(function(){var v=document.querySelector('.c-vid video');if(!v)return;
if(window.matchMedia&&matchMedia('(prefers-reduced-motion:reduce)').matches){v.controls=true;return;}
if(!('IntersectionObserver' in window)){v.controls=true;return;}
new IntersectionObserver(function(e){if(e[0].isIntersecting){v.preload='auto';var p=v.play();if(p&&p.catch)p.catch(function(){v.controls=true;});}else{v.pause();}},{threshold:0.35}).observe(v);})();
