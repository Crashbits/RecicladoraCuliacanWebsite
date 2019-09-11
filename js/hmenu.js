const beginAC = 80;
const endAC = 320;
const beginB = 80;
const endB = 320;

const pathA = document.getElementById('pathA');
const pathB = document.getElementById('pathB');
const pathC = document.getElementById('pathC');
const segmentA = new Segment(pathA, beginAC, endAC);
const segmentB = new Segment(pathB, beginB, endB);
const segmentC = new Segment(pathC, beginAC, endAC);
const trigger = document.getElementById('menu-icon-trigger');
let toCloseIcon = true;
const dummy = document.getElementById('dummy');
const wrapper = document.getElementById('menu-icon-wrapper');

wrapper.style.visibility = 'visible';

function inAC(s) {
  s.draw('80% - 240', '80%', 0.3, {
    delay: 0.1,
    callback() {
      inAC2(s);
    },
  });
}

function inAC2(s) {
  s.draw('100% - 545', '100% - 305', 0.6, {
    easing: ease.ease('elastic-out', 1, 0.3),
  });
}

function inB(s) {
  s.draw(beginB - 60, endB + 60, 0.1, {
    callback() {
      inB2(s);
    },
  });
}

function inB2(s) {
  s.draw(beginB + 120, endB - 120, 0.3, {
    easing: ease.ease('bounce-out', 1, 0.3),
  });
}

/* Out animations (to burger icon) */

function outAC(s) {
  s.draw('90% - 240', '90%', 0.1, {
    easing: ease.ease('elastic-in', 1, 0.3),
    callback() {
      outAC2(s);
    },
  });
}

function outAC2(s) {
  s.draw('20% - 240', '20%', 0.3, {
    callback() {
      outAC3(s);
    },
  });
}

function outAC3(s) {
  s.draw(beginAC, endAC, 0.7, {
    easing: ease.ease('elastic-out', 1, 0.3),
  });
}

function outB(s) {
  s.draw(beginB, endB, 0.7, {
    delay: 0.1,
    easing: ease.ease('elastic-out', 2, 0.4),
  });
}
(function () {
  trigger.onclick = function () {
    if (toCloseIcon) {
      inAC(segmentA);
      inB(segmentB);
      inAC(segmentC);

      dummy.className = 'dummy dummy--active';
    } else {
      outAC(segmentA);
      outB(segmentB);
      outAC(segmentC);

      dummy.className = 'dummy';
    }
    toCloseIcon = !toCloseIcon;
  };
}());
