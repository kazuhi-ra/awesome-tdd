import { ReplaceRule } from '../replaceRules'

export class NumberConverter {
  #rules: ReplaceRule[]

  constructor(rules: ReplaceRule[]) {
    this.#rules = rules
  }

  convert(n: number): string {
    return ''
  }
}
