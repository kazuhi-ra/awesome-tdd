export interface ReplaceRule {
  match(n: number, target: string): boolean
  apply(n: number, target: string): string
}
