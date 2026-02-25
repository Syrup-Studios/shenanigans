ItemEvents.entityInteracted('minecraft:item_frame', event => {
    const { player, target, hand } = event
    if (player.isCrouching()) {
        if (hand == 'main') {
            if (!target.isInvisible()) {
                target.setInvisible(true)
                player.playSound('minecraft:block.glass.place', 1.0, 1.0)
                event.cancel()
            }
        }
    }
})

ItemEvents.entityInteracted('minecraft:glow_item_frame', event => {
    const { player, target, hand } = event
    if (player.isCrouching() && hand == 'main') {
        if (!target.isInvisible()) {
            target.setInvisible(true)
            player.playSound('minecraft:block.glass.place', 1.0, 1.0)
            event.cancel()
        }
    }
})