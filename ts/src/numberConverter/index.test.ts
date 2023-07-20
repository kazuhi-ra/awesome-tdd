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
  })
})
