/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

import { ITriangle } from './ITriangle';
import { Triangle } from './Triangle';

/**
 * Clones a Triangle object.
 */
export function CloneTriangle (source: ITriangle): Triangle
{
    const { x1, y1, x2, y2, x3, y3 } = source;

    return new Triangle(x1, y1, x2, y2, x3, y3);
}
