ServerEvents.recipes(event => {
  const fallback = global.copperEquipmentFallback || []
  const copper = 'minecraft:copper_ingot'
  const stick = 'minecraft:stick'
  const add = (id, recipe) => {
    if (fallback.includes(id)) recipe()
  }

  add('minecraft:copper_sword', () => event.shaped('minecraft:copper_sword', ['C', 'C', 'S'], { C: copper, S: stick }).id('shenanigans:copper_sword'))
  add('minecraft:copper_pickaxe', () => event.shaped('minecraft:copper_pickaxe', ['CCC', ' S ', ' S '], { C: copper, S: stick }).id('shenanigans:copper_pickaxe'))
  add('minecraft:copper_axe', () => event.shaped('minecraft:copper_axe', ['CC', 'CS', ' S'], { C: copper, S: stick }).id('shenanigans:copper_axe'))
  add('minecraft:copper_shovel', () => event.shaped('minecraft:copper_shovel', ['C', 'S', 'S'], { C: copper, S: stick }).id('shenanigans:copper_shovel'))
  add('minecraft:copper_hoe', () => event.shaped('minecraft:copper_hoe', ['CC', ' S', ' S'], { C: copper, S: stick }).id('shenanigans:copper_hoe'))
  add('minecraft:copper_helmet', () => event.shaped('minecraft:copper_helmet', ['CCC', 'C C'], { C: copper }).id('shenanigans:copper_helmet'))
  add('minecraft:copper_chestplate', () => event.shaped('minecraft:copper_chestplate', ['C C', 'CCC', 'CCC'], { C: copper }).id('shenanigans:copper_chestplate'))
  add('minecraft:copper_leggings', () => event.shaped('minecraft:copper_leggings', ['CCC', 'C C', 'C C'], { C: copper }).id('shenanigans:copper_leggings'))
  add('minecraft:copper_boots', () => event.shaped('minecraft:copper_boots', ['C C', 'C C'], { C: copper }).id('shenanigans:copper_boots'))

  // Mojang 1.21.9: equipment smelts to one nugget (200 ticks) or blasts (100 ticks), XP 0.1.
  for (const item of [
    'copper_sword', 'copper_pickaxe', 'copper_axe', 'copper_shovel', 'copper_hoe',
    'copper_helmet', 'copper_chestplate', 'copper_leggings', 'copper_boots'
  ]) {
    add(`minecraft:${item}`, () => {
      event.smelting('create:copper_nugget', `minecraft:${item}`)
        .xp(0.1).cookingTime(200).id(`shenanigans:${item}_from_smelting`)
      event.blasting('create:copper_nugget', `minecraft:${item}`)
        .xp(0.1).cookingTime(100).id(`shenanigans:${item}_from_blasting`)
    })
  }
})
