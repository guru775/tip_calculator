// console.log("hi");

// document.querySelector("input").addEventListener("change", (e) => {
//   console.log(document.getElementById("amount").value);
// });

// console.log(document.getElementById("tip").innerHTML);

function billAmount() {
  let bill = document.getElementById("amount").value;
  document.getElementById("display-bill").innerText = bill;
}

function reset() {
  document.getElementById("amount").value = "";
  document.getElementById("count").value = "";
  document.getElementById("display-tip").innerText = 0;
  document.getElementById("display-bill").innerText = 0;
}

function tipPercent1() {
  document.getElementById("display-tip").innerText = 5;
}
