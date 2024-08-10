let container = document.querySelector(".container");
container.classList = "flex border-2 border-gray-400 m-2 flex-wrap w-80 h-80";

//let box2 = document.createElement("div");
//box2.classList = "w-52 h-52 bg-yellow-600";

//let box3 = document.createElement("div");
//box3.classList = "w-52 h-52 bg-red-600";

for (let i = 1; i <= 16 * 16; i++) {
  const box1 = document.createElement("div");
  box1.classList = "flexBox";
  container.appendChild(box1);
}
//container.appendChild(box2);
//container.appendChild(box3);
