import { IGameObject } from './IGameObject';
import { SetParent } from './SetParent';
import { UpdateWorldTransform } from './components/transform/UpdateWorldTransform';

export function AddChildAt (parent: IGameObject, index: number, child: IGameObject): IGameObject
{
    const children = parent.children;

    if (index >= 0 && index <= children.length)
    {
        SetParent(parent, child);

        children.splice(index, 0, child);

        UpdateWorldTransform(child);
    }

    return child;
}