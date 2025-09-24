class TriangleController extends Component {
    start() {
        // this.transform.position = new Vector2(0, 0)
        this.velocity = new Vector2(1, 1)

    }
    update() {
        this.transform.position.plusEquals(this.velocity.times(60 * Time.deltaTime))

        if (this.transform.position.x > Engine.canvas.width || this.transform.position.x < 0) {
            this.velocity.x *= -1 
        }
        if (this.transform.position.y > Engine.canvas.height || this.transform.position.y < 0) {
            this.velocity.y *= -1 
        }
    }
}