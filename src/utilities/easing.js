// copied from the "easing.net/en" website -> referred on the lenis github docs -> instance settings
export const easeInOutCubic = x => {
  return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2
}
