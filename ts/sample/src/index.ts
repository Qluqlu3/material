export class Sample {
  private name: string;
  // public price: number;

  constructor(name: string) {
    this.name = name;
    // this.price = price;
  }

  sendMessage() {
    return this.name;
  }

  checkFizzBuzz(num: number) {
    if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
    else if (num % 3 === 0) return 'Fizz';
    else if (num % 5 === 0) return 'Buzz';
    else return '';
  }
}
