export function getEven(log) {
  const numbers = [1, 2, 3, 4, 5];
  log('Declare array of numbers');
  log(numbers);

  const evenNumbers = numbers.filter((n) => n % 2 === 0);
  log(evenNumbers);
}

export function getGreaterThen90(log) {
  const students = [
    { name: 'Quincy', grade: 96 },
    { name: 'Jason', grade: 84 },
    { name: 'Alexis', grade: 100 },
    { name: 'Sam', grade: 65 },
    { name: 'Katie', grade: 90 },
  ];

  log(students);

  const gradesMoreThen90 = students.filter((student) => student.grade > 90);
  log('Get students grade more then 90');
  log(gradesMoreThen90);
}
