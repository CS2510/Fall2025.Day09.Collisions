class SquareGameObject extends GameObject{
    constructor(){
        super("Player Game Object")
        this.addComponent(new SquareController())
        this.addComponent(new Polygon(), {fillStyle:"red"})
        this.transform.scale = new Vector2(20, 20)
    }
}