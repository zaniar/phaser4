import { IBaseWorld } from '../world/IBaseWorld';
import { IBoundsComponent } from './components/bounds/IBoundsComponent';
import { ICanvasRenderer } from '../renderer/canvas/ICanvasRenderer';
import { IInputComponent } from './components/input/IInputComponent';
import { ITransformComponent } from './components/transform/ITransformComponent';
import { IWebGLRenderer } from '../renderer/webgl1/IWebGLRenderer';

export interface IGameObject
{
    type: string;
    name: string;
    world: IBaseWorld;
    parent: IGameObject;
    children: IGameObject[];

    willUpdate: boolean;
    willUpdateChildren: boolean;
    willRender: boolean;
    willRenderChildren: boolean;
    willCacheChildren: boolean;

    numChildren: number;

    dirty: number;
    dirtyFrame: number;

    visible: boolean;

    transform: ITransformComponent;
    bounds: IBoundsComponent;
    input: IInputComponent;

    isRenderable (): boolean;
    isDirty (flag: number): boolean;
    clearDirty (flag: number): this;
    setDirty (flag: number, flag2?: number): this;

    update (delta: number, time: number): void;
    postUpdate (delta: number, time: number): void;

    render <T extends IWebGLRenderer> (renderer: T): void;
    renderCanvas <T extends ICanvasRenderer> (renderer: T): void;
    postRender <T extends IWebGLRenderer> (renderer: T): void;
    postRenderCanvas <T extends ICanvasRenderer> (renderer: T): void;

    destroy (reparentChildren?: IGameObject): void;
}
