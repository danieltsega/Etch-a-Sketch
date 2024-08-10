let container = document.querySelector(".container");
container.classList = "flex border-2 border-gray-400 m-2 flex-wrap w-80 h-80";

for (let i = 1; i <= 16 * 16; i++) {
  const box1 = document.createElement("div");
  box1.classList = "flexBox";

  container.appendChild(box1);
  box1.addEventListener("mouseover", function () {
    box1.classList.add("bg-black");
  });
}
