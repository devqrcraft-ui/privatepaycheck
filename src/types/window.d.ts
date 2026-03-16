declare global {
  interface Window {
  calc1099?: (...args: unknown[]) => unknown;
  toggleAdv?: (...args: unknown[]) => unknown;
  calcFederal?: (...args: unknown[]) => unknown;
  }
}
export {};
