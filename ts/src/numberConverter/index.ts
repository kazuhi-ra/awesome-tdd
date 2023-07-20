import { ReplaceRule } from '../replaceRules'

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
