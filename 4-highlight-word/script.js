function highlightWords(paragraph, colours) {
  const container = document.getElementById("content");

  const paragraphElement = document.createElement("p");

  const colourSelector = document.createElement("select");

  colours.forEach((colour) => {
    const optionElement = document.createElement("option");
    optionElement.value = colour;
    optionElement.textContent = colour;
    colourSelector.appendChild(optionElement);
  });

  const words = paragraph.split(" ");

  words.forEach((word) => {
    const wordSpan = document.createElement("span");
    wordSpan.textContent = word + " ";

    wordSpan.addEventListener("click", () => {
      const selectedColour = colourSelector.value;
      if (selectedColour === "none") {
        wordSpan.style.backgroundColor = "";
      } else {
        wordSpan.style.backgroundColor = selectedColour;
      }
    });

    paragraphElement.appendChild(wordSpan);
  });

  container.appendChild(colourSelector);
  container.appendChild(paragraphElement);
}

const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";

const colours = ["yellow", "green", "blue", "none"];

highlightWords(paragraph, colours);
