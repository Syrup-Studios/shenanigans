ServerEvents.recipes(event => {
    event.remove({ id: 'create:crushing/diamond_ore' });
    event.remove({ id: 'create:crushing/deepslate_diamond_ore' });
    event.remove({ id: 'create:crushing/emerald_ore' });
    event.remove({ id: 'create:crushing/deepslate_emerald_ore' });
    event.remove({ id: 'create:crushing/lapis_ore' });
    event.remove({ id: 'create:crushing/deepslate_lapis_ore' });
    event.remove({ id: 'create:crushing/redstone_ore' });
    event.remove({ id: 'create:crushing/deepslate_redstone_ore' });

    event.custom({
        type: 'create:crushing',
        ingredients: [
            {
                item: 'meadow:alpine_diamond_ore'
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
                id: 'meadow:limestone',
                chance: 0.12
            }
        ],
        processingTime: 350
    })
        .id('shenanigans:create/crushing/alpine_diamond_ore');

    event.custom({
        type: 'create:crushing',
        ingredients: [
            {
                item: 'meadow:alpine_emerald_ore'
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
                id: 'meadow:limestone',
                chance: 0.12
            }
        ],
        processingTime: 350
    })
        .id('shenanigans:create/crushing/alpine_emerald_ore');

    event.custom({
        type: 'create:crushing',
        ingredients: [
            {
                item: 'meadow:alpine_gold_ore'
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
                id: 'meadow:limestone',
                chance: 0.12
            }
        ],
        processingTime: 250
    })
        .id('shenanigans:create/crushing/alpine_gold_ore');

    event.custom({
        type: 'create:crushing',
        ingredients: [
            {
                item: 'meadow:alpine_iron_ore'
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
                id: 'meadow:limestone',
                chance: 0.12
            }
        ],
        processingTime: 250
    })
        .id('shenanigans:create/crushing/alpine_iron_ore');

    event.custom({
        type: 'create:crushing',
        ingredients: [
            {
                item: 'meadow:alpine_lapis_ore'
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
                id: 'meadow:limestone',
                chance: 0.12
            }
        ],
        processingTime: 250
    })
        .id('shenanigans:create/crushing/alpine_lapis_ore');

    event.custom({
        type: 'create:crushing',
        ingredients: [
            {
                item: 'meadow:alpine_redstone_ore'
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
                id: 'meadow:limestone',
                chance: 0.12
            }
        ],
        processingTime: 250
    })
        .id('shenanigans:create/crushing/alpine_redstone_ore');
});
