let input = document.getElementById("enter-input");
const btn = document.getElementById("submit");
let qrImage = document.getElementById("qrImage");
const display = document.getElementById("displayBox");

const url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

async function displayQr() {
  //   if (input.value == "") {
  //     display.classList.add("show-text");
  //     console.log(display.className);
  //     display.innerHTML = "Enter Something";
  //     return;
  //   }
  qrImage.src = `${url}${input.value}`;
  input.value = "";
  display.classList.add("show-img");
}
btn.addEventListener("click", () => {
  displayQr();
});
