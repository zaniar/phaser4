/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
/**
 * Returns the 2D area of a triangle. The area value is always non-negative.
 *
 * @function Phaser.Geom.Triangle.Area
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Triangle} triangle - The Triangle to use.
 *
 * @return {number} The area of the Triangle, always non-negative.
 */
export default function Area(triangle) {
    const { x1, y1, x2, y2, x3, y3 } = triangle;
    return Math.abs(((x3 - x1) * (y2 - y1) - (x2 - x1) * (y3 - y1)) / 2);
}
//# sourceMappingURL=Area.js.map