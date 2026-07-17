ServerEvents.recipes(event => {
    event.remove({ output: 'minecraft:map' })

    event.shaped('minecraft:map', [
        'PPP',
        'PCP',
        'PPP'
    ], {
        P: 'minecraft:paper',
        C: 'minecraft:compass'
    }).keepIngredient('minecraft:compass') 


  event.shapeless(
    Item.of('minecraft:map'),
    [
      'minecraft:filled_map'
    ]
  )
})
