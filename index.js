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

// This Is For The Gsap Animation Code !!!!

// This Is The Code For The Fade-In On Scroll Observer !!!!!!

// const options = {
//   threshold: 1,
// };
// const faders = document.querySelectorAll(".contain_img");
// const appearOnScroll = new IntersectionObserver(function (
//   entries,
//   apperOnScroll
// ) {
//   entries.forEach((entry) => {
//     if (!entry.isIntersecting) {
//       return;
//     } else {
//       entry.target.classList.add("appear");
//       appearOnScroll.unobserve(entry.target);
//     }
//   });
// },
// options);

// faders.forEach((fader) => {
//   appearOnScroll.observe(fader);
// });

// This Is The Code For The Fade-In On Scroll Observer !!!!!!
