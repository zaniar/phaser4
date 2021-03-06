import { IGameObject3D } from '../gameobjects3d/IGameObject3D';

export function GetLastChild3D (parent: IGameObject3D, property: string | symbol, value?: never): IGameObject3D | undefined
{
    const children = parent.children;

    for (let i = children.length - 1; i >= 0; i--)
    {
        const child = children[i];

        const descriptor = Object.getOwnPropertyDescriptor(child, property);

        if (descriptor && (value === undefined || value === descriptor.value))
        {
            return child;
        }
    }
}
