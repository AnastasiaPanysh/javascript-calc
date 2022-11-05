const rectangle = document.querySelectorAll('.rectangle')
const paragraf = document.querySelectorAll('.theme p')
for (let i = 0; i < paragraf.length; i++) {
  paragraf[i].addEventListener('mouseover', () => {
    rectangle[i].hidden = false;
  })
  paragraf[i].addEventListener('mouseout', () => {
    rectangle[i].hidden = true;
  })
};





const res = document.querySelector('.result');
const history = document.querySelector('.history');
const calc = document.querySelector('.calc-wrapper');
let resultStrintMath = ''

calc.addEventListener('click', function (event) {
  let value = event.target.textContent;

  switch (value) {
    case '=':
      history.innerHTML = resultStrintMath
      res.innerHTML = eval(resultStrintMath)
      resultStrintMath = ''
      break;
    case 'C':
      res.innerHTML = ''
      history.innerHTML = ''

      break;
    case '±':
      if (res.textContent) {
        resultStrintMath = `${+res.textContent * -1}`
        res.innerHTML = resultStrintMath
      } else {
        history.innerHTML = `${+history.textContent * -1}`
      }
      break;
    case '%':
      if (res.textContent) {
        resultStrintMath = `${+res.textContent * -1}`
        res.innerHTML = resultStrintMath
      } else {
        history.innerHTML = `${+history.textContent * -1}`
      }
      break;

    default:
      if (history.textContent) {
        history.innerHTML = ''
        res.innerHTML = ''
      }
      resultStrintMath += value
      res.textContent = resultStrintMath;
  }
})