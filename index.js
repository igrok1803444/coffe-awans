const form = document.querySelector(".right-section-form");

const coffee = [
  { id: 1, price: 5 },
  { id: 2, price: 7 },
  { id: 3, price: 6 },
];

const handleSubmit = (event) => {
  event.preventDefault();

  const { children } = event.target;
  const { submitButton } = children;
  const coffeeWeight = Number(children.coffeeWeight.value);
  const coffeeNumber = Number(children.coffeeNumber.value);
  console.log(coffeeWeight);
  console.log(coffeeNumber);

  let price = 0;

  coffee.find((item) => {
    if (coffeeNumber === item.id) {
      price = item.price * coffeeWeight;
      return;
    }
  });

  const outputText = `Koszt zamówienia wynosi: ${price} zł`;
  submitButton.nextSibling.textContent = outputText;
};

form.addEventListener("submit", handleSubmit);
