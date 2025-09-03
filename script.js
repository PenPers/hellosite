/* ===== story text (Persian) and English translation ===== */
const storyFa = `شبِ نخستِ این جا، با نوری آرام آغاز شد؛ نوری که نه از چراغِ فلزی دفترها،
بلکه از شوقِ پی‌گیرِ کنجکاوی و از گرمیِ لبِ ایده‌ها می‌آمد. هر گرهٔ کوچکِ سؤال،
یک نخِ نازکِ جستجو بود که به دستِ سازنده گره می‌خورد؛ سازندگانی که نامشان در سندها نیست
اما اثرشان در لحظه‌های یادگیری به چشم می‌آید. این مکان، آوازی دارد نرم و حساب‌شده:
زبانِ طرح و فکر، ترکیبِ صبر و جسارت، و کلافِ رنگ‌ها که آرام به هم می‌آمیزند.
هر بازدید، دعوتی‌ست برای نشستن کنار میزِ تجربه؛ برای پرسیدنِ «اگر»ها و ساختنِ «چگونه»ها.
اینجا، هر صفحه مثل یک دفتر مصور است که خوراکِ دل می‌دهد، نه فقط خبر؛
و هر قطعهٔ متن، چراغی کوچک است که گوشه‌های تاریکِ ذهن را روشن می‌کند.
سازنده این پردازشِ نرم و موزون، دستی دارد مهربان و پیگیر — محمد مهدی — که با دقت،
صفحه‌ها را می‌چیند، تجربه‌ها را قاب می‌کند و اجازه می‌دهد که هرکس به شکوفهٔ خود برسد.
آنچه می‌بینی، محصولِ صبر و آزمون، پچ‌پچ‌های پی‌درپیِ خطا و تصحیح است؛
محلی برای کسانی که دوست دارند با دستِ خود چیزی بسازند و با چشمِ خود پیشرفت را ببینند.
این مکان، نه از وعده‌های دور و دراز، که از لحظه‌های کوچک و معتبرِ پیشرفتِ واقعی سخن می‌گوید.
اینجا رسم بر آن است که سوال بزرگ، با قدم‌های کوچک پاسخ داده شود و هر شکست،
به عنوان درسِ قابل لمس ثبت گردد. طراحی اینجا، نفس‌گیر نیست؛ بلکه دعوتی‌ست:
دعوت به دقت، دعوت به ساده‌سازیِ پیچیدگی و دعوت به رفتن سراغِ آنچه واقعاً مفید است.
دوستیِ ساده با ابزار، احترام به وقتِ دیگران، و صداقت در ارائهٔ مسیرِ یادگیری، سرلوحهٔ ماست.
هر ماژول، چون یک قصهٔ کوتاه ساخته شده؛ نه طولانی تا خسته کند، نه کوتاه تا بی‌ثمر باشد.
هر واکنش در صفحه، ریتمِ کوچکی دارد که حسِ رضایت را هر بار یادآور می‌شود.
اگر از دیدنِ خورده‌قطعاتِ نظم لذت می‌بری و دوست داری دستت به نتیجه برسد،
اینجا ممکن است همان گوشه‌ای باشد که دنبالش بودی — جایی که مهارت با ادب ترکیب می‌شود.
هر بازدیدگر، می‌تواند یکی از فصل‌ها را بردارد و آن را به رنگِ کاربردیِ خود درآراید.
و در پسِ تمامِ این سادگی‌ها، نیتی روان و انسانی نهفته است: ساختنِ عرصه‌ای
که هرکسی بتواند با آن پیوند برقرار کند؛ نه صرفاً مصرف کند. اینجا، یک صدا هست:
صدایِ کسانی که می‌خواهند بهتر بیاموزند و بهتر بسازند — و همین، آغازِ کافیست.`;

const storyEn = `The first night here began with a gentle light; not from office bulbs,
but from the persistent spark of curiosity and the warmth of ideas. Each small knot of a question
was a thin thread of inquiry tied deftly by the creator; hands who do not seek credit,
but whose work is seen in moments of learning. This place sings in a soft, deliberate tone:
the language of design and thought, a blend of patience and courage, and a weave of colors
that meld quietly. Every visit is an invitation to sit at the table of experience; to ask the "ifs"
and build the "hows". Here, each page is like an illustrated notebook that feeds the heart, not just relays facts;
and each piece of text is a small lantern illuminating the darker corners of the mind.
The maker behind this gentle, rhythmic craft is steady and attentive — Mohammad Mahdi —
carefully arranging pages, framing experiences, and letting people bloom in their own way.
What you see is the product of patience and trial, repeated whispers of error and correction;
a place for those who love to build with their hands and watch their progress with their eyes.
This place speaks not of grand promises but of small, true moments of progress.
Here, large questions are answered by small steps, and every failure is recorded as a tangible lesson.
The design is not overwhelming; it is an invitation: an invitation to refine, to simplify complexity,
and to reach what is genuinely useful. Simple friendship with tools, respect for others' time,
and honesty in delivering a learning path are our guiding principles.
Each module is crafted like a short tale — neither so long as to tire, nor so brief as to be futile.
Every interaction on the page has a tiny rhythm that recaptures a feeling of satisfaction.
If you delight in seeing ordered fragments and want your hands to meet real outcomes,
this might be the corner you were searching for — where skill is paired with courtesy.
Every visitor may take a chapter and color it with their own practical hue.
Beneath these simplicities, a humane intention persists: to make a field
that anyone can connect with, not merely consume. Here there is a voice:
the voice of those who wish to learn better and build better — and that is a beginning enough.`;

/* ===== story render and translate toggle ===== */
const storyContent = document.getElementById('storyContent');
const translateBtn = document.getElementById('translateBtn');
const expandBtn = document.getElementById('expandBtn');
let showingFa = true;

function renderStory() {
  storyContent.textContent = showingFa ? storyFa : storyEn;
}
translateBtn && translateBtn.addEventListener('click', ()=>{
  showingFa = !showingFa;
  renderStory();
  translateBtn.textContent = showingFa ? 'ترجمه ↔ EN' : 'Show original (FA)';
  // optional: focus top
  storyContent.scrollTop = 0;
});
expandBtn && expandBtn.addEventListener('click', ()=>{
  const el = document.getElementById('storyCard');
  if(el.style.maxHeight){
    el.style.maxHeight = '';
    expandBtn.textContent = 'بزرگ‌تر';
  } else {
    el.style.maxHeight = '90vh';
    expandBtn.textContent = 'کوچک‌تر';
  }
});

/* initial render */
renderStory();

/* ===== comments (localStorage) ===== */
const commentList = document.getElementById('commentList');
const cname = document.getElementById('cname');
const cmessage = document.getElementById('cmessage');
function loadComments(){
  const arr = JSON.parse(localStorage.getItem('hs_comments') || '[]');
  commentList.innerHTML = '';
  arr.slice().reverse().forEach(c=>{
    const d = document.createElement('div');
    d.className = 'comment-item';
    d.innerHTML = `<strong>${escapeHtml(c.name)}</strong><div style="margin-top:6px">${escapeHtml(c.msg)}</div>`;
    commentList.appendChild(d);
  });
}
function addComment(){
  const name = cname.value.trim(); const msg = cmessage.value.trim();
  if(!name || !msg){ alert('لطفاً نام و نظر خود را وارد کنید.'); return; }
  const arr = JSON.parse(localStorage.getItem('hs_comments') || '[]');
  arr.push({name, msg, t:Date.now()});
  localStorage.setItem('hs_comments', JSON.stringify(arr));
  cname.value=''; cmessage.value='';
  loadComments();
}
function clearComments(){
  if(confirm('همه نظرات حذف شوند؟')){ localStorage.removeItem('hs_comments'); loadComments(); }
}
document.getElementById('addComment').addEventListener('click', addComment);
document.getElementById('clearComments').addEventListener('click', clearComments);
loadComments();

/* ===== survey ===== */
const voteBtn = document.getElementById('voteBtn');
const surveyResult = document.getElementById('surveyResult');
const resetSurvey = document.getElementById('resetSurvey');

function loadSurvey(){
  const data = JSON.parse(localStorage.getItem('hs_survey') || '{"yes":0,"maybe":0,"no":0}');
  surveyResult.innerHTML = `نتایج — بله: ${data.yes} | تا حدودی: ${data.maybe} | نه: ${data.no}`;
}
voteBtn.addEventListener('click', ()=>{
  const sel = document.querySelector('input[name="vote"]:checked');
  if(!sel){ alert('لطفاً یک گزینه انتخاب کنید.'); return; }
  const key = sel.value;
  const data = JSON.parse(localStorage.getItem('hs_survey') || '{"yes":0,"maybe":0,"no":0}');
  data[key] = (data[key] || 0) + 1;
  localStorage.setItem('hs_survey', JSON.stringify(data));
  loadSurvey();
});
resetSurvey.addEventListener('click', ()=>{
  if(confirm('سنجش بازنشانی شود؟')){ localStorage.removeItem('hs_survey'); loadSurvey(); }
});
loadSurvey();

/* ===== small helpers ===== */
function escapeHtml(s){ return String(s).replace(/[&<>"']/g, c=>({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c])); }

/* Done */
