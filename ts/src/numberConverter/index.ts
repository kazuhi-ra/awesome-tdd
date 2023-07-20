export class NumberConverter {
  convert(n: number): string {
    if (n === 3) {
      return 'Fizz'
    } else {
      return `${n}`
    }
  }
}
