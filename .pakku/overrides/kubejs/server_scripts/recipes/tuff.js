ServerEvents.recipes(event => {
  event.remove({ id: 'create:crushing/tuff' })
  event.remove({ id: 'create:crushing/tuff_recycling' })
  event.shapeless('minecraft:tuff', [
    'minecraft:gravel',
    'minecraft:flint',
    '#minecraft:stone_crafting_materials'
  ]).id('shenanigans:stone/tuff_from_gravel_flint_stone')
})
