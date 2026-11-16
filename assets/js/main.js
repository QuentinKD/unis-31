const $=s=>document.querySelector(s),RM=matchMedia('(prefers-reduced-motion:reduce)').matches,R=document.body.hasAttribute('data-routed');
const hd=$('#hd'),nv=$('#nv');
addEventListener('scroll',()=>hd.classList.toggle('s',scrollY>40),{passive:true});hd.classList.toggle('s',scrollY>40);
$('#bg').onclick=e=>{const o=nv.classList.toggle('o');e.target.setAttribute('aria-expanded',o)};nv.onclick=()=>nv.classList.remove('o');
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.15});
document.querySelectorAll('.rv').forEach(e=>io.observe(e));
const D=[['Bénévole de terrain','Secourisme et actions sociales : tu es au contact du public, en équipe, sur les postes de secours et les interventions.'],['Formation et prévention','Transmettre les gestes qui sauvent aux bénévoles et au grand public, et faire vivre la culture de la prévention.'],['Sauvetage aquatique et nautique','Surveillance et secours en milieu aquatique, avec le pôle Nautique : conduite d’embarcation, sauvetage, plongée.'],['Bénévole administratif','Gestion des adhésions, suivi des dossiers, organisation : le bon fonctionnement de l’association repose sur toi.'],['Logistique, matériel, véhicules','Préparer, entretenir et acheminer le matériel et les véhicules pour que chaque mission démarre à l’heure.'],['Communication, informatique','Réseaux, site web, supports visuels, outils numériques : donne de la visibilité à l’UNIS et soutiens ses systèmes.']];
const tl=$('.tl'),pn=$('#pn');
if(tl){const sel=i=>{tl.querySelectorAll('button').forEach((b,j)=>b.setAttribute('aria-selected',i===j));pn.style.animation='none';pn.offsetHeight;pn.style.animation='';pn.innerHTML='<h3>'+D[i][0]+'</h3><p>'+D[i][1]+'</p><a class="btn" href="mailto:recrutement@unis-31.fr?subject=Candidature%20%E2%80%93%20'+encodeURIComponent(D[i][0])+'" style="margin-top:14px">Je candidate</a>'};
D.forEach((d,i)=>{const b=document.createElement('button');b.role='tab';b.textContent=d[0];b.onclick=()=>sel(i);tl.appendChild(b)});sel(0)}
if(!RM)document.querySelectorAll('.card').forEach(c=>{c.onmousemove=e=>{const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform='perspective(700px) rotateY('+x*8+'deg) rotateX('+-y*8+'deg) translateY(-4px)'};c.onmouseleave=()=>c.style.transform=''});
const dl=$('#dl');document.querySelectorAll('[data-l]').forEach(b=>b.onclick=()=>{dl.showModal();$('#'+b.dataset.l).scrollIntoView()});
$('#xc').onclick=()=>dl.close();dl.onclick=e=>{if(e.target===dl)dl.close()};
if(R){const go=()=>{const h=location.hash.slice(1)||'accueil';let p=document.getElementById('p-'+h),t=null;if(!p){t=document.getElementById(h);p=t&&t.closest('.pg')}p=p||document.getElementById('p-accueil');
document.querySelectorAll('.pg').forEach(x=>x.classList.toggle('on',x===p));nv.querySelectorAll('a').forEach(a=>a.classList.toggle('on',a.dataset.p===p.id.slice(2)));
document.title=p.dataset.t;t?t.scrollIntoView():scrollTo(0,0)};addEventListener('hashchange',go);go()}
