
let translated = false;

function translateStory() {
  const story = document.getElementById('story');
  if(!translated){
    story.innerText = "Once upon a time, in a world full of technology and learning, a website named hellosite emerged... This site was created for all those who love learning and new experiences. Every day, people from around the world visited it and spent hours exploring the incredible design, engaging content, and advanced features. Its developer, Mohammad Mahdi, poured infinite love and energy into every corner of the site. From luxurious fonts to smooth animations and the RGB colors gradually changing, everything gave the feeling of a million-dollar experience. Users not only learned but were inspired, interacted, and felt like they were in a magical world. This site became a place where everyone who saw it said, 'Wow! This site is truly amazing!'...";
    translated = true;
  } else {
    story.innerText = "روزی روزگاری، در جهانی پر از تکنولوژی و یادگیری، سایتی پدید آمد... این سایت برای همه کسانی که عاشق تجربه‌های جدید و آموزش هستند ساخته شد. هر روز افراد از سراسر جهان وارد آن می‌شدند و با طراحی بی‌نظیر، محتواهای جذاب و امکانات پیشرفته، ساعت‌ها در آن وقت می‌گذراندند. توسعه‌دهنده‌ی آن، محمد مهدی، با عشق و انرژی بی‌نهایت، هر گوشه سایت را با جزئیات خارق‌العاده پر کرده بود. از فونت‌های لاکچری و انیمیشن‌های نرم گرفته تا رنگ‌های RGB که آرام آرام تغییر می‌کردند، همه چیز حس یک تجربه میلیونی را منتقل می‌کرد. کاربران نه تنها آموزش می‌دیدند بلکه الهام می‌گرفتند، تعامل می‌کردند و احساس می‌کردند در یک دنیای جادویی هستند. این سایت تبدیل به مکانی شد که هر کس آن را دید گفت: «واااااااو! این سایت حقیقتا بی‌نظیره!»...";
    translated = false;
  }
}

function vote(answer) {
  const voteResult = document.getElementById('voteResult');
  if(answer === 'yes'){
    voteResult.innerText = "شما رای دادید: بله 👍";
  } else {
    voteResult.innerText = "شما رای دادید: نه 👎";
  }
}
