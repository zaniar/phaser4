/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
import GetPoint from './GetPoint';
import Perimeter from './Perimeter';
/**
 * Return an array of points from the perimeter of the rectangle, each spaced out based on the quantity or step required.
 *
 * @function Phaser.Geom.Rectangle.GetPoints
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Point[]} O - [out,$return]
 *
 * @param {Phaser.Geom.Rectangle} rectangle - The Rectangle object to get the points from.
 * @param {number} step - Step between points. Used to calculate the number of points to return when quantity is falsey. Ignored if quantity is positive.
 * @param {integer} quantity - The number of evenly spaced points from the rectangles perimeter to return. If falsey, step param will be used to calculate the number of points.
 * @param {(array|Phaser.Geom.Point[])} [out] - An optional array to store the points in.
 *
 * @return {(array|Phaser.Geom.Point[])} An array of Points from the perimeter of the rectangle.
 */
export default function GetPoints(rectangle, step, quantity = 0, out = []) {
    //  If quantity is a falsey value (false, null, 0, undefined, etc) then we calculate it based on the stepRate instead.
    if (!quantity) {
        quantity = Perimeter(rectangle) / step;
    }
    for (let i = 0; i < quantity; i++) {
        out.push(GetPoint(rectangle, i / quantity));
    }
    return out;
}
//# sourceMappingURL=GetPoints.js.map