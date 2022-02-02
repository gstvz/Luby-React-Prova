export function padNumbers(numbers: string) {
  const numbersArray = numbers.split(',').map(number => number);  

  const formattedNumbers: string[] = [];
  for(const number of numbersArray) {
    let formattedNumber: string;
    parseInt(number) < 10 ? formattedNumber = String(number).padStart(2, '0') : formattedNumber = String(number);
    formattedNumbers.push(formattedNumber);
  }
  
  return formattedNumbers.join(', ');
}