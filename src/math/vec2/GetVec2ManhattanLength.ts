import { IVec2Like } from './IVec2Like';

export function GetVec2ManhattanLength (a: IVec2Like): number
{
    return Math.abs(a.x) + Math.abs(a.y);
}
