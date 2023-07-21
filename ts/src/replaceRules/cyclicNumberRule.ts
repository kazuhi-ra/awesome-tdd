import { ReplaceRule } from '.'

export class CyclicNumberRule implements ReplaceRule {
  #base: number
  #replacement: string

  constructor(base: number, replacement: string) {
    this.#base = base
    this.#replacement = replacement
  }

  replace(n: number): string {
    if (n % this.#base === 0) {
      return this.#replacement
    } else {
      return ''
    }
  }
}

if (import.meta.vitest) {
  describe('CyclicNumberRule', () => {
    describe('replace', () => {
      it('3の倍数でFizzと返す', () => {
        const fizzRule = new CyclicNumberRule(3, 'Fizz')
        expect(fizzRule.replace(1)).toBe('')
        expect(fizzRule.replace(3)).toBe('Fizz')
        expect(fizzRule.replace(666)).toBe('Fizz')
      })

      it('5の倍数でBuzzと返す', () => {
        const buzzRule = new CyclicNumberRule(5, 'Buzz')
        expect(buzzRule.replace(1)).toBe('')
        expect(buzzRule.replace(5)).toBe('Buzz')
        expect(buzzRule.replace(555)).toBe('Buzz')
      })
    })
  })
}
