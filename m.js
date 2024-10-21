document.getElementById("tunnel").animate([
    { transform: 'translate3D(0, 0, 0)' }, 
    { transform: 'translate3D(0, -300px, 0)' }
  ], {
    duration: 1000,
    iterations: Infinity
  });
  var aliceTumbling = [
    { transform: 'rotate(0) translate3D(-50%, -50%, 0)', color: '#000' }, 
    { color: '#fff', offset: 0.3},
    { transform: 'rotate(360deg) translate3D(-50%, -50%, 0)', color: '#000' }
  ];
  var aliceTiming = {
    duration: 3000,
    iterations: Infinity
  };
  const startButton = document.querySelector(".button1");
  const stopButton = document.querySelector(".button2");
  const alice = document.getElementById("alice");
  startButton.addEventListener("click", () => {
    alice.animate(aliceTumbling, aliceTiming);
  });
  stopButton.addEventListener("click", () => {
    alice.getAnimations().forEach((animation) => animation.cancel());
  });