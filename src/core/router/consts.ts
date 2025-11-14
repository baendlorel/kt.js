/**
 * Guard level that determines which guards to apply during navigation
 * - there are global and route-level guards
 */
export const enum GuardLevel {
  /**
   * Ignores all guards
   */
  None = 0b0000,

  /**
   * Only applies global guards
   */
  Global = 0b0001,

  /**
   * Only applies routes' guard
   */
  Route = 0b0010,

  /**
   * Applies all guards
   */
  Default = 0b1111,
}
