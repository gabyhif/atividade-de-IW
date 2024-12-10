const inputText = document.getElementById("inputText");
const addButton = document.getElementById("addButton");
const countButton = document.getElementById("countButton");
const contentDiv = document.getElementById("contentDiv");

addButton.addEventListener("click", () => {
  const text = inputText.value.trim();
  if (text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    contentDiv.appendChild(paragraph);
    inputText.value = "";
    inputText.focus();
  }
});

countButton.addEventListener("click", () => {
  const paragraphCount = contentDiv.getElementsByTagName("p").length;
  alert(`${paragraphCount} linha(s) foram adicionada(s).`);
});
