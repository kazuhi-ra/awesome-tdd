import { ReplaceRule } from '.'

class PassThroughRule implements ReplaceRule {
  replace(n: number): string {
    return ''
  }
}

if (import.meta.vitest) {
  describe('PassThroughRule', () => {
    describe('replace', () => {
      it('数値を文字列に変換してそのまま返す', () => {
        const passThroughRule = new PassThroughRule()
        expect(passThroughRule.replace(1)).toBe('1')
        expect(passThroughRule.replace(3)).toBe('3')
        expect(passThroughRule.replace(5)).toBe('5')
        expect(passThroughRule.replace(555)).toBe('555')
        expect(passThroughRule.replace(666)).toBe('666')
      })
    })
  })
}
