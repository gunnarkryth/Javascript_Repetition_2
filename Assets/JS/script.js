function build_markup() {
  window.onload = function () {
    create_click_counter_button();
    create_validation_field();
    create_colors();
  };
}

build_markup();

// OPGAVE 1
var a = 1;
var b = 2;
var c = 3;

// change_values();

function change_values() {
  a = a * 10;
  b = b * 10;
  c = c * 10;
  console.log(a, b, c);
}

// OPGAVE 2
calculate();

function calculate() {
  a = 992 + 237;
  b = 44 - 12;
  c = 142 * 23;
  d = 94 / 23;
  console.log(a, b, c, d);
}

// OPGAVE 3
function create_click_counter_button() {
  const click_counter = document.createElement("button");
  let click_count = 0;
  click_counter.textContent = click_count;
  click_counter.onclick = function () {
    click_count++;
    click_counter.textContent = click_count;
  };
  document.body.appendChild(click_counter);
}

// OPGAVE 4
function create_validation_field() {
  const input = document.createElement("input");
  input.type = "text";
  input.id = "input";
  document.body.appendChild(input);
  input.addEventListener("input", () => {
    let input_value = input.value;
    if (input_value.length > 8) {
      input_value = input_value.slice(0, 8);
    }
    input.value = input_value;
  });
}

// OPGAVE 5
function create_colors() {
  const color_container = document.createElement("section");
  color_container.id = "color_container";
  for (let i = 0; i < 4; i++) {
    const color_square = document.createElement("span");
    color_square.className = "color_square";
    color_container.appendChild(color_square);
  }
  document.body.appendChild(color_container);

  document.querySelectorAll(".color_square").forEach((square) => {
    square.addEventListener("mouseover", mouse_over);
  });
}

function random_color() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function mouse_over(event) {
  const color = random_color();
  event.target.style.backgroundColor = color;
}
