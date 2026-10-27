"use strict";
(function(){
 const el=id=>document.getElementById(id);
 const catalog=JSON.parse(el('catalog_data').textContent);
 const tools=catalog.resources;
 const search=el('resource_search'),role=el('role_filter'),problem=el('problem_filter'),cards=el('resource_cards'),count=el('result_count');
 const params=new URLSearchParams(window.location.search);
 const allowed=(select,val)=>{if([...select.options].some(o=>o.value===val))select.value=val;};
 allowed(role,params.get('role'));allowed(problem,params.get('problem'));
 // All DOM text is inserted via textContent, never by interpolating untrusted HTML.
 const node=(tag,cl,text)=>{const x=document.createElement(tag); if(cl)x.className=cl; if(text!=null)x.textContent=text; return x;};
 const renderCard=r=>{
  const c=node('article','card');
  const head=node('div','cardhead');head.append(node('span',`pill ${r.status==='available'?'ready':'future'}`,r.status==='available'?'Available now':'Future release'));head.append(node('span','filemeta',r.format));c.append(head);
  c.append(node('h3','',r.title));c.append(node('p','',r.description));
  c.append(node('div','small',`Chapter${r.chapters.length===1?'':'s'} ${r.chapters.join(', ')}`));
  const acts=node('div','actions');const a=node('a','link',r.status==='available'?`Download ${r.format} ↓`:'View planned pack →');
  a.href=r.status==='available'?r.path:r.section;
  if(r.status==='available') a.setAttribute('download','');
  acts.append(a);c.append(acts);return c;
 };
 function apply(){
  const q=search.value.trim().toLocaleLowerCase();const r=role.value,pr=problem.value;
  const match=tools.filter(t=>(!q || (t.title+' '+t.description+' '+t.category).toLocaleLowerCase().includes(q)) && (r==='all'||t.roles.includes('all')||t.roles.includes(r))&&(pr==='all'||t.problems.includes(pr)));
  const frag=document.createDocumentFragment();
  if(match.length){match.forEach(t=>frag.append(renderCard(t)));}
  else frag.append(node('p','filter-empty','No tools match those filters. Try another role or clear the search.'));
  cards.replaceChildren(frag);
  const n=match.filter(t=>t.status==='available').length;
  count.textContent=`${match.length} tool${match.length===1?'':'s'} shown · ${n} available now · ${match.length-n} planned`;
 }
 search.addEventListener('input',apply);role.addEventListener('change',apply);problem.addEventListener('change',apply);
 el('clear_filters').addEventListener('click',()=>{search.value='';role.value='all';problem.value='all';apply();search.focus();});
 apply();
})();
