// LOADER
window.addEventListener('load',()=>{setTimeout(()=>{document.getElementById('loader').classList.add('done');boot();},2200);});

// CURSOR
const cdot=document.getElementById('cdot'),cring=document.getElementById('cring');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;});
(function tick(){cdot.style.left=mx+'px';cdot.style.top=my+'px';rx+=(mx-rx)*.12;ry+=(my-ry)*.12;cring.style.left=rx+'px';cring.style.top=ry+'px';requestAnimationFrame(tick);})();
document.querySelectorAll('a,button').forEach(el=>{
  el.addEventListener('mouseenter',()=>{cring.style.width='54px';cring.style.height='54px';cring.style.borderColor='rgba(168,85,247,.6)';});
  el.addEventListener('mouseleave',()=>{cring.style.width='36px';cring.style.height='36px';cring.style.borderColor='rgba(0,212,255,.4)';});
});

// TYPING
const tagline="Ensuring software quality through rigorous testing, agile methodologies, and data integrity checks.";
let ti=0;
function typeIt(){const el=document.getElementById('tt');if(el&&ti<tagline.length){el.textContent+=tagline[ti++];setTimeout(typeIt,34);}}

// PARTICLES
function makeParticles(){
  const c=document.getElementById('parts');
  for(let i=0;i<30;i++){
    const p=document.createElement('div');p.className='particle';
    const s=Math.random()*4+2,h=Math.random()>.5?'196,100%,50%':'270,91%,65%';
    p.style.cssText=`left:${Math.random()*100}%;width:${s}px;height:${s}px;background:hsl(${h});box-shadow:0 0 ${s*3}px hsl(${h});animation-duration:${9+Math.random()*12}s;animation-delay:${Math.random()*12}s;`;
    c.appendChild(p);
  }
}

// SCROLL REVEAL
function initReveal(){
  const obs=new IntersectionObserver(e=>{e.forEach(x=>{if(x.isIntersecting)x.target.classList.add('vis');});},{threshold:.1});
  document.querySelectorAll('.rv').forEach(el=>obs.observe(el));
}

// SKILL BARS
function initBars(){
  const obs=new IntersectionObserver(e=>{e.forEach(x=>{if(x.isIntersecting)x.target.classList.add('on');});},{threshold:.25});
  document.querySelectorAll('.sbf').forEach(b=>obs.observe(b));
}

function boot(){makeParticles();typeIt();initReveal();initBars();}

function toggleMenu(){document.getElementById('mmenu').classList.toggle('open');}

function showToast(msg){const t=document.getElementById('toast');t.textContent='✓  '+msg;t.classList.add('on');setTimeout(()=>t.classList.remove('on'),3500);}

function sendMsg(){
  const n=document.getElementById('cfn').value.trim();
  const e=document.getElementById('cfe').value.trim();
  const m=document.getElementById('cfm').value.trim();
  if(!n||!e||!m){showToast('PLEASE FILL ALL FIELDS');return;}
  showToast('MESSAGE TRANSMITTED SUCCESSFULLY');
  ['cfn','cfe','cfm'].forEach(id=>document.getElementById(id).value='');
}

// NAV ACTIVE
const secs=document.querySelectorAll('section[id]');
window.addEventListener('scroll',()=>{let cur='';secs.forEach(s=>{if(window.scrollY>=s.offsetTop-80)cur=s.id;});document.querySelectorAll('.nl').forEach(l=>{l.style.color=l.getAttribute('href')==='#'+cur?'var(--nb)':'';});});
