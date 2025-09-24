/**
 * Base class for all scenes
 * 
 */

class Scene {
    gameObjects = []
    start() {
        for (const gameObject of this.gameObjects) {
            gameObject.start()
            gameObject.hasStarted = true
        }
    }
    update() {
        
        //Update everything
        for (const gameObject of this.gameObjects) {
            //Start if the gameObject hasn't started yet
            if (!gameObject.hasStarted) {
                gameObject.start()
                gameObject.hasStarted = true
            }
            gameObject.update()
        }

        //Delete what needs to be removed
        this.gameObjects = this.gameObjects.filter(go => !go.markForDelete)
    }
    draw(ctx) {
        for (const gameObject of this.gameObjects) {
            gameObject.draw(ctx)
        }
    }
    instantiate(gameObject, position) {
        this.gameObjects.push(gameObject)
        if (position)
            gameObject.transform.position = position
    }
}