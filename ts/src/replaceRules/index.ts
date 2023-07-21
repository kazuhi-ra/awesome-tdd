export interface ReplaceRule {
  match(n: number): boolean
  apply(): string
}
