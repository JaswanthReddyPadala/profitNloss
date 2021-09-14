let output = document.querySelector(".main-output");

const checkButton = document.querySelector("#btn-calculate");

checkButton.addEventListener("click", calculate)

function calculate() {
  let stockPrice = document.querySelector("#stock-price").value;
  let stockQuantity = document.querySelector("#stock-quantity").value;
  let currentPrice = document.querySelector("#current-price").value;

  if (stockPrice>0 && stockQuantity>0 && currentPrice>0) {
    let buyPrice = stockPrice * stockQuantity;
    let presentPrice = currentPrice * stockQuantity;
    let difference = (presentPrice - buyPrice).toFixed(2);
    let percentage = ((presentPrice / buyPrice) * 100 - 100).toFixed(2);
    if (difference > 0) {
      output.style.backgroundColor = "#41B784";
      output.style.color = "#ffffff";
      output.innerText = `Your gained ${percentage}%. You total profit is ${difference}`;
    } else if (difference == 0) {
      output.style.backgroundColor = "white";
      output.style.color = "#181818";
      output.innerText = "Your Money is just the way it is. 😉";
    } else {
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
    output.style.color = "white";
    output.style.backgroundColor="black";
    output.innerText = "Please enter valid inputs";
  }
};
