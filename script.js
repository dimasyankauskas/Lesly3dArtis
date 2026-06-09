const toggle=document.querySelector('.nav-toggle');
const nav=document.querySelector('.nav');

const setNavOpen=(open)=>{
  nav?.classList.toggle('open',open);
  document.body.classList.toggle('nav-open',open);
  toggle?.setAttribute('aria-expanded',String(open));
  toggle?.setAttribute('aria-label',open?'Close menu':'Open menu');
};

toggle?.addEventListener('click',()=>{
  setNavOpen(!nav?.classList.contains('open'));
});

document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>{
  setNavOpen(false);
}));

nav?.addEventListener('click',event=>{
  if(event.target===nav)setNavOpen(false);
});

document.addEventListener('keydown',event=>{
  if(event.key==='Escape')setNavOpen(false);
});

window.addEventListener('resize',()=>{
  if(window.innerWidth>768)setNavOpen(false);
});

const themeRoot=document.documentElement;
const storedTheme=localStorage.getItem('lesly-theme');
const initialTheme=storedTheme==='dark'||storedTheme==='light'?storedTheme:'light';
const themeToggles=document.querySelectorAll('[data-theme-toggle]');

const applyTheme=theme=>{
  themeRoot.setAttribute('data-theme',theme);
  localStorage.setItem('lesly-theme',theme);
  const isDark=theme==='dark';
  themeToggles.forEach(themeToggle=>{
    themeToggle.textContent=isDark?'☾':'☀';
    themeToggle.setAttribute('aria-label',isDark?'Switch to light theme':'Switch to dark theme');
  });
};

applyTheme(initialTheme);

themeToggles.forEach(themeToggle=>themeToggle.addEventListener('click',()=>{
  const current=themeRoot.getAttribute('data-theme')==='dark'?'dark':'light';
  applyTheme(current==='dark'?'light':'dark');
}));

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

const contactForm=document.querySelector('.contact-form');

if(contactForm){
  const submitButton=contactForm.querySelector('button[type="submit"]');
  const note=contactForm.querySelector('.form-note');
  const requiredFields=[...contactForm.querySelectorAll('[required]')];

  const isBriefReady=()=>requiredFields.every(field=>{
    if(field.type==='email')return field.value.trim()&&field.validity.valid;
    return field.value.trim().length>0;
  });

  const updateSubmitState=()=>{
    const ready=isBriefReady();
    if(submitButton){
      submitButton.disabled=!ready;
      submitButton.setAttribute('aria-disabled',String(!ready));
    }
    if(note&&!ready)note.textContent='';
  };

  requiredFields.forEach(field=>{
    field.addEventListener('input',updateSubmitState);
    field.addEventListener('change',updateSubmitState);
  });

  updateSubmitState();

  contactForm.addEventListener('submit',event=>{
    event.preventDefault();
    if(!isBriefReady()){
      if(note)note.textContent='Add your name, a valid email, and a short project message first.';
      updateSubmitState();
      return;
    }
    const data=new FormData(contactForm);
    const brief=[
      'Project brief for Lesly',
      '',
      `Name: ${data.get('name')||''}`,
      `Email: ${data.get('email')||''}`,
      `Project type: ${data.get('project-type')||''}`,
      `Deliverables: ${data.get('deliverables')||''}`,
      `Budget: ${data.get('budget')||''}`,
      '',
      'Message:',
      data.get('message')||''
    ].join('\n');

    navigator.clipboard?.writeText(brief).then(()=>{
      if(note)note.textContent='Project brief copied. Paste it into your email or message thread with Lesly.';
    }).catch(()=>{
      if(note)note.textContent='Copy the brief from the form and send it through your email or message thread with Lesly.';
    });
  });
}
