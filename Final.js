var plus = document.querySelectorAll(".fa-plus-circle");
plus.forEach((button, index) => {
  button.addEventListener("click", function () {
    var count = document.querySelectorAll(".quantity")[index];
    count.textContent = parseInt(count.textContent) + 1;
    console.log(count.textContent);
    updateprice();
  });
});
var minus = document.querySelectorAll(".fa-minus-circle");
minus.forEach((button, index) => {
  button.addEventListener("click", function () {
    var countMinus = document.querySelectorAll(".quantity")[index];
    countMinus.textContent = parseInt(countMinus.textContent) - 1;
    updateprice();
  });
});
var elem = document.querySelectorAll(".fa-heart");
elem.forEach((button, index) => {
  button.addEventListener("click", function () {
    if (button.style.color == "red") {
      button.style.color = "";
    } else if (button.style.color == "") {
      button.style.color = "red";
    }
  });
});
var del = document.querySelectorAll(".fa-trash-alt");
del.forEach((button, index) => {
  button.addEventListener("click", function () {
    var y = document.querySelectorAll(".card-body")[index];
    y.remove();
  });
});
function updateprice() {
  var quant = document.querySelectorAll(".quantity");
  var price = document.querySelectorAll(".unit-price");
  var sum = 0;
  price.forEach((uno, index) => {
    const priceValue = parseFloat(uno.textContent.replace("$", ""));
    const quantValue = parseInt(quant[index].textContent);
    sum += quantValue * priceValue;
  });

  document.querySelector(".total").textContent = sum + "$";
}
