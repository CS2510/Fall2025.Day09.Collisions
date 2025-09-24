class MainScene extends Scene{
    constructor(){
        super()
        //Game-specific code
        this.instantiate(new TriangleGameObject(), new Vector2(0,0))
        this.instantiate(new TriangleGameObject(), new Vector2(50, 50))
        this.instantiate(new TriangleGameObject(), new Vector2(30, 30))
        this.instantiate(new TriangleGameObject(), new Vector2(40, 70))
        this.instantiate(new SquareGameObject(), new Vector2(100, 100))
    }
}