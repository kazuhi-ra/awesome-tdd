import { ReplaceRule } from '.'

export class CyclicNumberRule implements ReplaceRule {
  #base: number
  #replacement: string

  constructor(base: number, replacement: string) {
    this.#base = base
    this.#replacement = replacement
  }

  match(n: number): boolean {
    return n % this.#base === 0
  }

  apply(n: number, target: string): string {
    return target + this.#replacement
  }
}

if (import.meta.vitest) {
  describe('CyclicNumberRule', () => {
    describe('match', () => {
      it('3の倍数でtrueを返す', () => {
        const fizzRule = new CyclicNumberRule(3, 'Fizz')
        expect(fizzRule.match(1)).toBe(false)
        expect(fizzRule.match(3)).toBe(true)
        expect(fizzRule.match(6)).toBe(true)
      })
    })

    describe('apply', () => {
      it('3の倍数でtrueを返す', () => {
        const fizzRule = new CyclicNumberRule(3, 'Fizz')
        expect(fizzRule.apply(0, '')).toBe('Fizz')
        expect(fizzRule.apply(0, 'Buzz')).toBe('BuzzFizz')
      })
    })
  })
}
