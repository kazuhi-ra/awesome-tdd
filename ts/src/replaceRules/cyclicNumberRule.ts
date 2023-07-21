import { ReplaceRule } from '.'

class CyclicNumberRule implements ReplaceRule {
  replace(n: number): string {
    return ''
  }
}

if (import.meta.vitest) {
  describe('CyclicNumberRule', () => {
    describe('replace', () => {
      it('3の倍数でFizzと返す', () => {
        const fizzRule = new CyclicNumberRule()
        expect(fizzRule.replace(1)).toBe('')
        expect(fizzRule.replace(3)).toBe('Fizz')
        expect(fizzRule.replace(666)).toBe('Fizz')
      })
    })
  })
}
