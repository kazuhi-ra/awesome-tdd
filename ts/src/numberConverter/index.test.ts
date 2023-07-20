import { NumberConverter } from '.'

describe('NumberConverter', () => {
  describe('convert', () => {
    const fizzBuzz = new NumberConverter()

    describe('3の倍数とき', () => {
      it('Fizzが返る', () => {
        expect(fizzBuzz.convert(3)).toBe('Fizz')
        expect(fizzBuzz.convert(6)).toBe('Fizz')
      })
    })

    describe('5の倍数のとき', () => {
      it('Buzzが返る', () => {
        expect(fizzBuzz.convert(5)).toBe('Buzz')
        expect(fizzBuzz.convert(10)).toBe('Buzz')
      })
    })

    describe('15の倍数とき', () => {
      it('FizzBuzzが返る', () => {
        expect(fizzBuzz.convert(15)).toBe('FizzBuzz')
        expect(fizzBuzz.convert(30)).toBe('FizzBuzz')
      })
    })

    describe('1のとき', () => {
      it('数値が文字列になって返る', () => {
        expect(fizzBuzz.convert(1)).toBe('1')
      })
    })

    describe('2のとき', () => {
      it('数値が文字列になって返る', () => {
        expect(fizzBuzz.convert(2)).toBe('2')
      })
    })

    describe('4のとき', () => {
      it('Fizzが返る', () => {
        expect(fizzBuzz.convert(4)).toBe('4')
      })
    })
  })
})
