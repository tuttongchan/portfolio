//////////////////////////////////////////
// Typing Animation

const texts = ["Tut Tongchantra"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.querySelector(".span-name").textContent = letter;
  //   if(letter.length === currentText.length){
  //       count++;
  //       index = 0;
  //   }
  setTimeout(type, 80);
})();

//////////////////////////////////////////
// Smooth Scroll Animation

const btnScrollTo = document.querySelector(".logo-arrow");
const projectsSection = document.querySelector(".section-projects");

btnScrollTo.addEventListener("click", function (e) {
  const s1coords = projectsSection.getBoundingClientRect();
  //   console.log(s1coords);

  //   console.log(e.target.getBoundingClientRect());

  //   console.log("Current scroll (X/Y)", window.pageXOffset, window.pageYOffset);

  //   console.log(
  //     "height/width viewport",
  //     document.documentElement.clientHeight,
  //     document.documentElement.clientWidth
  //   );

  // Scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  projectsSection.scrollIntoView({ behavior: "smooth" });
});
