ServerEvents.recipes(event => {

  event.remove({ output: 'minecraft:spyglass'})
  
  event.shaped('minecraft:spyglass', [
    ' Y ',
    ' X ',
    ' X '
  ], {
    X: 'minecraft:copper_ingot',
    Y: 'minecraft:glass_pane'
  })


    event.remove({ output: 'minecraft:amethyst_shard', type: 'minecraft:stonecutting' })
    event.stonecutting('4x minecraft:amethyst_shard', 'minecraft:amethyst_block')

    event.remove({ type: 'minecraft:smelting', output: '#c:foods' })



      event.shaped('minecraft:furnace', [
        'XXX',
        'X X',
        'XXX'
    ], {
        X: '#minecraft:stone_tool_materials'
    })


    event.remove({ output: 'spelunkery:charcoal_lump', type: 'minecraft:smelting' });
    
    event.smoking('minecraft:leather', 'minecraft:rotten_flesh').xp(0.35);
})
