// Case study page: reveal-on-scroll for cs-step process stages.
// (Mobile nav is handled by the shared script.js — this file only adds
// the case-study-specific reveal observer.)
const csObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('in-view')}),{threshold:.14});document.querySelectorAll('.cs-step').forEach(el=>{el.classList.add('reveal');csObserver.observe(el)});
