/**
 * @author       Florian Vazelle
 * @author       Geoffrey Glaive
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
import IRectangle from '../rectangle/IRectangle';
import Vec2 from '../../math/vec2/Vec2';
/**
 * Checks if two Rectangles intersect and returns the intersection points as a Point object array.
 *
 * A Rectangle intersects another Rectangle if any part of its bounds is within the other Rectangle's bounds. As such, the two Rectangles are considered "solid". A Rectangle with no width or no height will never intersect another Rectangle.
 *
 * @function Phaser.Geom.Intersects.GetRectangleToRectangle
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Rectangle} rectA - The first Rectangle to check for intersection.
 * @param {Phaser.Geom.Rectangle} rectB - The second Rectangle to check for intersection.
 * @param {array} [out] - An optional array in which to store the points of intersection.
 *
 * @return {array} An array with the points of intersection if objects intersect, otherwise an empty array.
 */
export default function GetRectangleToRectangle(rectA: IRectangle, rectB: IRectangle, out?: Vec2[]): Vec2[];
//# sourceMappingURL=GetRectangleToRectangle.d.ts.map