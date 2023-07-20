import { ReplaceRule } from '../replaceRules'

export class NumberConverter {
  #rules: ReplaceRule[]

  constructor(rules: ReplaceRule[]) {
    this.#rules = rules
  }

  convert(n: number): string {
    if (this.#rules.length === 0) {
      return ''
    } else {
      return this.#rules[0].replace(n)
    }
  }
}
