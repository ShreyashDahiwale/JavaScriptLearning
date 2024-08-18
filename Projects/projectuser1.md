# Projects related to DOM

## Project Link
[Click here] (https://stackblitz.com/edit/dom-project-chaiaurcode-h6jeff?file=1-colorChanger%2Fchaiaurcode.js)

# Solution Code 

## Project 1 

```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

// Got NodeList here, not an HTML Collection
buttons.forEach((btn) => {
  // console.log(btn);

  btn.addEventListener('click', (e) => {
    // console.log(e);
    // console.log(e.target);

    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === 'white') body.style.backgroundColor = e.target.id;
    else if (e.target.id === 'blue') body.style.backgroundColor = e.target.id;
    else if (e.target.id === 'yellow') body.style.backgroundColor = e.target.id;
    else if (e.target.id === 'purple') body.style.backgroundColor = e.target.id;
  });
});

```

## Project 2 Solution
```javascript
const form = document.querySelector('form');

// this usecase will give you empty value
// const height = parseInt(document.querySelector('#height').value);

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  if (height === '' || height == undefined || height < 0 || isNaN(height)) {
    result.innerHTML = `Please give a valid height ${height}`;
  } else if (
    weight === '' ||
    weight == undefined ||
    weight < 0 ||
    isNaN(weight)
  ) {
    result.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    //show the results
    result.innerHTML = `<span>${bmi}</span>`;
  }
});

```

## Project 3 Solution 
```javascript
const clock = document.getElementById('clock');

let date = new Date();
console.log(date.toLocaleTimeString());

setInterval(() => {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```