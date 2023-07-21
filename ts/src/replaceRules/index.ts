export interface ReplaceRule {
  match(n: number): boolean
  apply(n: number, target: string): string
}
