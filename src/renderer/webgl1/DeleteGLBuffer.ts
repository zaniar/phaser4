import GL from './GL';

export default function DeleteGLBuffer (buffer: WebGLBuffer)
{
    const gl = GL.get();

    if (gl.isBuffer(buffer))
    {
        gl.deleteBuffer(buffer);
    }
}