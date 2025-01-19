function listOfColours(colours) {
  const contentDiv = document.getElementById("content");

  const select = document.createElement("select");

  const display = document.createElement("p");
  display.textContent = "You have selected: none";

  colours.forEach((colour) => {
    const option = document.createElement("option");
    option.value = colour;
    option.textContent = colour;

    select.appendChild(option);
  });

  select.addEventListener("change", () => {
    const selectedColour = select.value;
    display.textContent = `You have selected: ${selectedColour}`;
    display.style.color = selectedColour;
  });

  contentDiv.appendChild(select);
  contentDiv.appendChild(display);
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
