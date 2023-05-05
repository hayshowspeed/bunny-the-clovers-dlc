namespace SpriteKind {
    export const menu = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy(effects.confetti, 100)
    music.baDing.play()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.menu, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy(effects.confetti, 100)
    music.baDing.play()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.disintegrate, 100)
    carer.setKind(SpriteKind.Projectile)
    music.spooky.play()
    info.changeLifeBy(-1)
})
let duck: Sprite = null
let bee: Sprite = null
let projecttile3: Sprite = null
let carer: Sprite = null
let menu = sprites.create(assets.image`lead bro`, SpriteKind.menu)
scene.setBackgroundImage(assets.image`menu`)
let mySprite = sprites.create(assets.image`lead bro`, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
info.setScore(0)
info.setLife(5)
animation.runImageAnimation(
mySprite,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . 5 . . . 5 . . . . . . 
    . . . . . 5 . . . 5 . . . . . . 
    . . . . . 5 5 5 5 5 . . . . . . 
    . . . . . 4 4 4 4 4 . . . . . . 
    . . . . . 5 5 5 5 5 . . . . . . 
    . . . . . 5 f 5 f 5 . . . . . . 
    . . . . . 5 5 5 5 5 . . . . . . 
    . . . . . 5 1 1 1 5 . . . . . . 
    . . . . . 5 5 5 5 5 . . . . . . 
    . . . . . 5 5 5 5 5 . . . . . . 
    . . . . . 5 5 5 5 5 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . 5 . . . 5 . . . . . . 
    . . . . . 5 . . . 5 . . . . . . 
    . . . . . 5 5 5 5 5 . . . . . . 
    . . . . . 4 4 4 4 4 . 5 . . . . 
    . . . . . 5 5 5 5 5 . . . . . . 
    . . . . . 5 f 5 f 5 . . . . . . 
    . . . . . 5 5 5 5 5 . . . . . . 
    . . . . . 5 1 1 1 5 . . . . . . 
    . . . . . 5 5 5 5 5 . . . . . . 
    . . . . . 5 5 5 5 5 . . . . . . 
    . . . . . 5 5 5 5 5 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . 5 . . . 5 . . . . . . 
    . . . . . 5 . . . 5 . . . . . . 
    . . . . . 5 5 5 5 5 . . 5 . . . 
    . . . . . 4 4 4 4 4 . 5 . . . . 
    . . . . . 5 5 5 5 5 . . . . . . 
    . . . . . 5 f 5 f 5 . . . . . . 
    . . . . . 5 5 5 5 5 . . . . . . 
    . . . . . 5 1 1 1 5 . . . . . . 
    . . . . . 5 5 5 5 5 . . . . . . 
    . . . . . 5 5 5 5 5 . . . . . . 
    . . . . . 5 5 5 5 5 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . 5 . . . 5 . . . . . . 
    . . . . . 5 . . . 5 . . . . . . 
    . . . . . 5 5 5 5 5 . . 5 . . . 
    . . . . . 4 4 4 4 4 . 5 . . . . 
    . . . . . 5 5 5 5 5 . . . 5 . . 
    . . . . . 5 f 5 f 5 . . 5 . . . 
    . . . . . 5 5 5 5 5 . . . . . . 
    . . . . . 5 1 1 1 5 . . . . . . 
    . . . . . 5 5 5 5 5 . . . . . . 
    . . . . . 5 5 5 5 5 . . . . . . 
    . . . . . 5 5 5 5 5 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . 5 . . . 5 . . . . . . 
    . . . . . 5 . . . 5 . . . . . . 
    . . . . . 5 5 5 5 5 . . 5 . . . 
    . . . . . 4 4 4 4 4 . 5 . . . . 
    . . . . . 5 5 5 5 5 . . . 5 . . 
    . . . . . 5 f 5 f 5 . . 5 . . . 
    . . . . . 5 5 5 5 5 . . . . . . 
    . . . . . 5 1 1 1 5 . . . 5 . . 
    . . . . . 5 5 5 5 5 . . . . . . 
    . . . . . 5 5 5 5 5 . . . . . . 
    . . . . . 5 5 5 5 5 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . 5 . . . 5 . . . . . . 
    . . . . . 5 . . . 5 . . . . . . 
    . . . . . 5 5 5 5 5 . . 5 . . . 
    . . . . . 4 4 4 4 4 . 5 . . . . 
    . . . . . 5 5 5 5 5 . . . 5 . . 
    . . . . . 5 f 5 f 5 . . 5 . . . 
    . . . . . 5 5 5 5 5 . . . . 5 . 
    . . . . . 5 1 1 1 5 . . . 5 . . 
    . . . . . 5 5 5 5 5 . . . . . . 
    . . . . . 5 5 5 5 5 . . . . . . 
    . . . . . 5 5 5 5 5 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `],
2000,
true
)
game.onUpdateInterval(5000, function () {
    projecttile3 = sprites.createProjectileFromSide(assets.image`collect`, randint(-50, 50), randint(-50, 50))
    carer = sprites.createProjectileFromSide(assets.image`avoid`, randint(-50, 50), randint(-50, 50))
    carer.setKind(SpriteKind.Enemy)
})
game.onUpdateInterval(5000, function () {
    projecttile3 = sprites.createProjectileFromSide(assets.image`collect`, randint(-50, 50), randint(-50, 50))
    bee = sprites.createProjectileFromSide(assets.image`avoid`, randint(-50, 50), randint(-50, 50))
    bee.setKind(SpriteKind.Enemy)
})
game.onUpdateInterval(5000, function () {
    duck = sprites.createProjectileFromSide(assets.image`collect`, randint(-50, 50), randint(-50, 50))
    bee = sprites.createProjectileFromSide(assets.image`avoid`, randint(-50, 50), randint(-50, 50))
    bee.setKind(SpriteKind.Enemy)
})
