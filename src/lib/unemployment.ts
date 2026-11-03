export function estimateIllustrativeWeeklyAmount(
  highestQuarterWages: number,
  divisor: number,
): number {
  if (!Number.isFinite(highestQuarterWages) || highestQuarterWages <= 0) {
    throw new RangeError('Highest-quarter wages must be a positive finite number.');
  }
  if (!Number.isFinite(divisor) || divisor <= 0) {
    throw new RangeError('The illustrative divisor must be a positive finite number.');
  }

  return Math.floor(highestQuarterWages / divisor);
}
