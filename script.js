// افکت RGB پس‌زمینه
let hue = 0;
function animateBackground() {
  hue = (hue + 1) % 360;
  document.body.style.background = `linear-gradient(135deg,
    hsl(${hue}, 100%, 50%),
    hsl(${(hue + 120) % 360}, 100%, 50%),
    hsl(${(hue + 240) % 360}, 100%, 50%))`;
  document.body.style.backgroundSize = "400% 400%";
  requestAnimationFrame(animateBackground);
}
animateBackground();

// افکت موس → نور نئونی حرکت کنه
document.addEventListener("mousemove", (e) => {
  let x = (e.clientX / window.innerWidth) * 360;
  document.body.style.filter = `hue-rotate(${x}deg)`;
});

