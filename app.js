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

const dark = document.querySelector('.dark')
const light = document.querySelector('.light')
const link = document.querySelector('.theme-link');
dark.addEventListener('click', () => {
  let darkTheme = "styleDark.css";
  let current = link.getAttribute("href");
  current = darkTheme;
  link.setAttribute("href", current)
})

light.addEventListener('click', () => {
  let lightTheme = "style.css";
  let current = link.getAttribute("href");
  current = lightTheme;
  link.setAttribute("href", current)
})


const res = document.querySelector('.result');
const history = document.querySelector('.history');
const calc = document.querySelector('.calc-wrapper');
let resultStrintMath = ''

calc.addEventListener('click', function (event) {
  let value = event.target.textContent;

  switch (value) {
    case '=':
      history.innerHTML = resultStrintMath;
      if (+res%1===0) {
        res.innerHTML = eval(resultStrintMath)
      } else {
        res.innerHTML = eval(resultStrintMath).toFixed(2)
      }
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
        resultStrintMath = `${res.textContent/100}`
        res.innerHTML = resultStrintMath
      } else {
        history.innerHTML = `${history.textContent/100}`
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