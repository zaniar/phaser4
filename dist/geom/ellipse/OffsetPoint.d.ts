/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
import IEllipse from './IEllipse';
import IVec2 from '../../math/vec2/IVec2';
/**
 * Offsets the Ellipse by the values given in the `x` and `y` properties of the Point object.
 *
 * @function Phaser.Geom.Ellipse.OffsetPoint
 * @since 3.0.0
 *
 * @generic {Phaser.Geom.Ellipse} O - [ellipse,$return]
 *
 * @param {Phaser.Geom.Ellipse} ellipse - The Ellipse to be offset (translated.)
 * @param {(Phaser.Geom.Point|object)} point - The Point object containing the values to offset the Ellipse by.
 *
 * @return {Phaser.Geom.Ellipse} The Ellipse that was offset.
 */
export default function OffsetPoint(ellipse: IEllipse, point: IVec2): IEllipse;
//# sourceMappingURL=OffsetPoint.d.ts.map