// This Is For The Gsap Animation Code !!!!

gsap.from("#rightText", {
  duration: 5,
  ease: "power2.out",
  x: 2000,
});

gsap.from(".contain_img img", {
  duration: 6,
  ease: "power2.out",
  x: -2000,
});

gsap.from(".imgOne", {
  duration: 5,
  ease: "power2-out",
  x: 2000,
  delay: 2,
});

gsap.from(".imgTwo", {
  duration: 6,
  ease: "power2-out",
  x: 2000,
  delay: 2,
});

gsap.from(".contain_offset h2 ", {
  duration: 5,
  ease: "power2-out",
  x: -1000,
  delay: 1,
});

gsap.from(".contain_offset p ", {
  duration: 6,
  ease: "power2-out",
  x: -2000,
  delay: 1,
});
// This Is For The Gsap Animation Code !!!!

// This Is The Code For The Fade-In On Scroll Observer !!!!!!

const options = {
  threshold: 0,
};
const faders = document.querySelectorAll(".contain_offset");
const appearOnScroll = new IntersectionObserver(function (
  entries,
  apperOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
options);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});

// This Is The Code For The Fade-In On Scroll Observer !!!!!!
