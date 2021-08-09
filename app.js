let output = document.querySelector(".main-output");

const checkButton = document.querySelector("#btn-calculate");

checkButton.addEventListener("click", function () {
  let stockPrice = document.querySelector("#stock-price").value;
  let stockQuantity = document.querySelector("#stock-quantity").value;
  let currentPrice = document.querySelector("#current-price").value;
  console.log(stockPrice, stockQuantity, currentPrice);

  if (true) {
    let buyPrice = stockPrice * stockQuantity;
    let presentPrice = currentPrice * stockQuantity;
    let difference = (presentPrice - buyPrice).toFixed(2);
    let percentage = ((presentPrice / buyPrice) * 100 - 100).toFixed(2);
    if (difference > 0) {
      output.style.backgroundColor = "#41B784";
      output.style.color = "#ffffff";
      output.innerText = `Your gained ${percentage}%. You total profit is ${difference}`;
    } else if (difference === 0) {
      output.innerText = "Your Money is just the way it is. 😉";
    } else {
      console.log(percentage*-1);
        output.style.backgroundColor = "#EA5A5B";
        if(percentage*-1 > 50){
            output.style.backgroundColor = "crimson";
            output.innerText = ` Damn... you lost ${percentage}%. You total loss is ${difference}`;
        }
        else{
          output.innerText = `Your lost ${percentage}%. You total loss is ${difference}`;

        }
      output.style.color = "#ffffff";
    }
  } else {
    alert("Fill all the input details properly!!!");
  }
});
