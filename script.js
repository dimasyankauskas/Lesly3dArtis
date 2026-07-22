const toggle=document.querySelector('.nav-toggle');
const nav=document.querySelector('.nav');

const setNavOpen=(open,restoreFocus=false)=>{
  nav?.classList.toggle('open',open);
  document.body.classList.toggle('nav-open',open);
  toggle?.setAttribute('aria-expanded',String(open));
  toggle?.setAttribute('aria-label',open?'Close menu':'Open menu');
  if(open)nav?.querySelector('a')?.focus();
  if(!open&&restoreFocus)toggle?.focus();
};

toggle?.addEventListener('click',()=>{
  setNavOpen(!nav?.classList.contains('open'));
});

document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>{
  setNavOpen(false);
}));

const brand=document.querySelector('.brand');

brand?.addEventListener('click',event=>{
  setNavOpen(false);
  if(brand.getAttribute('href')!=='#top')return;
  event.preventDefault();
  window.history.replaceState(null,'','#top');
  resetTopFragmentPosition();
});

let topResetTimer;

const resetTopFragmentPosition=()=>{
  if(window.location.hash!=='#top')return;
  const applyTopPosition=()=>{
    document.documentElement.style.scrollBehavior='auto';
    window.scrollTo({top:0,left:0,behavior:'instant'});
    document.documentElement.scrollTop=0;
    document.body.scrollTop=0;
  };
  applyTopPosition();
  window.clearTimeout(topResetTimer);
  topResetTimer=window.setTimeout(()=>{
    applyTopPosition();
    window.requestAnimationFrame(()=>{
      document.documentElement.style.removeProperty('scroll-behavior');
    });
  },80);
};

resetTopFragmentPosition();
window.addEventListener('pageshow',resetTopFragmentPosition);
window.addEventListener('hashchange',resetTopFragmentPosition);

nav?.addEventListener('click',event=>{
  if(event.target===nav)setNavOpen(false);
});

document.addEventListener('keydown',event=>{
  if(event.key==='Escape'&&nav?.classList.contains('open'))setNavOpen(false,true);
  if(event.key==='Tab'&&nav?.classList.contains('open')){
    const focusable=[toggle,...nav.querySelectorAll('a,button')].filter(Boolean);
    const first=focusable[0];
    const last=focusable[focusable.length-1];
    if(event.shiftKey&&document.activeElement===first){
      event.preventDefault();
      last?.focus();
    }else if(!event.shiftKey&&document.activeElement===last){
      event.preventDefault();
      first?.focus();
    }
  }
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

const revealProgressiveImage=(image,animate=true)=>{
  if(!(image instanceof HTMLImageElement)||!image.matches('[data-progressive-image]'))return;
  if(image.classList.contains('is-loaded'))return;
  image.classList.add('is-loaded');
  if(!animate)image.classList.add('is-loaded-instantly');
};

const prepareProgressiveImages=(root=document)=>{
  const images=root.matches?.('[data-progressive-image]')
    ?[root]
    :[...(root.querySelectorAll?.('[data-progressive-image]')||[])];
  images.forEach(image=>{
    if(image.complete&&image.naturalWidth>0)revealProgressiveImage(image,false);
  });
};

document.addEventListener('load',event=>{
  revealProgressiveImage(event.target);
},true);

window.prepareProgressiveImages=prepareProgressiveImages;
prepareProgressiveImages();

const filterButtons=[...document.querySelectorAll('[data-filter]')];
const workCards=[...document.querySelectorAll('[data-category]')];
const workMoreButton=document.querySelector('[data-work-more]');
const workStatus=document.querySelector('[data-work-status]');
const totalWorkCount=workCards.length;
const featuredWorkCount=workCards.filter(card=>card.dataset.priority==='featured').length;
let showAllWork=false;

const updateWorkGrid=filter=>{
  let visibleCount=0;
  workCards.forEach(card=>{
    const categories=(card.dataset.category||'').split(' ');
    const matchesFilter=filter==='all'||categories.includes(filter);
    const matchesPriority=filter!=='all'||showAllWork||card.dataset.priority==='featured';
    const visible=matchesFilter&&matchesPriority;
    card.classList.toggle('is-hidden',!visible);
    if(visible)visibleCount+=1;
  });

  filterButtons.forEach(button=>{
    const active=button.dataset.filter===filter;
    button.classList.toggle('active',active);
    button.setAttribute('aria-pressed',String(active));
  });

  if(workMoreButton){
    workMoreButton.hidden=filter!=='all';
    workMoreButton.setAttribute('aria-expanded',String(showAllWork));
    workMoreButton.textContent=showAllWork?'Show selected projects':`View all ${totalWorkCount} projects`;
  }

  if(workStatus){
    const filterLabel=filter==='texturing'?'material':filter==='game'?'game character':filter;
    workStatus.textContent=filter==='all'
      ?showAllWork?`Showing all ${totalWorkCount} projects.`:`Showing ${featuredWorkCount} selected character projects.`
      :`Showing ${visibleCount} ${filterLabel} ${visibleCount===1?'project':'projects'}.`;
  }
};

filterButtons.forEach(button=>button.addEventListener('click',()=>{
  updateWorkGrid(button.dataset.filter||'all');
}));

workMoreButton?.addEventListener('click',()=>{
  showAllWork=!showAllWork;
  updateWorkGrid('all');
  if(!showAllWork)document.querySelector('#work')?.scrollIntoView({block:'start'});
});

if(workCards.length)updateWorkGrid('all');

const revealElements=document.querySelectorAll('.reveal');
if('IntersectionObserver' in window){
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  }),{threshold:.08,rootMargin:'0px 0px 8%'});
  revealElements.forEach(element=>observer.observe(element));
}else{
  revealElements.forEach(element=>element.classList.add('in-view'));
}

const contactForm=document.querySelector('.contact-form');

if(contactForm){
  const submitButton=contactForm.querySelector('button[type="submit"]');
  const note=contactForm.querySelector('.form-note');
  const requiredFields=[...contactForm.querySelectorAll('[required]')];

  const setFormNote=message=>{
    if(!note)return;
    note.textContent=message;
    note.hidden=!message;
  };

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
  };

  requiredFields.forEach(field=>{
    field.addEventListener('input',updateSubmitState);
    field.addEventListener('change',updateSubmitState);
  });

  updateSubmitState();

  contactForm.addEventListener('submit',event=>{
    event.preventDefault();
    if(!isBriefReady()){
      setFormNote('Add your name, a valid email, and a short project message first.');
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
      setFormNote('Inquiry copied. Send it to Lesly through the contact channel where you found this portfolio.');
    }).catch(()=>{
      setFormNote('Your browser blocked automatic copying. Select the form details and copy them into your message to Lesly.');
    });
  });
}
