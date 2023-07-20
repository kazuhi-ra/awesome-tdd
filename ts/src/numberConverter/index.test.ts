import { NumberConverter } from '.'

describe('NumberConverter', () => {
  describe('convert', () => {
    const fizzBuzz = new NumberConverter()

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

    describe('3のとき', () => {
      it('Fizzが返る', () => {
        expect(fizzBuzz.convert(3)).toBe('Fizz')
      })
    })

    describe('4のとき', () => {
      it('Fizzが返る', () => {
        expect(fizzBuzz.convert(4)).toBe('4')
      })
    })

    describe('5のとき', () => {
      it('Buzzが返る', () => {
        expect(fizzBuzz.convert(5)).toBe('Buzz')
      })
    })

    describe('6のとき', () => {
      it('Fizzが返る', () => {
        expect(fizzBuzz.convert(6)).toBe('Fizz')
      })
    })
  })
})
