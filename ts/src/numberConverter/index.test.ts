import { NumberConverter } from '.'

describe('NumberConverter', () => {
  describe('convert', () => {
    describe('ruleなし', () => {
      const fizzBuzz = new NumberConverter([])

      it('空文字が返る', () => {
        expect(fizzBuzz.convert(1)).toBe('')
      })
    })
  })
})
