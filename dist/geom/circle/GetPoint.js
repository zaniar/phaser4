/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
import CircumferencePoint from './CircumferencePoint';
import FromPercent from '../../math/FromPercent';
import MATH_CONST from '../../math/const';
import Vec2 from '../../math/vec2/Vec2';
/**
 * Returns a Point object containing the coordinates of a point on the circumference of the Circle
 * based on the given angle normalized to the range 0 to 1. I.e. a value of 0.5 will give the point
 * at 180 degrees around the circle.
 *
 * @function Phaser.Geom.Circle.GetPoint
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Point} O - [out,$return]
 *
 * @param {Phaser.Geom.Circle} circle - The Circle to get the circumference point on.
 * @param {number} position - A value between 0 and 1, where 0 equals 0 degrees, 0.5 equals 180 degrees and 1 equals 360 around the circle.
 * @param {(Phaser.Geom.Point|object)} [out] - An object to store the return values in. If not given a Point object will be created.
 *
 * @return {(Phaser.Geom.Point|object)} A Point, or point-like object, containing the coordinates of the point around the circle.
 */
export default function GetPoint(circle, position, out = new Vec2()) {
    const angle = FromPercent(position, 0, MATH_CONST.PI2);
    return CircumferencePoint(circle, angle, out);
}
//# sourceMappingURL=GetPoint.js.map