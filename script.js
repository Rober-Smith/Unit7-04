document.getElementById('button').addEventListener('click', compare)
let date = 0
let age = 0

function compare () {
  age = document.getElementById('input').value
  age = parseInt(age)
  date = document.getElementById('input2').value
  date = parseInt(date)

  if (date === 'tuesday' || date === 'thursday' || age > 12 && age < 25) {
    date = document.getElementById('answer').innerHTML =
  'You get the discount'
  } else {
    date = document.getElementById('answer').innerHTML =
  'you must pay regular price'
  }
}
