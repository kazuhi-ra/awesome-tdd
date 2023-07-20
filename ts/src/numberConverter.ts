import { ReplaceRule } from './replaceRules'

export class NumberConverter {
  #rules: ReplaceRule[]

  constructor(rules: ReplaceRule[]) {
    this.#rules = rules
  }

  convert(n: number): string {
    return this.#rules.reduce(
      (accum, current) => accum + current.replace(n),
      ''
    )
  }
}

if (import.meta.vitest) {
  describe('NumberConverter', () => {
    describe('convert', () => {
      describe('ruleなし', () => {
        const fizzBuzz = new NumberConverter([])

        it('空文字が返る', () => {
          expect(fizzBuzz.convert(1)).toBe('')
        })
      })

      describe('ruleあり', () => {
        describe('ruleが1つ', () => {
          const mockRule: ReplaceRule = {
            replace: vi.fn<[number], string>().mockReturnValue('Replaced'),
          }

          const fizzBuzz = new NumberConverter([mockRule])

          it('ルールで指定した文字が返る', () => {
            expect(fizzBuzz.convert(1)).toBe('Replaced')
          })
        })

        describe('ruleが2つ', () => {
          const mockFizzRule: ReplaceRule = {
            replace: vi.fn<[number], string>().mockReturnValue('Fizz'),
          }
          const mockBuzzRule: ReplaceRule = {
            replace: vi.fn<[number], string>().mockReturnValue('Buzz'),
          }

          const fizzBuzz = new NumberConverter([mockFizzRule, mockBuzzRule])

          it('ルールで指定した文字が返る', () => {
            expect(fizzBuzz.convert(1)).toBe('FizzBuzz')
          })
        })
      })
    })
  })
}
