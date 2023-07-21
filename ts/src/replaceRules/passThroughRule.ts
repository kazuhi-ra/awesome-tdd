import { ReplaceRule } from '.'

export class PassThroughRule implements ReplaceRule {
  match(n: number, target: string): boolean {
    return target === ''
  }

  apply(n: number): string {
    return `${n}`
  }
}

if (import.meta.vitest) {
  describe('PassThroughRule', () => {
    describe('match', () => {
      it('3の倍数でtrueを返す', () => {
        const fizzRule = new PassThroughRule()
        expect(fizzRule.match(0, '')).toBe(true)
        expect(fizzRule.match(0, 'kazuhi-ra')).toBe(false)
      })
    })

    describe('apply', () => {
      it('数値を文字列に変換してそのまま返す', () => {
        const fizzRule = new PassThroughRule()
        expect(fizzRule.apply(0)).toBe('0')
        expect(fizzRule.apply(8)).toBe('8')
      })
    })
  })
}
