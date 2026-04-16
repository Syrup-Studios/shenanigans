ServerEvents.tags('block', event => {

    const copperOres = ['minecraft:copper_ore', 'natures_spirit:chert_copper_ore', 'minecraft:deepslate_copper_ore', 'meadow:alpine_copper_ore', 'spelunkery:diorite_copper_ore', 'spelunkery:granite_copper_ore', 'spelunkery:tuff_copper_ore', 'deeperdarker:sculk_stone_copper_ore', 'deeperdarker:gloomslate_copper_ore', 'meadow:alpine_copper_ore']

    event.remove('minecraft:needs_stone_tool', copperOres)
})