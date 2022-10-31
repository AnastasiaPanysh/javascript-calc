let res = document.querySelector('.result');
let buttons = document.querySelectorAll('.data-operation');
let clear = document.querySelector('.data-clear');
let equal = document.querySelector('.data-equals');

buttons.forEach(function (button) {
  button.addEventListener('click', function (calc) {
    let value = calc.target.dataset.num;
    res.value += value;
  })
});

equal.addEventListener('click', function (calc) {
  if (res.value === '') {
    res.value = 'Please Enter a Value';
  } else {
    let answer = eval(res.value);
    res.value = answer;
  }
})

clear.addEventListener('click', function (calc) {
  res.value = '';
})

