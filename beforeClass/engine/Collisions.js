class Collisions {
  static inCollision(one, two) {
    const onePointsRaw = one.getComponent(Polygon).points
    const twoPointsRaw = two.getComponent(Polygon).points

    const onePoints = onePointsRaw.map(p => p.scale(one.transform.scale).plus(one.transform.position))
    const twoPoints = twoPointsRaw.map(p => p.scale(two.transform.scale).plus(two.transform.position))

    const lines = []

    for (const polygonPoints of [onePoints, twoPoints]) {
      for (let i = 0; i < polygonPoints.length; i++) {
        const a = polygonPoints[i]
        const b = i < polygonPoints.length - 1 ? polygonPoints[i + 1] : polygonPoints[0]
        lines.push(a.minus(b).orthogonal())
      }
    }

    for (const line of lines) {
      const oneDots = onePoints.map(p => p.dot(line))
      const twoDots = twoPoints.map(p => p.dot(line))

      if (Math.max(...oneDots) < Math.min(...twoDots) || Math.max(...twoDots) < Math.min(...oneDots)) return false
    }

    return true
  }
}