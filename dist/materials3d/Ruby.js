import '../utils/base64/Base64ToArrayBuffer.js';
import '../utils/NOOP.js';
import '../math/mat4/Matrix4.js';
import '../math/vec3/Vec3.js';
import '../math/mat4/Invert.js';
import '../math/mat4/Multiply.js';
import '../math/vec3/Backward.js';
import '../math/vec3/Down.js';
import '../math/vec3/Forward.js';
import '../math/vec3/Left.js';
import '../math/vec3/Right.js';
import '../math/vec3/Up.js';
import '../math/vec3/Zero.js';
import '../math/vec3/const.js';
import '../math/vec3/Scale.js';
import '../math/Clamp.js';
import '../math/vec3/TransformMat4.js';
import '../math/vec3/Project.js';
import '../math/vec3/Vec3Callback.js';
import '../math/vec3/RGBCallback.js';
import '../math/vec3/Unproject.js';
import { Material } from '../gameobjects3d/material/Material.js';

const Ruby = new Material({
    ambient: [0.1745, 0.01175, 0.01175],
    diffuse: [0.61424, 0.04136, 0.04136],
    specular: [0.727811, 0.626959, 0.626959],
    shine: 0.6
});

export { Ruby };