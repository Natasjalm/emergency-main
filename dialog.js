const btn_open = document.querySelector("#cta_open1");
const btn_close = document.querySelector("#clos_button");

btn_open.addEventListener("click", openModal);
btn_close.addEventListener("click", closeModal);

function openModal() {
  document.querySelector("#dialog1").classList.add("fadeIN");
  document.querySelector("#dialog1").showModal();
}

function closeModal() {
  document.querySelector("#dialog1").clost();
  document.querySelector("#dialog1").classList.add("rotate_tf");
}
