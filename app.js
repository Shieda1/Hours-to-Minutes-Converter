// https://www.omnicalculator.com/conversion/hours-to-minutes-converter

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const minutesRadio = document.getElementById('minutesRadio');
const hoursRadio = document.getElementById('hoursRadio');

let minutes;
let hours = v; 

// labels of the inpust
const variable = document.getElementById('variable');

minutesRadio.addEventListener('click', function() {
  variable.textContent = 'Hours';
  hours = v;
  result.textContent = '';
});

hoursRadio.addEventListener('click', function() {
  variable.textContent = 'Minutes';
  minutes = v;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(minutesRadio.checked)
    result.textContent = `Minutes = ${computeminutes().toFixed(5)}`;

  else if(hoursRadio.checked)
    result.textContent = `Hours = ${computehours().toFixed(5)}`;
})

// calculation

function computeminutes() {
  return Number(hours.value) * 60;
}

function computehours() {
  return Number(minutes.value) / 60;
}