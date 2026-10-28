ServerEvents.recipes(event => {
  const woods = ['acacia', 'bamboo', 'birch', 'cherry', 'crimson', 'dark_oak', 'jungle', 'mangrove', 'oak', 'spruce', 'warped']
  const storage = [
    ['barrel', ['PSP', 'P P', 'PSP']],
    ['chest', ['PPP', 'P P', 'PPP']],
    ['limited_barrel_1', ['PSP', 'P P', 'PPP']],
    ['limited_barrel_2', ['PPP', 'S S', 'PPP']],
    ['limited_barrel_3', ['PSP', 'P P', 'SPS']],
    ['limited_barrel_4', ['SPS', 'P P', 'SPS']]
  ]
  const add = (id, item, type, pattern, key, wood) => {
    event.remove({ id })
    event.custom({
      'neoforge:conditions': [{ type: 'sophisticatedcore:item_enabled', itemRegistryName: item }],
      type,
      category: 'misc',
      key,
      pattern,
      result: { components: { 'sophisticatedstorage:wood_type': wood }, count: 1, id: item }
    }).id(id)
  }

  woods.forEach(wood => storage.forEach(([name, pattern]) => {
    const id = `sophisticatedstorage:${wood}_${name}`
    const key = { P: { item: `minecraft:${wood}_planks` } }
    if (name !== 'chest') key.S = { item: `minecraft:${wood}_slab` }
    add(id, `sophisticatedstorage:${name}`, 'minecraft:crafting_shaped', pattern, key, wood)
  }))

  storage.forEach(([name, pattern]) => {
    const id = `sophisticatedstorage:generic_${name}`
    const key = { P: { tag: 'minecraft:planks' } }
    if (name !== 'chest') key.S = { tag: 'minecraft:wooden_slabs' }
    add(id, `sophisticatedstorage:${name}`, 'sophisticatedstorage:generic_wood_storage', pattern, key, name === 'chest' ? 'oak' : 'spruce')
  })
})
