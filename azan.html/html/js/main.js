// Generate bintang secara acak
const container = document.getElementById('container');

// Create stars
for(let i = 0; i < 100; i++) {
  const star = document.createElement('div');
  star.className = 'star';
  
  // Random position and size
  star.style.left = Math.random() * 100 + '%';
  star.style.top = Math.random() * 100 + '%';
  star.style.width = Math.random() * 10 + 'px';
  star.style.height = star.style.width;
  
  // Random animation duration (1-3s)
  star.style.setProperty('--duration', Math.random() * 2 + 1 + 's');
  
  container.appendChild(star);
}

// Create comet
const comet = document.createElement('div');
comet.className = 'comet';
comet.style.top = Math.random() * 50 + '%';
comet.style.animationDelay = Math.random() * 5 + 's';
container.appendChild(comet);

/* notifikasi offline dan online */
window.addEventListener("online", () => alert("you are online"))
window.addEventListener("offline", () => alert("you are offline"))