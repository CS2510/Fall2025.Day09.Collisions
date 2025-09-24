/**
 * Base class for all objects ín a scene.
 * 
 * See: https://docs.unity3d.com/ScriptReference/GameObject.html
 */

class GameObject {
    components = []
    hasStarted = false
    markForDelete = false
    name = "[NO NAME]"
    constructor(name) {
        this.addComponent(new Transform())
        this.name = name
    }
    start() {
        for (const component of this.components) {
            component.start()
        }
    }
    update() {
        if(!this.hasStarted){
            this.hasStarted = true
            this.start()
        }
        for (const component of this.components) {
            component.update()
        }
    }
    draw(ctx) {
        for (const component of this.components) {
            component.draw(ctx)
        }
    }
    addComponent(component, values) {
        this.components.push(component)
        component.gameObject = this
        Object.assign(component, values)
    }
    get transform() {
        return this.components[0]
    }
    destroy() {
        this.markForDelete = true
    }
    getComponent(type) {
        return this.components.find(go => go instanceof type)
    }
}