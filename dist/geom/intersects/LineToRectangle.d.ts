/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
import ILine from '../line/ILine';
import IRectangle from '../rectangle/IRectangle';
/**
 * Checks for intersection between the Line and a Rectangle shape, or a rectangle-like
 * object, with public `x`, `y`, `right` and `bottom` properties, such as a Sprite or Body.
 *
 * An intersection is considered valid if:
 *
 * The line starts within, or ends within, the Rectangle.
 * The line segment intersects one of the 4 rectangle edges.
 *
 * The for the purposes of this function rectangles are considered 'solid'.
 *
 * @function Phaser.Geom.Intersects.LineToRectangle
 * @since 3.0.0
 *
 * @param {Phaser.Geom.Line} line - The Line to check for intersection.
 * @param {(Phaser.Geom.Rectangle|object)} rect - The Rectangle to check for intersection.
 *
 * @return {boolean} `true` if the Line and the Rectangle intersect, `false` otherwise.
 */
export default function LineToRectangle(line: ILine, rect: IRectangle): boolean;
//# sourceMappingURL=LineToRectangle.d.ts.map