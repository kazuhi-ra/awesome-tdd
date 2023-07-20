export class NumberConverter {
  convert(n: number): string {
    if (n % 3 === 0) {
      return 'Fizz'
    } else {
      if (n % 5 === 0) {
        return 'Buzz'
      } else {
        return `${n}`
      }
    }
  }
}
