ItemEvents.toolTierRegistry(event => {
  event.add('copper', tier => {
    tier.uses = 190
    tier.speed = 5
    tier.attackDamageBonus = 1
    tier.enchantmentValue = 13
    // Minecraft 1.21.1 has no copper harvest tag; its stone tag is equivalent.
    tier.incorrectBlocksForDropsTag = 'minecraft:incorrect_for_stone_tool'
    tier.repairIngredient = 'minecraft:copper_ingot'
  })
})

StartupEvents.registry('armor_material', event => {
  event.create('shenanigans:copper')
    // Mojang 1.21.9: durability 11, defense boots 1 / legs 3 / chest 4 / head 2.
    .defense({ boots: 1, leggings: 3, chestplate: 4, helmet: 2 })
    .enchantmentValue(8)
    .repairIngredient(() => Ingredient.of('minecraft:copper_ingot'))
})

StartupEvents.registry('item', event => {
  const items = Registry.of('minecraft:item')
  global.copperEquipmentFallback = []
  const create = (id, type, configure) => {
    if (!items.contains(id)) {
      configure(event.create(id, type))
      global.copperEquipmentFallback.push(id)
    }
  }

  create('minecraft:copper_sword', 'sword', item => item.displayName('Copper Sword').texture('shenanigans:item/copper_sword').tier('copper').attackDamageBaseline(3).speedBaseline(-2.4))
  create('minecraft:copper_pickaxe', 'pickaxe', item => item.displayName('Copper Pickaxe').texture('shenanigans:item/copper_pickaxe').tier('copper').attackDamageBaseline(1).speedBaseline(-2.8))
  create('minecraft:copper_axe', 'axe', item => item.displayName('Copper Axe').texture('shenanigans:item/copper_axe').tier('copper').attackDamageBaseline(7).speedBaseline(-3.2))
  create('minecraft:copper_shovel', 'shovel', item => item.displayName('Copper Shovel').texture('shenanigans:item/copper_shovel').tier('copper').attackDamageBaseline(1.5).speedBaseline(-3))
  create('minecraft:copper_hoe', 'hoe', item => item.displayName('Copper Hoe').texture('shenanigans:item/copper_hoe').tier('copper').attackDamageBaseline(-1).speedBaseline(-2))

  create('minecraft:copper_helmet', 'helmet', item => item.displayName('Copper Helmet').texture('shenanigans:item/copper_helmet').material('shenanigans:copper').maxDamage(121))
  create('minecraft:copper_chestplate', 'chestplate', item => item.displayName('Copper Chestplate').texture('shenanigans:item/copper_chestplate').material('shenanigans:copper').maxDamage(176))
  create('minecraft:copper_leggings', 'leggings', item => item.displayName('Copper Leggings').texture('shenanigans:item/copper_leggings').material('shenanigans:copper').maxDamage(165))
  create('minecraft:copper_boots', 'boots', item => item.displayName('Copper Boots').texture('shenanigans:item/copper_boots').material('shenanigans:copper').maxDamage(143))
})
