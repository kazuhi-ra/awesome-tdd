export class NumberConverter {
  convert(n: number): string {
    if (n === 3) {
      return 'Fizz'
    } else {
      if (n === 5) {
        return 'Buzz'
      } else {
        return `${n}`
      }
    }
  }
}
