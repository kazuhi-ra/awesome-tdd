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

  apply(): string {
    return ''
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
  })
}
