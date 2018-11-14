const page = document.querySelector("#buttonDiv");
const buttonColors = ["#3aa757", "#e8453c", "#f9bb2d", "#4688f1"];

function constructOptions(buttonColors) {
  buttonColors.forEach(color => {
    const button = document.createElement("button");
    button.style.backgroundColor = color;
    button.addEventListener("click", () => {
      chrome.storage.sync.set({ color }, () => {
        console.log("color is " + color);
      });
    });
    page.appendChild(button);
  });
}

constructOptions(buttonColors);
