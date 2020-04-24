import { GetChildIndex } from './GetChildIndex';
import { IGameObject } from '../gameobject/IGameObject';
import { IParent } from './IParent';

export function MoveChildDown (parent: IParent, child: IGameObject): IGameObject
{
    const parentChildren = parent.children;

    const currentIndex = GetChildIndex(parent, child);

    if (currentIndex > 0)
    {
        const child2 = parentChildren[currentIndex - 1];
        const index2 = parentChildren.indexOf(child2);

        parentChildren[currentIndex] = child2;
        parentChildren[index2] = child;

        child.setDirtyRender(true);
        child2.setDirtyRender(true);
    }

    return child;
}