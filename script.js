// افکت RGB گیمینگ قوی
let hue = 0;

function animateBackground() {
  hue = (hue + 2) % 360; // سرعت تغییر رنگ (۲ به جای ۱)
  document.body.style.background = `linear-gradient(135deg, 
    hsl(${hue}, 100%, 50%), 
    hsl(${(hue + 90) % 360}, 100%, 50%), 
    hsl(${(hue + 180) % 360}, 100%, 50%)
  )`;
  document.body.style.backgroundSize = "400% 400%"; // رنگا بزرگ و پررنگ
  document.body.style.transition = "background 0.2s ease"; // انیمیشن نرم
  requestAnimationFrame(animateBackground);
}

animateBackground();

