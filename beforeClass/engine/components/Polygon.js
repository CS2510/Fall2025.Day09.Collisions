class Polygon extends Component {
    fillStyle = "magenta"
    points = [new Vector2(0, -1), new Vector2(1, 1), new Vector2(-1, 1)]
    draw(ctx) {
        ctx.fillStyle = this.fillStyle

        ctx.beginPath()
        for(const point of this.points){
            ctx.lineTo(this.transform.position.x + point.x*this.transform.scale.x, this.transform.position.y + point.y * this.transform.scale.y)
        }
        // ctx.lineTo(this.transform.position.x, this.transform.position.y)
        // ctx.lineTo(this.transform.position.x + 1*this.transform.scale.x, this.transform.position.y + 1*this.transform.scale.y)
        // ctx.lineTo(this.transform.position.x + 0, this.transform.position.y + 1*this.transform.scale.y)
        ctx.fill()
    }
}