function createBalloon() {
  const balloon = document.createElement('div');
  balloon.classList.add('balloon');
  balloon.style.left = Math.random() * 100 + "vw";
  balloon.style.animationDuration = (4 + Math.random() * 2) + "s";
  document.querySelector(".balloon-container").appendChild(balloon);

  setTimeout(() => {
    balloon.remove();
  }, 6000);
}

// Generate balloons continuously
setInterval(createBalloon, 300);
