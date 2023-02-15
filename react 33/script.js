let count = 0;
const counterElement = document.getElementById('counter');

function increment() {
  if (count < 10) {
    count++;
    updateCounter();
  }
}

function decrement() {
  if (count > 0) {
    count--;
    updateCounter();
  }
}

function updateCounter() {
  counterElement.innerText = count;
  if (count < 5) {
    counterElement.style.color = "green";
  } else if (count < 10) {
    counterElement.style.color = "blue";
  } else {
    counterElement.style.color = "red";
  }
}
