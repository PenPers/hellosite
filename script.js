/* ============ Helpers ============ */
const $ = (q, el=document) => el.querySelector(q);
const $$ = (q, el=document) => [...el.querySelectorAll(q)];
const toast = (msg)=>{
  const t=$("#toast");
  t.textContent=msg;
  t.classList.add("show");
  setTimeout(()=>t.classList.remove("show"),2200);
};
const ls = {
  get:(k,def=null)=>{ try{const v=localStorage.getItem(k); return v?JSON.parse(v):def;}catch{ return def; } },
  set:(k,v)=>localStorage.setItem(k, JSON.stringify(v)),
  del:(k)=>localStorage.removeItem(k)
};

/* ============ Smooth Nav ============ */
$$(".nav-btn").forEach(b=>{
  b.addEventListener("click",()=>{
    const target = b.getAttribute("data-target");
    if(target) document.querySelector(target).scrollIntoView({behavior:"smooth"});
  });
});

/* ============ Visits Counter ============ */
(() => {
  let v = ls.get("visits", 0) + 1;
  ls.set("visits", v);
  $("#visits").textContent = v;
})();

/* ============ Like Counter + Shortcut L ============ */
(() => {
  let likes = ls.get("likes", 0);
  $("#likeCount").textContent = likes;
  $("#likeBtn").addEventListener("click", ()=>{
    likes++; ls.set("likes", likes);
    $("#likeCount").textContent = likes;
    toast("مرسی! 👍");
  });
  document.addEventListener("keydown", (e)=>{ if(e.key.toLowerCase()==="l") $("#likeBtn").click(); });
})();

/* ============ Theme Toggle + Shortcut T ============ */
(() => {
  const apply = (theme)=>{ 
    document.body.classList.toggle("theme-light", theme==="light"); 
    document.body.classList.toggle("theme-dark", theme==="dark");
  };
  let theme = ls.get("theme","light");
  apply(theme);
  $("#themeBtn").addEventListener("click", ()=>{
    theme = theme==="light" ? "dark" : "light";
    ls.set("theme", theme); apply(theme);
    toast("تم تغییر کرد 🎨");
  });
  document.addEventListener("keydown",(e)=>{ if(e.key.toLowerCase()==="t") $("#themeBtn").click(); });
})();

/* ============ Copy Link ============ */
$("#copyBtn").addEventListener("click", async ()=>{
  await navigator.clipboard.writeText(window.location.href);
  toast("لینک کپی شد 📋");
});

/* ============ Story Translate ============ */
$("#translateBtn").addEventListener("click",()=>{
  const story=$("#story");
  if(story.dataset.lang==="fa"){
    story.dataset.lang="en";
    story.textContent = "Once upon a time, a beautiful site was born... Created with passion, technology, and the vision of Mohammad Mahdi, it became a shining place for knowledge, creativity, and inspiration. Visitors found not just a website, but a story — a journey into learning and imagination.";
    $("#translateBtn").textContent="ترجمه به فارسی";
  } else {
    story.dataset.lang="fa";
    story.textContent = "روزی روزگاری، سایتی زیبا متولد شد... ساخته‌شده با عشق، تکنولوژی و دیدگاه محمدمهدی، اینجا به مکانی درخشان برای دانش، خلاقیت و الهام تبدیل شد. بازدیدکنندگان تنها یک وب‌سایت ندیدند، بلکه داستانی یافتند؛ سفری به دنیای یادگیری و تخیل.";
    $("#translateBtn").textContent="Translate to English";
  }
});

/* ============ Poll ============ */
(() => {
  const yes=$("#pollYes"), no=$("#pollNo"), res=$("#pollResult");
  let poll = ls.get("poll",{yes:0,no:0});
  const update=()=>{ res.textContent=`👍 ${poll.yes} | 👎 ${poll.no}`; };
  update();
  yes.addEventListener("click",()=>{ poll.yes++; ls.set("poll",poll); update(); toast("مرسی از رأی 👍"); });
  no.addEventListener("click",()=>{ poll.no++; ls.set("poll",poll); update(); toast("مرسی از رأی 👎"); });
})();

/* ============ Comments ============ */
(() => {
  const form=$("#commentForm"), list=$("#commentList");
  let comments = ls.get("comments",[]);
  const render=()=>{
    list.innerHTML="";
    comments.forEach(c=>{
      const li=document.createElement("li");
      li.textContent=c;
      list.appendChild(li);
    });
  };
  render();
  form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const txt=$("#commentInput").value.trim();
    if(!txt) return;
    comments.push(txt);
    ls.set("comments",comments);
    $("#commentInput").value="";
    render();
    toast("نظر ثبت شد 📝");
  });
})();
