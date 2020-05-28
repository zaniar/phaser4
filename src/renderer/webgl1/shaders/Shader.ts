import { GetHeight, GetResolution, GetWidth } from '../../../config/Size';

import { CreateFramebuffer } from '../fbo/CreateFramebuffer';
import { GLTextureBinding } from '../textures/GLTextureBinding';
import { IShader } from './IShader';
import { IShaderAttributes } from './IShaderAttributes';
import { IShaderConfig } from './IShaderConfig';
import { IShaderUniforms } from './IShaderUniforms';
import { IWebGLRenderer } from '../IWebGLRenderer';
import { QuadIndexedBuffer } from '../buffers/QuadIndexedBuffer';
import { Texture } from '../../../textures/Texture';
import { WebGLRendererInstance } from '../WebGLRendererInstance';

export class Shader implements IShader
{
    renderer: IWebGLRenderer;

    program: WebGLProgram;

    attribs: IShaderAttributes = { aVertexPosition: 0, aTextureCoord: 0, aTextureId: 0, aTintColor: 0 };
    uniforms: IShaderUniforms = { uProjectionMatrix: 0, uCameraMatrix: 0, uTexture: 0, uTime: 0, uResolution: 0 };

    buffer: QuadIndexedBuffer;

    /**
     * The total number of quads added to the batch so far.
     * Reset every bind and flush.
     *
     * @type {number}
     */
    count: number;

    /**
     * The total number of quads previously flushed.
     *
     * @type {number}
     */
    prevCount: number;

    texture: Texture;
    framebuffer: WebGLFramebuffer;

    renderToFBO: boolean = false;

    constructor (config: IShaderConfig = {}, fragmentShader: string, vertexShader: string)
    {
        this.renderer = WebGLRendererInstance.get();

        const {
            batchSize = 4096,
            dataSize = 4,
            indexSize = 4,
            vertexElementSize = 6,
            quadIndexSize = 6,
            width = GetWidth(),
            height = GetHeight(),
            resolution = GetResolution(),
            renderToFBO = false
        } = config;

        this.buffer = new QuadIndexedBuffer(batchSize, dataSize, indexSize, vertexElementSize, quadIndexSize);

        this.createShaders(fragmentShader, vertexShader);

        this.count = 0;

        this.renderToFBO = renderToFBO;

        const texture = new Texture(null, width * resolution, height * resolution);
        const binding = new GLTextureBinding(texture);

        texture.binding = binding;

        binding.framebuffer = CreateFramebuffer(binding.texture);

        this.texture = texture;
        this.framebuffer = binding.framebuffer;
    }

    createShaders (fragmentShaderSource: string, vertexShaderSource: string): void
    {
        const gl = this.renderer.gl;

        //  Create the shaders

        const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);

        gl.shaderSource(fragmentShader, fragmentShaderSource);
        gl.compileShader(fragmentShader);

        let failed = false;
        let message = gl.getShaderInfoLog(fragmentShader);

        if (message.length > 0)
        {
            failed = true;
            console.error(message);
        }

        const vertexShader = gl.createShader(gl.VERTEX_SHADER);

        gl.shaderSource(vertexShader, vertexShaderSource);
        gl.compileShader(vertexShader);

        message = gl.getShaderInfoLog(fragmentShader);

        if (message.length > 0)
        {
            failed = true;
            console.error(message);
        }

        if (failed)
        {
            return;
        }

        const program = gl.createProgram();

        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);

        gl.useProgram(program);

        this.program = program;

        for (const key of Object.keys(this.attribs) as Array<keyof IShaderAttributes>)
        {
            const location = gl.getAttribLocation(program, key);

            gl.enableVertexAttribArray(location);

            this.attribs[key] = location;
        }

        for (const key of Object.keys(this.uniforms) as Array<keyof IShaderUniforms>)
        {
            this.uniforms[key] = gl.getUniformLocation(program, key);
        }
    }

    bind (projectionMatrix: Float32Array, cameraMatrix: Float32Array, textureID: number): boolean
    {
        if (!this.program)
        {
            return false;
        }

        const renderer = this.renderer;
        const gl = renderer.gl;
        const uniforms = this.uniforms;

        gl.useProgram(this.program);

        gl.uniformMatrix4fv(uniforms.uProjectionMatrix, false, projectionMatrix);
        gl.uniformMatrix4fv(uniforms.uCameraMatrix, false, cameraMatrix);

        //  0
        gl.uniform1i(uniforms.uTexture, renderer.textures.textureIndex[textureID]);

        gl.uniform1f(uniforms.uTime, performance.now());
        gl.uniform2f(uniforms.uResolution, renderer.width, renderer.height);

        this.bindBuffers(this.buffer.indexBuffer, this.buffer.vertexBuffer);

        return true;
    }

    bindBuffers (indexBuffer: WebGLBuffer, vertexBuffer: WebGLBuffer): void
    {
        const gl = this.renderer.gl;
        const stride = this.buffer.vertexByteSize;
        const attribs = this.attribs;

        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
        gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);

        //  attributes must be reset whenever you change buffers

        gl.vertexAttribPointer(attribs.aVertexPosition, 2, gl.FLOAT, false, stride, 0);     // size = 8
        gl.vertexAttribPointer(attribs.aTextureCoord, 2, gl.FLOAT, false, stride, 8);       // size = 8, offset = position
        gl.vertexAttribPointer(attribs.aTextureId, 1, gl.FLOAT, false, stride, 16);         // size = 4, offset = position + tex coord
        gl.vertexAttribPointer(attribs.aTintColor, 4, gl.UNSIGNED_BYTE, true, stride, 20);  // size = 4, offset = position + tex coord + index

        this.count = 0;
    }

    draw (count: number): void
    {
        const renderer = this.renderer;
        const gl = renderer.gl;
        const buffer = this.buffer;

        if (count === buffer.batchSize)
        {
            gl.bufferData(gl.ARRAY_BUFFER, buffer.data, gl.DYNAMIC_DRAW);
        }
        else
        {
            const view = buffer.vertexViewF32.subarray(0, count * buffer.entryElementSize);

            gl.bufferSubData(gl.ARRAY_BUFFER, 0, view);
        }

        if (this.renderToFBO)
        {
            renderer.fbo.add(this.framebuffer, true);
        }

        gl.drawElements(gl.TRIANGLES, count * buffer.entryIndexSize, gl.UNSIGNED_SHORT, 0);

        if (this.renderToFBO)
        {
            renderer.fbo.pop();
        }
    }

    flush (): boolean
    {
        const count = this.count;

        if (count === 0)
        {
            return false;
        }

        this.draw(count);

        this.prevCount = count;

        this.count = 0;

        return true;
    }
}
