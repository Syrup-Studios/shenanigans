ServerEvents.recipes(event => {
  event.replaceInput({}, 'minecraft:chest', '#c:chests')
  event.replaceInput({}, 'minecraft:barrel', '#c:barrels')

  event.remove({ id: 'sophisticatedstorage:oak_chest_from_vanilla_chest' })
  event.remove({ id: 'sophisticatedstorage:spruce_barrel_from_vanilla_barrel' })
})
