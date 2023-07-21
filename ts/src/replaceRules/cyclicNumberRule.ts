import { ReplaceRule } from '.'

class CyclicNumberRule implements ReplaceRule {
  replace(n: number): string {
    if (n % 3 === 0) {
      return 'Fizz'
    } else {
      return ''
    }
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

      it('5の倍数でBuzzと返す', () => {
        const fizzRule = new CyclicNumberRule()
        expect(fizzRule.replace(1)).toBe('')
        expect(fizzRule.replace(5)).toBe('Buzz')
        expect(fizzRule.replace(555)).toBe('Buzz')
      })
    })
  })
}
