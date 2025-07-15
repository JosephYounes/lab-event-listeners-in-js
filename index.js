function getRandomColor() {
  const letters = '0123456789ABCDEF';
  return '#' + Array.from({ length: 6 })
    .map(() => letters[Math.floor(Math.random() * 16)])
    .join('');
}
function changeBackgroundColor() {
  document.body.style.backgroundColor = getRandomColor();
}
function resetBackgroundColor() {
  document.body.style.backgroundColor = 'white';
}
function displayKeyPress(event) {
  const display = document.getElementById('keyPressDisplay');
  display.textContent = `Last Key Pressed: "${event.key}"`;
}
function displayUserInput(event) {
  const display = document.getElementById('textInputDisplay');
  display.textContent = `Your input: "${event.target.value}"`;
}
function initInteractivePage() {
  const changeBtn = document.getElementById('changeColorButton');
  const resetBtn = document.getElementById('resetColorButton');
  const textInput = document.getElementById('textInput');

  changeBtn.addEventListener('click', changeBackgroundColor);
  resetBtn.addEventListener('dblclick', resetBackgroundColor);

  document.addEventListener('keydown', displayKeyPress);
  textInput.addEventListener('input', displayUserInput);
}
window.addEventListener('DOMContentLoaded', initInteractivePage);

