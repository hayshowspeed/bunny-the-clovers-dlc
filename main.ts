namespace SpriteKind {
    export const menu = SpriteKind.create()
}
info.onScore(250, function () {
    game.gameOver(true)
})
info.player2.onScore(250, function () {
    god = sprites.create(img`
        ................
        ................
        ................
        ................
        ...22222222222..
        ...22222222222..
        ..2222222222222.
        ..2222222222222.
        ..222222222222..
        ..222222222222..
        ..222222222222..
        ..22222222222...
        ..2222222222222.
        ...2222222222222
        ....222222222222
        .....22222222222
        ....22222222222.
        ..2222222222222.
        ..222222222222..
        .2222222222222..
        `, SpriteKind.Player)
    controller.moveSprite(god)
})
info.player3.onScore(250, function () {
    god = sprites.create(img`
        ................
        ................
        ................
        ................
        ...22222222222..
        ...22222222222..
        ..2222222222222.
        ..2222222222222.
        ..222222222222..
        ..222222222222..
        ..222222222222..
        ..22222222222...
        ..2222222222222.
        ...2222222222222
        ....222222222222
        .....22222222222
        ....22222222222.
        ..2222222222222.
        ..222222222222..
        .2222222222222..
        `, SpriteKind.Player)
    controller.moveSprite(god)
})
info.player4.onScore(250, function () {
    god = sprites.create(img`
        ................
        ................
        ................
        ................
        ...22222222222..
        ...22222222222..
        ..2222222222222.
        ..2222222222222.
        ..222222222222..
        ..222222222222..
        ..222222222222..
        ..22222222222...
        ..2222222222222.
        ...2222222222222
        ....222222222222
        .....22222222222
        ....22222222222.
        ..2222222222222.
        ..222222222222..
        .2222222222222..
        `, SpriteKind.Player)
    controller.moveSprite(god)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy(effects.confetti, 100)
    music.baDing.play()
    info.changeScoreBy(1)
})
info.onLifeZero(function () {
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.menu, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy(effects.confetti, 100)
    music.baDing.play()
    info.changeScoreBy(1)
})
controller.player2.onEvent(ControllerEvent.Connected, function () {
	
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.disintegrate, 100)
    carer.setKind(SpriteKind.Projectile)
    music.spooky.play()
    info.changeLifeBy(-1)
})
let dog: Sprite = null
let food2: Sprite = null
let logo: Sprite = null
let duck: Sprite = null
let bee: Sprite = null
let projecttile3: Sprite = null
let bow: Sprite = null
let carer: Sprite = null
let god: Sprite = null
let list: number[] = []
game.setDialogFrame(img`
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 . . . . . . . . . . . . . 3 
    3 . . . . . . . . . . . . . 3 
    3 . . . . . . . . . . . . . 3 
    3 . . . . . . . . . . . . . 3 
    3 . . . . . . . . . . . . . 3 
    3 . . . . . . . . . . . . . 3 
    3 . . . . . . . . . . . . . 3 
    3 . . . . . . . . . . . . . 3 
    3 . . . . . . . . . . . . . 3 
    3 . . . . . . . . . . . . . 3 
    3 . . . . . . . . . . . . . 3 
    3 . . . . . . . . . . . . . 3 
    3 . . . . . . . . . . . . . 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    `)
game.setDialogCursor(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 3 3 3 3 3 3 3 . . . . . 
    . . . . 3 3 3 3 3 3 3 3 . . . . 
    . . . . . 3 3 3 3 3 3 3 3 3 . . 
    . . . . . 3 3 3 3 3 3 3 3 3 . . 
    . . . . . 3 3 3 3 3 3 3 3 3 . . 
    . . . . . 3 3 3 3 3 3 3 . . . . 
    . . . . . 3 . . . . . . . . . . 
    . . . . . 3 3 3 3 3 3 . . . . . 
    . . . . . 3 3 3 3 3 . . . . . . 
    . . . . . 3 3 3 3 3 3 . . . . . 
    . . . . . . . 3 3 3 3 . . . . . 
    `)
list.push(-39 % 1)
list = [0, 1]
let text_list = ["a", "b", "c"]
effects.bubbles.startScreenEffect(500)
scene.cameraShake(5, 2000)
MakeyMakey.setMakeyMakeyDefaults()
mp.setPlayerIndicatorsVisible(true)
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
    bow = sprites.createProjectileFromSide(img`
        . . . . . . b b b b . . . . . . 
        . . . . . . b 4 4 4 b . . . . . 
        . . . . . . b b 4 4 4 b . . . . 
        . . . . . b 4 b b b 4 4 b . . . 
        . . . . b d 5 5 5 4 b 4 4 b . . 
        . . . . b 3 2 3 5 5 4 e 4 4 b . 
        . . . b d 2 2 2 5 7 5 4 e 4 4 e 
        . . . b 5 3 2 3 5 5 5 5 e e e e 
        . . b d 7 5 5 5 3 2 3 5 5 e e e 
        . . b 5 5 5 5 5 2 2 2 5 5 d e e 
        . b 3 2 3 5 7 5 3 2 3 5 d d e 4 
        . b 2 2 2 5 5 5 5 5 5 d d e 4 . 
        b d 3 2 d 5 5 5 d d d 4 4 . . . 
        b 5 5 5 5 d d 4 4 4 4 . . . . . 
        4 d d d 4 4 4 . . . . . . . . . 
        4 4 4 4 . . . . . . . . . . . . 
        `, randint(-30, 50), randint(-30, 50))
    bow.setKind(SpriteKind.Projectile)
})
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
game.onUpdateInterval(4000, function () {
    logo = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 5 5 5 5 5 5 5 . . . . 
        . . . 2 2 2 2 2 2 2 2 2 2 d . . 
        . . . d d 5 5 5 5 5 5 5 d d . . 
        . . . d d 5 5 5 5 5 5 5 d d . . 
        . . . d d 5 5 2 5 5 2 5 d d . . 
        . . . d d 5 5 5 5 5 5 5 d d . . 
        . . . . . 5 5 5 5 5 5 5 . . . . 
        . . . . . 5 5 7 7 7 7 5 . . . . 
        . . . . . 5 5 5 5 5 5 5 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, randint(-50, 50), randint(-50, 50))
    logo.setKind(SpriteKind.Projectile)
})
game.onUpdateInterval(4000, function () {
    logo = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 5 5 5 5 5 5 5 . . . . 
        . . . 2 2 2 2 2 2 2 2 2 2 d . . 
        . . . d d 5 5 5 5 5 5 5 d d . . 
        . . . d d 5 5 5 5 5 5 5 d d . . 
        . . . d d 5 5 2 5 5 2 5 d d . . 
        . . . d d 5 5 5 5 5 5 5 d d . . 
        . . . . . 5 5 5 5 5 5 5 . . . . 
        . . . . . 5 5 7 7 7 7 5 . . . . 
        . . . . . 5 5 5 5 5 5 5 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, randint(-30, 50), randint(-50, 50))
    logo.setKind(SpriteKind.Projectile)
})
game.onUpdateInterval(6000, function () {
    food2 = sprites.createProjectileFromSide(assets.image`evil`, randint(-30, 50), randint(-30, 50))
    food2.setKind(SpriteKind.Enemy)
    info.changeLifeBy(-2)
})
game.onUpdateInterval(8000, function () {
    dog = sprites.createProjectileFromSide(img`
        bbbb........bbbb.................
        c99bb......bb99b.................
        c999bb....bb999c.................
        c9b99bccccb99b9c.................
        c9bb99bccb99bb9c.................
        c93b99999999b39c.................
        c93399999999339c.................
        c99399999999399c.................
        c99999991199999c.................
        c999ff91119ff99c........bbbbbb...
        c999ff91111ff99c.......c999999bb.
        c99991111111999c......c99999999b.
        c9991111fff1199c.....c9991119999b
        c999c11fff1199bc.....c9911111999b
        c999cc111111c9bc.....c911dd11199b
        c99999bb33cc99bcc....cbddbbd1199c
        c999999b33c99999bbccccbbdbbb1199c
        c9999999bb9999999999999999bb1999c
        c999911119999999999999999999b999c
        c999111111999999999999999999999c.
        c99911111119999999999999999999cc.
        c99111111119999999999999999999c..
        c99111111111999999999999999999c..
        cb9111111111999999999999999999c..
        .f9111111111999999999999999999c..
        .ff111111111999999999999999999c..
        ..fb11111111999999999999999999c..
        ...fb1111119999999111111999999c..
        ...fbbb11119999991111111199999c..
        ....fbbfffb9999ccccccccccb9999c..
        ....fbbf..f999c.....fbbf.c9999c..
        ....fbbf..f999c.....fbbf.cc9999c.
        ....fbbf..f99c.......fbf..cc999c.
        ....fbbf..f99c.......fbbf..cc99c.
        ....fbbf..f99c.......fbbf...c99c.
        ....fbbf..f99c......fbbbf...c99c.
        ...fbbbf..f99c......ffff....cb9c.
        ...fbbf..f999c.............c999c.
        ...ffff..f99cc.............c999c.
        .........fffc..............cccc..
        `, randint(-30, 50), randint(-30, 50))
    food2.setKind(SpriteKind.Enemy)
})
