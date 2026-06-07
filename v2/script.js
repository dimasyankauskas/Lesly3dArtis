const toggle=document.querySelector('.nav-toggle');
const nav=document.querySelector('.nav');

toggle?.addEventListener('click',()=>{
  const isOpen=nav?.classList.toggle('open')||false;
  toggle.setAttribute('aria-expanded',String(isOpen));
});

document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>{
  nav?.classList.remove('open');
  toggle?.setAttribute('aria-expanded','false');
}));

const themeRoot=document.documentElement;
const storedTheme=localStorage.getItem('lesly-v2-theme');
const initialTheme=storedTheme==='dark'||storedTheme==='light'?storedTheme:'light';
themeRoot.setAttribute('data-theme',initialTheme);

const themeButtons=document.querySelectorAll('[data-theme-set]');
themeButtons.forEach(btn=>{
  const t=btn.getAttribute('data-theme-set');
  btn.setAttribute('aria-pressed',String(t===initialTheme));
  btn.addEventListener('click',()=>{
    const next=btn.getAttribute('data-theme-set');
    if(!next)return;
    themeRoot.setAttribute('data-theme',next);
    localStorage.setItem('lesly-v2-theme',next);
    themeButtons.forEach(b=>b.setAttribute('aria-pressed',String(b===btn)));
  });
});

document.querySelectorAll('[data-filter]').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const filter=btn.dataset.filter;
    document.querySelectorAll('[data-filter]').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    document.querySelectorAll('[data-category]').forEach(card=>{
      const categories=(card.dataset.category||'').split(' ');
      card.classList.toggle('is-hidden',filter!=='all'&&!categories.includes(filter));
    });
  });
});

const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
  if(entry.isIntersecting)entry.target.classList.add('in-view');
}),{threshold:.14});

document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

document.querySelector('.contact-form')?.addEventListener('submit',event=>{
  event.preventDefault();
  const note=event.currentTarget.querySelector('.form-note');
  if(note)note.textContent='Form destination needed before launch: add a real email, Formspree endpoint, Airtable, HubSpot, Webflow, or backend.';
});
