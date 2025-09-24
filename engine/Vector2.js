/**
 * Represents a 2D vector (direction) or 2D position
 * 
 * See https://docs.unity3d.com/6000.1/Documentation/ScriptReference/Vector2.html
 * 
 * 
 */

class Vector2 {
    /**
   * The x component of the Vector
   * 
   * See https://docs.unity3d.com/6000.1/Documentation/ScriptReference/Vector2-x.html
   *
   * @type {Number}
   */
    x

    /**
   * The y component of the Vector
   * 
   * See https://docs.unity3d.com/6000.1/Documentation/ScriptReference/Vector2-y.html
   *
   * @type {Number}
   */
    y

    /**
   * Create a new vector
   * 
   * See https://docs.unity3d.com/6000.1/Documentation/ScriptReference/Vector2-ctor.html
   * 
   * @param {Number} x The x coordinate of the vector
   * @param {Number} y The y coordinate of the vector
   */
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    static get zero() { return new Vector2(0, 0) }



    static get left() { return new Vector2(-1, 0) }
    static get right() { return new Vector2(1, 0) }
    static get up() { return new Vector2(0, -1) }
    static get down() { return new Vector2(0, 1) }

    plusEquals(other) {
        this.x += other.x
        this.y += other.y
    }

    plus(other){
        return new Vector2(this.x+other.x, this.y+other.y)
    }

    minus(other){
        return new Vector2(this.x - other.x, this.y - other.y)
    }

    clone(){
        return new Vector2(this.x, this.y)
    }

    times(scalar){
        return new Vector2(this.x*scalar, this.y*scalar)
    }

    scale(other){
        return new Vector2(this.x*other.x, this.y*other.y)
    }

    dot(other){
        return this.x*other.x+this.y*other.y
    }

    orthogonal(){
        return new Vector2(-this.y, this.x)
    }

    get magnitude(){
        return Math.sqrt(this.x**2+this.y**2)
    }
}