
function page1() {
  let page1 = gsap.timeline();
  page1.to("#section1 .txt-box p", {
      duration: 1.2,
      y: 0,
      opacity: 1,
    })
  // page1.to("#section1 .txt-box p:nth-child(1), #section1 .txt-box p:nth-child(2)", {
  //   duration: .3,
  //   y: 0,
  //   opacity: 1,
  // });
  // page1.to("#section1 .txt-box p:nth-child(2)", {
  //   duration: .3,
  //   y: 0,
  //   opacity: 1,
  // });
  // page1.to(sec1_child, {
  //   duration: .3,
  //   y: 0,
  //   opacity: 1,
  // });
  // page1.to("#section1 .txt-box p:nth-child(4)", {
  //   duration: .3,
  //   y: 0,
  //   opacity: 1,
  // });
  // page1.to("#section1 .txt-box p:nth-child(5)", {
  //   duration: .3,
  //   y: 0,
  //   opacity: 1,
  // });
  // page1.to("#section1 .txt-box p:nth-child(6)", {
  //   duration: .3,
  //   y: 0,
  //   opacity: 1,
  // });
  // page1.to("#section1 .txt-box p:nth-child(7)", {
  //   duration: .3,
  //   y: 0,
  //   opacity: 1,
  // });
  page1.to("#section1 .txt-box .link-box", {
    duration: 1,
    y: 0,
    opacity: 1,
  });
  page1.to("#section1 .sec1-bg", {
    duration: 1,
    x: 0,
    opacity: 1,
  });
}
page1();

function page3() {
  let page3 = gsap.timeline();
  page3.to("#section3 .h2", {
    duration: 1,
    y: 100,
    opacity: 1,
  }); 
}

function page4() {
  let page4 = gsap.timeline();
  page4.to("#section4 .txt-box", {
    duration: 1,
    y: -50,
    opacity: 1,
  });
  page4.to("#section4 .sec4-bg", {
    duration: .5,
    y: -50,
    opacity: 1,
  });
}

function page5() {
  let page5 = gsap.timeline();
  page5.to("#section5 .txt-box", {
    duration: 1,
    y: -50,
    opacity: 1,
  });
  page5.to("#section5 .sec5-bg", {
    duration: 1,
    y: -50,
    opacity: 1,
  });
}

function page6() {
  let page6 = gsap.timeline();
  page6.to("#section6 .txt-box", {
    duration: 1,
    y: -50,
    opacity: 1,
  });
  page6.to("#section6 .sec6-bg", {
    duration: 1,
    y: -50,
    opacity: 1,
  });
}


function page7() {
  let page7 = gsap.timeline();
  page7.to("#section7 .h2", {
    duration: 1,
    y: 100,
    opacity: 1,
  });
}


function page8() {
  let page8 = gsap.timeline();
  page8.to("#section8 .user", {
    duration: 1,
    y: 0,
    opacity: 1,
    delay: 1,
  });
  page8.to("#section8 img", {
    duration: 1,
    y: 0,
    opacity: 1,
  });
}

function page9() {
  let page9 = gsap.timeline();
  page9.to("#section9 .user", {
    duration: 1,
    y: 0,
    opacity: 1,
    delay: 1,
  });
  page9.to("#section9 img", {
    duration: 1,
    y: 0,
    opacity: 1,
  });
  page9.to("#section9 h4, #section9 p", {
    duration: 1,
    y: 0,
    opacity: 1,
  });
}

function page10() {
  let page10 = gsap.timeline();
  page10.to("#section10 h4", {
    duration: 1,
    y: 0,
    opacity: 1,
    delay: 0.5
  });
  page10.to("#section10 .partnerShip1-bg", {
    duration: 1,
    y: 0,
    opacity: 1,
  });
  page10.to("#section10 h3, #section10 p", {
    duration: 1,
    y: 0,
    opacity: 1,
  });
}

function page11() {
  let page11 = gsap.timeline();
  page11.to("#section11 h4", {
    duration: 1,
    y: 0,
    opacity: 1,
    delay: 0.5
  });
  page11.to("#section11 .partnerShip2-bg", {
    duration: 1,
    y: 0,
    opacity: 1,
  });
  page11.to("#section11 h3, #section11 p", {
    duration: 1,
    y: 0,
    opacity: 1,
  });
}

function page12() {
  let page12 = gsap.timeline();
  page12.to("#section12 h4", {
    duration: 1,
    y: 0,
    opacity: 1,
    delay: 0.5
  });
  page12.to("#section12 .partnerShip3-bg", {
    duration: 1,
    y: 0,
    opacity: 1,
  });
  page12.to("#section12 h3, #section12 p", {
    duration: 1,
    y: 0,
    opacity: 1,
  });
}