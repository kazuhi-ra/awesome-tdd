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
  const { CyclicNumberRule } = await import(
    '../src/replaceRules/cyclicNumberRule'
  )
  const { PassThroughRule } = await import(
    '../src/replaceRules/passThroughRule'
  )

  describe('NumberConverter', () => {
    describe('Unit Test', () => {
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

          describe('ruleが3つ', () => {
            const mockFizzRule: ReplaceRule = {
              replace: vi.fn<[number], string>().mockReturnValue(''),
            }
            const mockBuzzRule: ReplaceRule = {
              replace: vi.fn<[number], string>().mockReturnValue(''),
            }
            const mockThroughRule: ReplaceRule = {
              replace: vi.fn<[number], string>().mockReturnValue('1'),
            }

            const fizzBuzz = new NumberConverter([
              mockFizzRule,
              mockBuzzRule,
              mockThroughRule,
            ])

            it('ルールで指定した文字が返る', () => {
              expect(fizzBuzz.convert(1)).toBe('1')
            })
          })
        })
      })
    })

    describe('Integration Test', () => {
      const fizzRule = new CyclicNumberRule(3, 'Fizz')
      const buzzRule = new CyclicNumberRule(5, 'Buzz')
      const passThroughRule = new PassThroughRule()
      const fizzBuzz = new NumberConverter([
        fizzRule,
        buzzRule,
        passThroughRule,
      ])

      it('FizzBuzz', () => {
        expect(fizzBuzz.convert(1)).toBe('1')
        expect(fizzBuzz.convert(2)).toBe('2')
        expect(fizzBuzz.convert(3)).toBe('Fizz')
        expect(fizzBuzz.convert(4)).toBe('4')
        expect(fizzBuzz.convert(5)).toBe('Buzz')
        expect(fizzBuzz.convert(6)).toBe('Fizz')
        expect(fizzBuzz.convert(10)).toBe('Buzz')
        expect(fizzBuzz.convert(15)).toBe('FizzBuzz')
        expect(fizzBuzz.convert(30)).toBe('FizzBuzz')
      })
    })
  })
}
