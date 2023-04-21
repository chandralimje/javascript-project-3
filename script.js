// 16777215
btnId = document.getElementById("btn");
colorId = document.getElementById("color");

const colorUpdate = () => {
  let randomnum = Math.floor(Math.random() * 16777215);
  let ranCode = "#" + randomnum.toString(16);

  document.body.style.backgroundColor = ranCode;

  colorId.innerText = ranCode;

  navigator.clipboard.writeText(ranCode);
};

btnId.addEventListener("click", () => {
  colorUpdate();
});

colorUpdate()