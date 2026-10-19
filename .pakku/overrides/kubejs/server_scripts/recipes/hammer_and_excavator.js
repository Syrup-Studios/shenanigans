ServerEvents.recipes(event => {
  const copper = 'minecraft:copper_ingot'
  const stick = 'minecraft:stick'

  event.remove({ id: 'onlyhammersandexcavators:stone_hammer' })
  event.shaped('onlyhammersandexcavators:stone_hammer', ['CCC', ' S ', ' S '], { C: copper, S: stick })
    .id('onlyhammersandexcavators:stone_hammer')
  event.remove({ id: 'onlyhammersandexcavators:stone_excavator' })
  event.shaped('onlyhammersandexcavators:stone_excavator', [' C ', 'CSC', ' S '], { C: copper, S: stick })
    .id('onlyhammersandexcavators:stone_excavator')
})
