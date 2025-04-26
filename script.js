// Target elements
const description = document.getElementById('description');
const changeTextBtn = document.getElementById('change-text-btn');
const changeStyleBtn = document.getElementById('change-style-btn');
const addElementBtn = document.getElementById('add-element-btn');
const removeElementBtn = document.getElementById('remove-element-btn');
const dynamicSection = document.getElementById('dynamic-section');

// Change text when button clicked
changeTextBtn.addEventListener('click', () => {
  description.textContent = "You clicked and changed me! 🔥";
});

// Change style dynamically
changeStyleBtn.addEventListener('click', () => {
  description.style.color = "#ff5722";
  description.style.fontWeight = "bold";
  description.style.fontSize = "24px";
});

// Add new dynamic element
addElementBtn.addEventListener('click', () => {
  const newElement = document.createElement('div');
  newElement.className = 'dynamic-element';
  newElement.textContent = "Hey! I'm a new dynamic element!";
  dynamicSection.appendChild(newElement);
});

// Remove last added dynamic element
removeElementBtn.addEventListener('click', () => {
  if (dynamicSection.lastElementChild) {
    dynamicSection.removeChild(dynamicSection.lastElementChild);
  }
});
