let res = document.querySelector('.result');
const calc = document.querySelector('.calc-wrapper');


  calc.addEventListener('click', function (event) {
  let value = event.target.innerText;
  switch (value) {
    case '=':
      res.innerText = eval(res.innerText)
      break;
    case 'C':
      res.innerText = ''
      break;
    default:
      res.innerText += value;
  }
})

