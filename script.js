const nameInput = document.querySelector(".name");
const emailInput = document.querySelector(".email");
const imgInput = document.querySelector(".img");
const readBtn = document.querySelector(".read");
const createBtn = document.querySelector(".create");
const block = document.querySelector(".hero-block");

function view() {
  let data = JSON.parse(localStorage.getItem("data")) || [];

  block.innerHTML = "";

  data.forEach((el) => {
    block.innerHTML += `<div class="info">
      <img src="${el.img}">
      <div class="info-nav"><h3>${el.name}</h3><h3>${el.email}</h3></div>
      <button class="deleteBtn">Delete</button>
    </div>`;
  });

  let deleteButtons = document.querySelectorAll(".deleteBtn");
  deleteButtons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      deleteItem(index);
    });
  });
}

createBtn.addEventListener("click", () => {
  add();
});

readBtn.addEventListener("click", () => {
  block.style.display = "inline-flex";
});

function add() {
  let data = JSON.parse(localStorage.getItem("data")) || [];

  let obj = {
    name: nameInput.value,
    email: emailInput.value,
    img: imgInput.value,
  };

  let res = [...data, obj];
  localStorage.setItem("data", JSON.stringify(res));

  view();
}

function deleteItem(index) {
  let data = JSON.parse(localStorage.getItem("data")) || [];
  data.splice(index, 1);
  localStorage.setItem("data", JSON.stringify(data));
  view();
}

view();
