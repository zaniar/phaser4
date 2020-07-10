import { Vec3 } from './Vec3.js';

function Fract(a, out = new Vec3()) {
    return out.set(a.x - Math.floor(a.x), a.y - Math.floor(a.y), a.z - Math.floor(a.z));
}

export { Fract };