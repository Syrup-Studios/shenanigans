ServerEvents.highPriorityData(event => {
    const syncOre = (moddedBlock, vanillaBlock) => {
        event.addJson(`${moddedBlock.split(':')[0]}:loot_tables/blocks/${moddedBlock.split(':')[1]}.json`, 
            {
                type: "minecraft:block",
                pools: [
                    {
                        rolls: 1,
                        entries: [
                            {
                                type: "minecraft:loot_table",
                                name: `minecraft:blocks/${vanillaBlock}`
                            }
                        ]
                    }
                ]
            }
        )
    }

    syncOre('natures_spirit:chert_diamond_ore', 'diamond_ore')
    syncOre('deeperdarker:sculk_stone_diamond_ore', 'diamond_ore')
    syncOre('deeperdarker:gloomslate_diamond_ore', 'diamond_ore')
    syncOre('meadow:alpine_diamond_ore', 'diamond_ore')

    syncOre('natures_spirit:chert_redstone_ore', 'redstone_ore')
    syncOre('deeperdarker:sculk_stone_redstone_ore', 'redstone_ore')
    syncOre('deeperdarker:gloomslate_redstone_ore', 'redstone_ore')
    syncOre('meadow:alpine_redstone_ore', 'redstone_ore')

    syncOre('natures_spirit:chert_lapis_ore', 'lapis_ore')
    syncOre('deeperdarker:sculk_stone_lapis_ore', 'lapis_ore')
    syncOre('deeperdarker:gloomslate_lapis_ore', 'lapis_ore')
    syncOre('meadow:alpine_lapis_ore', 'lapis_ore')

    syncOre('natures_spirit:chert_emerald_ore', 'emerald_ore')
    syncOre('deeperdarker:sculk_stone_emerald_ore', 'emerald_ore')
    syncOre('deeperdarker:gloomslate_emerald_ore', 'emerald_ore')
    syncOre('meadow:alpine_emerald_ore', 'emerald_ore')
})