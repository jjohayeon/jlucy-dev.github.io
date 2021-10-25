function page3() {
  let t1 = gsap.timeline();
  t1.to("#section3 .h2", {
    duration: 1,
    y: 100,
    opacity: 1,
  });
}

function page4() {
  let t2 = gsap.timeline();
  t2.to("#section4 .txt-box", {
    duration: 1,
    y: -50,
    opacity: 1,
  });
  t2.to("#section4 .sec4-bg", {
    duration: 1,
    y: -50,
    opacity: 1,
  });
}
