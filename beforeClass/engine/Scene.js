/**
 * Base class for all scenes
 * 
 */

class Scene {
    gameObjects = []
    start() {
        // for (const gameObject of this.gameObjects) {
        //     gameObject.start()
        // }
    }
    update() {
        //Start everything
        const notStarted = this.gameObjects.filter(go=>!go.hasStarted)
        for(const gameObject of notStarted){
            gameObject.start()
            gameObject.hasStarted = true
        }

        //Update everything
        for (const gameObject of this.gameObjects) {
            gameObject.update()
        }

        //Delete what needs to be removed
        this.gameObjects = this.gameObjects.filter(go=>!go.markForDelete)
    }
    draw(ctx) {
        for (const gameObject of this.gameObjects) {
            gameObject.draw(ctx)
        }
    }
    instantiate(gameObject, position){
        this.gameObjects.push(gameObject)
        if(position)
            gameObject.transform.position = position
        //gameObject.start()
    }
}