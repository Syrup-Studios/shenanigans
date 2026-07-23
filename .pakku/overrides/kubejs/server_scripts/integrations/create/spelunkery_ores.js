ServerEvents.recipes(event => {
    const ironOres = [
        {
            ore: 'spelunkery:andesite_iron_ore',
            stone: 'minecraft:andesite',
            recipe: 'andesite_iron_ore'
        },
        {
            ore: 'spelunkery:diorite_iron_ore',
            stone: 'minecraft:diorite',
            recipe: 'diorite_iron_ore'
        },
        {
            ore: 'spelunkery:granite_iron_ore',
            stone: 'minecraft:granite',
            recipe: 'granite_iron_ore'
        },
        {
            ore: 'spelunkery:tuff_iron_ore',
            stone: 'minecraft:tuff',
            recipe: 'tuff_iron_ore'
        }
    ];

    ironOres.forEach(ironOre => {
        event.custom({
            type: 'create:crushing',
            ingredients: [
                {
                    item: ironOre.ore
                }
            ],
            results: [
                {
                    id: 'create:crushed_raw_iron'
                },
                {
                    id: 'create:crushed_raw_iron',
                    chance: 0.75
                },
                {
                    id: 'create:experience_nugget',
                    chance: 0.75
                },
                {
                    id: ironOre.stone,
                    chance: 0.12
                }
            ],
            processingTime: 250
        }).id(`shenanigans:create/crushing/${ironOre.recipe}`);
    });

    const copperOres = [
        {
            ore: 'spelunkery:andesite_copper_ore',
            stone: 'minecraft:andesite',
            recipe: 'andesite_copper_ore'
        },
        {
            ore: 'spelunkery:diorite_copper_ore',
            stone: 'minecraft:diorite',
            recipe: 'diorite_copper_ore'
        },
        {
            ore: 'spelunkery:granite_copper_ore',
            stone: 'minecraft:granite',
            recipe: 'granite_copper_ore'
        },
        {
            ore: 'spelunkery:tuff_copper_ore',
            stone: 'minecraft:tuff',
            recipe: 'tuff_copper_ore'
        }
    ];

    copperOres.forEach(copperOre => {
        event.custom({
            type: 'create:crushing',
            ingredients: [
                {
                    item: copperOre.ore
                }
            ],
            results: [
                {
                    id: 'create:crushed_raw_copper',
                    count: 5
                },
                {
                    id: 'create:crushed_raw_copper',
                    chance: 0.25
                },
                {
                    id: 'create:experience_nugget',
                    chance: 0.75
                },
                {
                    id: copperOre.stone,
                    chance: 0.12
                }
            ],
            processingTime: 250
        }).id(`shenanigans:create/crushing/${copperOre.recipe}`);
    });
});
