import {GetScaling as GetScaling2} from "./GetScaling";
import {Quaternion as Quaternion2} from "../quaternion/Quaternion";
export function GetRotation(matrix, out = new Quaternion2()) {
  const scaling = GetScaling2(matrix);
  const is1 = 1 / scaling.x;
  const is2 = 1 / scaling.y;
  const is3 = 1 / scaling.z;
  const [m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22] = matrix.data;
  const sm11 = m00 * is1;
  const sm12 = m01 * is2;
  const sm13 = m02 * is3;
  const sm21 = m10 * is1;
  const sm22 = m11 * is2;
  const sm23 = m12 * is3;
  const sm31 = m20 * is1;
  const sm32 = m21 * is2;
  const sm33 = m22 * is3;
  const trace = sm11 + sm22 + sm33;
  let S = 0;
  if (trace > 0) {
    S = Math.sqrt(trace + 1) * 2;
    return out.set((sm23 - sm32) / S, (sm31 - sm13) / S, (sm12 - sm21) / S, 0.25 * S);
  } else if (sm11 > sm22 && sm11 > sm33) {
    S = Math.sqrt(1 + sm11 - sm22 - sm33) * 2;
    return out.set(0.25 * S, (sm12 + sm21) / S, (sm31 + sm13) / S, (sm23 - sm32) / S);
  } else if (sm22 > sm33) {
    S = Math.sqrt(1 + sm22 - sm11 - sm33) * 2;
    return out.set((sm12 + sm21) / S, 0.25 * S, (sm23 + sm32) / S, (sm31 - sm13) / S);
  } else {
    S = Math.sqrt(1 + sm33 - sm11 - sm22) * 2;
    return out.set((sm31 + sm13) / S, (sm23 + sm32) / S, 0.25 * S, (sm12 - sm21) / S);
  }
}
