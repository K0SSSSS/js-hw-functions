const numbers = [];
let total = 0;
let input;

while (true) {
  input = prompt('Введіть число:');
  
  if (input === null) {
    break; // Вихід із циклу при натисканні "Cancel"
  }
  
  input = Number(input); // Спроба перетворити введення в число
  
  if (isNaN(input)) {
    alert('Було введено не число, попробуйте ще раз');
  } else {
    numbers.push(input); // Додаємо число до масиву
  }
}

for (const number of numbers) {
  total += number;
}

if (numbers.length > 0) {
  console.log(`Загальна сума чисел дорівнює ${total}`);
} else {
  console.log('Ви не ввели жодного числа.');
}
