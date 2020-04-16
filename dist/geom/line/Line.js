/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
/**
 * @classdesc
 * Defines a Line segment, a part of a line between two endpoints.
 *
 * @class Line
 * @memberof Phaser.Geom
 * @constructor
 * @since 3.0.0
 *
 * @param {number} [x1=0] - The x coordinate of the lines starting point.
 * @param {number} [y1=0] - The y coordinate of the lines starting point.
 * @param {number} [x2=0] - The x coordinate of the lines ending point.
 * @param {number} [y2=0] - The y coordinate of the lines ending point.
 */
export default class Line {
    constructor(x1 = 0, y1 = 0, x2 = 0, y2 = 0) {
        this.set(x1, y1, x2, y2);
    }
    set(x1 = 0, y1 = 0, x2 = 0, y2 = 0) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        return this;
    }
    get left() {
        return Math.min(this.x1, this.x2);
    }
    set left(value) {
        if (this.x1 <= this.x2) {
            this.x1 = value;
        }
        else {
            this.x2 = value;
        }
    }
    get right() {
        return Math.max(this.x1, this.x2);
    }
    set right(value) {
        if (this.x1 > this.x2) {
            this.x1 = value;
        }
        else {
            this.x2 = value;
        }
    }
    get top() {
        return Math.min(this.y1, this.y2);
    }
    set top(value) {
        if (this.y1 <= this.y2) {
            this.y1 = value;
        }
        else {
            this.y2 = value;
        }
    }
    get bottom() {
        return Math.max(this.y1, this.y2);
    }
    set bottom(value) {
        if (this.y1 > this.y2) {
            this.y1 = value;
        }
        else {
            this.y2 = value;
        }
    }
}
//# sourceMappingURL=Line.js.map