ServerEvents.recipes(event => {
    const oxidationChains = [
        {
            folder: 'clutter',
            mod: 'clutter',
            items: [
                'clutter:copper_bars',
                'clutter:exposed_copper_bars',
                'clutter:weathered_copper_bars',
                'clutter:oxidized_copper_bars'
            ]
        },
        {
            folder: 'clutter',
            mod: 'clutter',
            items: [
                'clutter:copper_chain',
                'clutter:exposed_copper_chain',
                'clutter:weathered_copper_chain',
                'clutter:oxidized_copper_chain'
            ]
        },
        {
            folder: 'clutter',
            mod: 'clutter',
            items: [
                'clutter:copper_door',
                'clutter:exposed_copper_door',
                'clutter:weathered_copper_door',
                'clutter:oxidized_copper_door'
            ]
        },
        {
            folder: 'clutter',
            mod: 'clutter',
            items: [
                'clutter:copper_lantern',
                'clutter:exposed_copper_lantern',
                'clutter:weathered_copper_lantern',
                'clutter:oxidized_copper_lantern'
            ]
        },
        {
            folder: 'clutter',
            mod: 'clutter',
            items: [
                'clutter:copper_pressure_plate',
                'clutter:exposed_copper_pressure_plate',
                'clutter:weathered_copper_pressure_plate',
                'clutter:oxidized_copper_pressure_plate'
            ]
        },
        {
            folder: 'clutter',
            mod: 'clutter',
            items: [
                'clutter:copper_soul_lantern',
                'clutter:exposed_copper_soul_lantern',
                'clutter:weathered_copper_soul_lantern',
                'clutter:oxidized_copper_soul_lantern'
            ]
        },
        {
            folder: 'clutter',
            mod: 'clutter',
            items: [
                'clutter:copper_trapdoor',
                'clutter:exposed_copper_trapdoor',
                'clutter:weathered_copper_trapdoor',
                'clutter:oxidized_copper_trapdoor'
            ]
        },
        {
            folder: 'clutter',
            mod: 'clutter',
            items: [
                'clutter:large_copper_chain',
                'clutter:exposed_large_copper_chain',
                'clutter:weathered_large_copper_chain',
                'clutter:oxidized_large_copper_chain'
            ]
        },
        {
            folder: 'clutter',
            mod: 'clutter',
            items: [
                'clutter:large_copper_chandelier',
                'clutter:exposed_large_copper_chandelier',
                'clutter:weathered_large_copper_chandelier',
                'clutter:oxidized_large_copper_chandelier'
            ]
        },
        {
            folder: 'clutter',
            mod: 'clutter',
            items: [
                'clutter:reinforced_copper_glass',
                'clutter:exposed_reinforced_copper_glass',
                'clutter:weathered_reinforced_copper_glass',
                'clutter:oxidized_reinforced_copper_glass'
            ]
        },
        {
            folder: 'create',
            mod: 'create',
            items: [
                'create:copper_shingle_slab',
                'create:exposed_copper_shingle_slab',
                'create:weathered_copper_shingle_slab',
                'create:oxidized_copper_shingle_slab'
            ]
        },
        {
            folder: 'create',
            mod: 'create',
            items: [
                'create:copper_shingle_stairs',
                'create:exposed_copper_shingle_stairs',
                'create:weathered_copper_shingle_stairs',
                'create:oxidized_copper_shingle_stairs'
            ]
        },
        {
            folder: 'create',
            mod: 'create',
            items: [
                'create:copper_shingles',
                'create:exposed_copper_shingles',
                'create:weathered_copper_shingles',
                'create:oxidized_copper_shingles'
            ]
        },
        {
            folder: 'create',
            mod: 'create',
            items: [
                'create:copper_tile_slab',
                'create:exposed_copper_tile_slab',
                'create:weathered_copper_tile_slab',
                'create:oxidized_copper_tile_slab'
            ]
        },
        {
            folder: 'create',
            mod: 'create',
            items: [
                'create:copper_tile_stairs',
                'create:exposed_copper_tile_stairs',
                'create:weathered_copper_tile_stairs',
                'create:oxidized_copper_tile_stairs'
            ]
        },
        {
            folder: 'create',
            mod: 'create',
            items: [
                'create:copper_tiles',
                'create:exposed_copper_tiles',
                'create:weathered_copper_tiles',
                'create:oxidized_copper_tiles'
            ]
        },
        {
            folder: 'friendsandfoes',
            mod: 'friendsandfoes',
            items: [
                'friendsandfoes:copper_button',
                'friendsandfoes:exposed_copper_button',
                'friendsandfoes:weathered_copper_button',
                'friendsandfoes:oxidized_copper_button'
            ]
        },
        {
            folder: 'minecraft',
            items: [
                'minecraft:copper_block',
                'minecraft:exposed_copper',
                'minecraft:weathered_copper',
                'minecraft:oxidized_copper'
            ]
        },
        {
            folder: 'minecraft',
            items: [
                'minecraft:cut_copper_slab',
                'minecraft:exposed_cut_copper_slab',
                'minecraft:weathered_cut_copper_slab',
                'minecraft:oxidized_cut_copper_slab'
            ]
        },
        {
            folder: 'minecraft',
            items: [
                'minecraft:cut_copper_stairs',
                'minecraft:exposed_cut_copper_stairs',
                'minecraft:weathered_cut_copper_stairs',
                'minecraft:oxidized_cut_copper_stairs'
            ]
        },
        {
            folder: 'minecraft',
            items: [
                'minecraft:cut_copper',
                'minecraft:exposed_cut_copper',
                'minecraft:weathered_cut_copper',
                'minecraft:oxidized_cut_copper'
            ]
        },
        {
            folder: 'simple_copper_pipes',
            mod: 'simple_copper_pipes',
            items: [
                'simple_copper_pipes:copper_fitting',
                'simple_copper_pipes:exposed_copper_fitting',
                'simple_copper_pipes:weathered_copper_fitting',
                'simple_copper_pipes:oxidized_copper_fitting'
            ]
        },
        {
            folder: 'simple_copper_pipes',
            mod: 'simple_copper_pipes',
            items: [
                'simple_copper_pipes:copper_pipe',
                'simple_copper_pipes:exposed_copper_pipe',
                'simple_copper_pipes:weathered_copper_pipe',
                'simple_copper_pipes:oxidized_copper_pipe'
            ]
        },
        {
            folder: 'twigs',
            mod: 'twigs',
            items: [
                'twigs:copper_pillar',
                'twigs:exposed_copper_pillar',
                'twigs:weathered_copper_pillar',
                'twigs:oxidized_copper_pillar'
            ]
        }
    ];

    const oxidationStages = [
        'exposed',
        'weathered',
        'oxidized'
    ];

    oxidationChains.forEach(chain => {
        if (chain.mod && !Platform.isLoaded(chain.mod)) {
            return;
        }

        oxidationStages.forEach((stage, index) => {
            const input = chain.items[index];
            const output = chain.items[index + 1];
            const inputPath = input.split(':')[1];

            event.custom({
                type: 'create:filling',
                ingredients: [
                    {
                        item: input
                    },
                    {
                        type: 'neoforge:single',
                        amount: 250,
                        fluid: 'minecraft:water'
                    }
                ],
                results: [
                    {
                        id: output
                    }
                ]
            }).id(`shenanigans:filling/oxidation/${chain.folder}/${inputPath}_to_${stage}`);
        });
    });
});
