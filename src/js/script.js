const valueDisplays = document.querySelectorAll('.num');
const valueGbDisplays = document.querySelectorAll('.num-gb');
const barFrontDisplay = document.querySelector('.component__bar-front');

const calculateWidth = (gbValue) => {
  return `${gbValue / 10}%`;
};

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute('data-val'));
  let counter = setInterval(() => {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, 0);
});

valueGbDisplays.forEach((valueGbDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueGbDisplay.getAttribute('data-val'));
  let counter = setInterval(() => {
    startValue += 1;
    valueGbDisplay.textContent = startValue + ' GB';
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, 0);
});

addEventListener('load', () => {
  let startValue = 0;
  let endValue = parseInt(barFrontDisplay.getAttribute('data-val'));
  let counter = setInterval(() => {
    startValue += 1;
    barFrontDisplay.style.width = calculateWidth(startValue);
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, 0);
});
