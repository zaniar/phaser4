import WebGLRenderer from '../renderer/webgl1/WebGLRenderer';
import Rectangle from '../geom/rectangle/Rectangle';
import ITransformGameObject from '../gameobjects/transformgameobject/ITransformGameObject';
export default interface ICamera extends ITransformGameObject {
    matrix: Float32Array;
    renderer: WebGLRenderer;
    bounds: Rectangle;
    reset(): void;
}
//# sourceMappingURL=ICamera.d.ts.map