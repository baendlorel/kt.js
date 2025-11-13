/**
 * Silent level for navigation guards
 */
export const enum SilentLevel {
  /** Execute all guards */
  None = 0,
  /** Skip global beforeEach guard */
  Global = 1,
  /** Skip both global and route-level guards */
  All = 2,
}
