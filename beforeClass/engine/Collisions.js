class Collisions {
  static inCollision(one, two) {
    //Get the points in the polygons on each game object
    const onePointsRaw = one.getComponent(Polygon).points
    const twoPointsRaw = two.getComponent(Polygon).points

    //Apply the scale and positional transformational attributes to the points
    const onePoints = onePointsRaw.map(p => p.scale(one.transform.scale).plus(one.transform.position))
    const twoPoints = twoPointsRaw.map(p => p.scale(two.transform.scale).plus(two.transform.position))

    //Where each line formed by the polygons is stored
    const lines = []

    //For all point pairs in both arrays, find the orthogonal line and add it to lines
    for (const polygonPoints of [onePoints, twoPoints]) {
      for (let i = 0; i < polygonPoints.length; i++) {
        const a = polygonPoints[i]
        const b = polygonPoints[(i+1)%polygonPoints.length]
        lines.push(a.minus(b).orthogonal())
      }
    }

    //For each line...
    for (const line of lines) {
      //...Find the dot product of all points in both polygons...
      const oneDots = onePoints.map(p => p.dot(line))
      const twoDots = twoPoints.map(p => p.dot(line))

      //...and if there is a gap, they are not in collision
      if (Math.max(...oneDots) < Math.min(...twoDots) || Math.max(...twoDots) < Math.min(...oneDots)) return false
    }

    //If we get here, then the polygons were always overlapping, so we know they are in collision
    return true
  }
}