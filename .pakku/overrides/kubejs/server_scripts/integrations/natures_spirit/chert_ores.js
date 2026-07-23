ServerEvents.recipes(event => {
    event.custom({
        type: 'create:crushing',
        ingredients: [
            {
                item: 'natures_spirit:chert_copper_ore'
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
                id: 'natures_spirit:chert',
                chance: 0.12
            }
        ],
        processingTime: 250
    }).id('shenanigans:create/crushing/chert_copper_ore');

    event.custom({
        type: 'create:crushing',
        ingredients: [
            {
                item: 'natures_spirit:chert_diamond_ore'
            }
        ],
        results: [
            {
                id: 'spelunkery:rough_diamond'
            },
            {
                id: 'spelunkery:rough_diamond',
                chance: 0.75
            },
            {
                id: 'create:experience_nugget',
                chance: 0.75
            },
            {
                id: 'natures_spirit:chert',
                chance: 0.12
            }
        ],
        processingTime: 350
    }).id('shenanigans:create/crushing/chert_diamond_ore');

    event.custom({
        type: 'create:crushing',
        ingredients: [
            {
                item: 'natures_spirit:chert_emerald_ore'
            }
        ],
        results: [
            {
                id: 'spelunkery:rough_emerald'
            },
            {
                id: 'spelunkery:rough_emerald',
                chance: 0.75
            },
            {
                id: 'create:experience_nugget',
                chance: 0.75
            },
            {
                id: 'natures_spirit:chert',
                chance: 0.12
            }
        ],
        processingTime: 350
    }).id('shenanigans:create/crushing/chert_emerald_ore');

    event.custom({
        type: 'create:crushing',
        ingredients: [
            {
                item: 'natures_spirit:chert_gold_ore'
            }
        ],
        results: [
            {
                id: 'create:crushed_raw_gold'
            },
            {
                id: 'create:crushed_raw_gold',
                chance: 0.75
            },
            {
                id: 'create:experience_nugget',
                count: 2,
                chance: 0.75
            },
            {
                id: 'natures_spirit:chert',
                chance: 0.12
            }
        ],
        processingTime: 250
    }).id('shenanigans:create/crushing/chert_gold_ore');

    event.custom({
        type: 'create:crushing',
        ingredients: [
            {
                item: 'natures_spirit:chert_iron_ore'
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
                id: 'natures_spirit:chert',
                chance: 0.12
            }
        ],
        processingTime: 250
    }).id('shenanigans:create/crushing/chert_iron_ore');

    event.custom({
        type: 'create:crushing',
        ingredients: [
            {
                item: 'natures_spirit:chert_lapis_ore'
            }
        ],
        results: [
            {
                id: 'spelunkery:rough_lazurite',
                count: 3
            },
            {
                id: 'spelunkery:rough_lazurite',
                chance: 0.5
            },
            {
                id: 'create:experience_nugget',
                chance: 0.75
            },
            {
                id: 'natures_spirit:chert',
                chance: 0.12
            }
        ],
        processingTime: 250
    }).id('shenanigans:create/crushing/chert_lapis_ore');

    event.custom({
        type: 'create:crushing',
        ingredients: [
            {
                item: 'natures_spirit:chert_redstone_ore'
            }
        ],
        results: [
            {
                id: 'spelunkery:rough_cinnabar',
                count: 2
            },
            {
                id: 'minecraft:redstone',
                chance: 0.5
            },
            {
                id: 'create:experience_nugget',
                chance: 0.75
            },
            {
                id: 'natures_spirit:chert',
                chance: 0.12
            }
        ],
        processingTime: 250
    }).id('shenanigans:create/crushing/chert_redstone_ore');
});
