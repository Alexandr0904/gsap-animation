// gsap.from(".header", {
//   duration: 1,
//   y: "-100%",
//   ease: "bounce.out",
// });
// gsap.from(".link", {
//   duration: 1,
//   opacity: 0,
//   delay: 1,
//   stagger: 0.5,
// });
// ? Сначала обращаемся к библиотеке gsap, функция from описывает состояния с которого будет начинаться анимация .
//  ! duration время выполнения анимации. Ease стиль анимации. Delay задержка перед выполнением анимации. Stagger задержка между элементами анимации
// gsap.from(".right", {
//   duration: 1,
//   x: "-100vw",
//   delay: 1,
//   ease: "power1.in",
// });
// gsap.from(".left", {
//   duration: 1,
//   x: "-100%",
//   delay: 2,
// });
// gsap.from(".footer", {
//   duration: 1,
//   y: "100%",
//   delay: 2.5,
//   ease: "elastic",
// });
// gsap.fromTo(
//   ".button",
//   {
//     opacity: 0,
//     scale: 0,
//     rotation: 720,
//   },
//   {
//     duration: 1,
//     opacity: 1,
//     scale: 1,
//     rotation: 0,
//     delay: 3.5,
//   }
// );
// ?fromTo позволяет описать два состояния анимации(1 объект-начальное состояние, 2 объект - конечное состояние )
// ! rotation вращение вокруг своей оси  в градусах. scale масштаб элемента(1)
const timeline = gsap.timeline({
  defaults: {
    // Сюда передаются параметры по умолчанию которые применяются на каждую анимацию
    duration: 1,
  },
});
// const timeline = gsap.timeline() создаём объект для последовательной анимации(автоматически определяется задержка между анимациями)
timeline
  .from(".header", {
    y: "-100%",
    ease: "bounce.out",
  })
  .from(".link", {
    opacity: 0,
    stagger: 0.5,
  })
  .from(".right", {
    x: "-100vw",
    ease: "power1.in",
  })
  .from(".left", {
    x: "-100%",
  })
  .from(".footer", {
    y: "100%",
    ease: "elastic",
  })
  .fromTo(
    ".button",
    {
      opacity: 0,
      scale: 0,
      rotation: 720,
    },
    {
      opacity: 1,
      scale: 1,
      rotation: 0,
    }
  );
