let counterValue = document.querySelector("#counterValue");
let incrementBtn = document.querySelector("#increment");
let decrementBtn = document.querySelector("#decrement");
let incrementByInput = document.querySelector("#incrementBy");
let resetBtn = document.querySelector("#reset");

let value = 0;

function increamentByHandler(e) {
  if (e.key === "Enter") {
    if (incrementByInput.value.trim() === "") {
      alert("Input cannot be blank");
    }
  }
}

function onStart() {
  // Increment Button
  incrementBtn.addEventListener("click", () => {
    if (incrementByInput.value.trim() === "") {
      value++;
    } else {
      const incrementBy = parseInt(incrementByInput.value, 10);
      if (!isNaN(incrementBy)) {
        value += incrementBy;
      } else {
        alert("Please enter a valid number");
        return;
      }
    }
    counterValue.textContent = value;
  });

  // Decrement Button
  decrementBtn.addEventListener("click", () => {
    if (value <= 0) {
      alert("Cannot go below 0");
      value = 0;
    } else if (incrementByInput.value.trim() === "") {
      value--;
    } else {
      const incrementBy = parseInt(incrementByInput.value, 10);
      if (!isNaN(incrementBy)) {
        value -= incrementBy;
      } else {
        alert("Please enter a valid number");
        return;
      }
    }
    counterValue.textContent = value;
  });

  // Input Handler
  incrementByInput.addEventListener("keypress", increamentByHandler);

  // Reset Button
  resetBtn.addEventListener("click", () => {
    value = 0;
    counterValue.textContent = value;
    incrementByInput.value = "";
  });
}

onStart();
