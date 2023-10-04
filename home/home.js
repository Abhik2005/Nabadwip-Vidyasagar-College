function Time_DateFunction() {
  setInterval(function () {
    const date = new Date();
    document.getElementById("time_date").innerHTML = date;
  }, 1000);
}
Time_DateFunction();

function OpacityAnimation() {
  setInterval(function () {
    gsap.to("#clp", {
      opacity: 0.1,
      duration: 0.1,
    });
    gsap.to("#clp", {
      opacity: 1,
      delay: 0.2,
      duration: 0.5,
    });
  }, 800);
}
OpacityAnimation();
