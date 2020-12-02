const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes)
checkBoxes()
function checkBoxes() {
  const toTriggerLocation = window.innerHeight / 5 * 4; // almost at bottom

  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < toTriggerLocation) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  })
}