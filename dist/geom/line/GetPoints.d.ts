/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
import ILine from './ILine';
import Vec2 from '../../math/vec2/Vec2';
/**
 * Get a number of points along a line's length.
 *
 * Provide a `quantity` to get an exact number of points along the line.
 *
 * Provide a `stepRate` to ensure a specific distance between each point on the line. Set `quantity` to `0` when
 * providing a `stepRate`.
 *
 * @function Phaser.Geom.Line.GetPoints
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Point[]} O - [out,$return]
 *
 * @param {Phaser.Geom.Line} line - The line.
 * @param {integer} quantity - The number of points to place on the line. Set to `0` to use `stepRate` instead.
 * @param {number} [stepRate] - The distance between each point on the line. When set, `quantity` is implied and should be set to `0`.
 * @param {(array|Phaser.Geom.Point[])} [out] - An optional array of Points, or point-like objects, to store the coordinates of the points on the line.
 *
 * @return {(array|Phaser.Geom.Point[])} An array of Points, or point-like objects, containing the coordinates of the points on the line.
 */
export default function GetPoints(line: ILine, quantity: number, stepRate?: number, out?: Vec2[]): Vec2[];
//# sourceMappingURL=GetPoints.d.ts.map