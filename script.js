// Pétalas caindo
const emojis = ['🌸', '🌹', '❤️', '🌺', '💕', '✿', '💗'];
const container = document.getElementById('petals');

for (let i = 0; i < 26; i++) {
  const p = document.createElement('div');
  p.className = 'petal';
  p.textContent = emojis[Math.floor(Math.random() * emojis.length)];
  p.style.left = Math.random() * 100 + 'vw';
  p.style.fontSize = (0.8 + Math.random() * 1.3) + 'rem';
  p.style.animationDuration = (7 + Math.random() * 10) + 's';
  p.style.animationDelay = (Math.random() * 12) + 's';
  container.appendChild(p);
}

// Música e splash
const audio = document.getElementById('audio');
const btn   = document.getElementById('musicBtn');
const splash = document.getElementById('splash');
let playing = false;

function entrar() {
  // Esconde splash com fade
  splash.style.transition = 'opacity 1s';
  splash.style.opacity = '0';
  setTimeout(() => splash.style.display = 'none', 1000);

  // Toca música — garantido pois veio de interação do usuário
  audio.volume = 0.6;
  audio.play();
  playing = true;
  btn.textContent = '🎵';
}

function toggleMusic() {
  if (playing) {
    audio.pause();
    playing = false;
    btn.textContent = '▶️';
  } else {
    audio.play();
    playing = true;
    btn.textContent = '🎵';
  }
}
