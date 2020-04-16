import GetConfigValue from './GetConfigValue';
import { GetScenes } from '../config';
import GameInstance from '../GameInstance';
export default class SceneManager {
    constructor() {
        this.sceneIndex = 0;
        //  Flush the cache
        this.flush = false;
        //  How many Cameras were made dirty this frame across all Scenes?
        this.dirtyCameras = 0;
        //  How many Game Objects were made dirty this frame across all Scenes?
        this.dirtyFrame = 0;
        //  How many Game Objects were processed this frame across all Scenes?
        this.totalFrame = 0;
        this.game = GameInstance.get();
        this.scenes = new Map();
        this.renderList = [];
        this.game.once('boot', () => this.boot());
    }
    boot() {
        const scenes = GetScenes();
        scenes.forEach(scene => {
            this.add(scene);
        });
    }
    add(scene) {
        const instance = new scene();
        //  At this point the act of creating a new instance of the Scene
        //  will have invoked the init method below, so we can now safely
        //  add the Scene into our Map
        if (instance.willUpdate) {
            instance.boot.call(instance);
        }
    }
    init(scene, config = {}) {
        const size = this.scenes.size;
        const sceneIndex = this.sceneIndex;
        const firstScene = (size === 0);
        if (typeof config === 'string') {
            scene.key = config;
        }
        else if (config || (!config && firstScene)) {
            scene.key = GetConfigValue(config, 'key', 'scene' + sceneIndex);
            scene.willUpdate = GetConfigValue(config, 'willUpdate', firstScene);
            scene.willRender = GetConfigValue(config, 'willRender', firstScene);
        }
        if (this.scenes.has(scene.key)) {
            console.warn('Scene key already in use: ' + scene.key);
        }
        else {
            this.scenes.set(scene.key, scene);
            this.flush = true;
            this.sceneIndex++;
        }
    }
    update(delta, now) {
        for (const scene of this.scenes.values()) {
            if (scene.willUpdate) {
                scene.update.call(scene, delta, now);
                scene.world.update(delta, now);
            }
        }
    }
    render(gameFrame) {
        const renderList = this.renderList;
        renderList.length = 0;
        this.dirtyCameras = 0;
        this.dirtyFrame = 0;
        this.totalFrame = 0;
        for (let scene of this.scenes.values()) {
            if (scene.willRender) {
                let world = scene.world;
                this.dirtyFrame += world.render(gameFrame);
                this.totalFrame += world.totalFrame;
                if (world.renderList.length === 0) {
                    continue;
                }
                if (world.camera.dirtyRender) {
                    this.dirtyCameras++;
                    world.camera.dirtyRender = false;
                }
                renderList.push(world.camera);
                renderList.push(world.renderList);
            }
        }
        if (this.flush) {
            //  Invalidate the renderer cache
            this.dirtyFrame++;
            //  And reset
            this.flush = false;
        }
        return [renderList, this.dirtyFrame, this.dirtyCameras];
    }
}
//# sourceMappingURL=SceneManager.js.map