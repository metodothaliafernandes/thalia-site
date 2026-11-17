(function(){var bar=document.getElementById('c-bar');if(!bar||!('IntersectionObserver' in window))return;
var hero=document.querySelector('.c-hero'),inv=document.getElementById('investimento'),hv=true,iv=false;
function up(){if(!hv&&!iv)bar.classList.add('on');else bar.classList.remove('on');}
new IntersectionObserver(function(e){hv=e[0].isIntersecting;up();}).observe(hero);
new IntersectionObserver(function(e){iv=e[0].isIntersecting;up();},{threshold:0.15}).observe(inv);})();
