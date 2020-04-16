/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
/**
 * Calculate a smooth interpolation percentage of `x` between `min` and `max`.
 *
 * The function receives the number `x` as an argument and returns 0 if `x` is less than or equal to the left edge,
 * 1 if `x` is greater than or equal to the right edge, and smoothly interpolates, using a Hermite polynomial,
 * between 0 and 1 otherwise.
 *
 * @function Phaser.Math.SmoothStep
 * @since 3.0.0
 * @see {@link https://en.wikipedia.org/wiki/Smoothstep}
 *
 * @param {number} x - The input value.
 * @param {number} min - The minimum value, also known as the 'left edge', assumed smaller than the 'right edge'.
 * @param {number} max - The maximum value, also known as the 'right edge', assumed greater than the 'left edge'.
 *
 * @return {number} The percentage of interpolation, between 0 and 1.
 */
export default function SmoothStep(x: number, min: number, max: number): number;
//# sourceMappingURL=SmoothStep.d.ts.map