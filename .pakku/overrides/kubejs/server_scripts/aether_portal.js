ServerEvents.tags('block', event => {

    const blacklist = [ 'minecraft:glowstone', 'minecraft:end_stone_brick_stairs', 'minecraft:end_stone_brick_slab', 'minecraft:end_stone_brick_wall', 'diagonalwalls:minecraft/end_stone_brick_wall', 'bbb:end_stone_brick_layer', 'clutter:end_stone_brick_chimney', 'hearth_and_home:end_stone_brick_chimney']
    
    event.add('aether:aether_portal_blocks', /.*end_stone.*/);
    blacklist.forEach(block => {
        event.remove('aether:aether_portal_blocks', block)
    })
})