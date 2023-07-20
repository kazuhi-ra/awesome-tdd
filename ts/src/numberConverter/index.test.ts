describe('NumberConverter', () => {
  describe('convert', () => {
    const fizzBuzz = new NumberConverter()

    describe('1のとき', () => {
      it('数値が文字列になって返る', () => {
        expect(fizzBuzz.convert(1)).toBe('1')
      })
    })
  })
})
