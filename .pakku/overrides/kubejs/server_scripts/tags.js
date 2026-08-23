//priority: 0

const farmAndCharmSeedDrillItems = [
    'farm_and_charm:kernels',
    'farm_and_charm:oat_seeds',
    'farm_and_charm:barley_seeds',
    'farm_and_charm:lettuce_seeds',
    'farm_and_charm:tomato_seeds',
    'farm_and_charm:strawberry_seeds',
    'farm_and_charm:onion'
];

const regionsUnexploredAstikorBlocks = [
    'regions_unexplored:prismoss_sprout',
    'regions_unexplored:redstone_bud',
    'regions_unexplored:ashen_grass',
    'regions_unexplored:bladed_grass',
    'regions_unexplored:dead_steppe_shrub',
    'regions_unexplored:frozen_grass',
    'regions_unexplored:sandy_grass',
    'regions_unexplored:small_desert_shrub',
    'regions_unexplored:steppe_grass',
    'regions_unexplored:steppe_shrub',
    'regions_unexplored:bladed_tall_grass',
    'regions_unexplored:sandy_tall_grass',
    'regions_unexplored:steppe_tall_grass',
    'regions_unexplored:windswept_grass',
    'regions_unexplored:clover',
    'regions_unexplored:alpha_dandelion',
    'regions_unexplored:alpha_rose',
    'regions_unexplored:aster',
    'regions_unexplored:bleeding_heart',
    'regions_unexplored:daisy',
    'regions_unexplored:felicia_daisy',
    'regions_unexplored:hyssop',
    'regions_unexplored:mallow',
    'regions_unexplored:poppy_bush',
    'regions_unexplored:salmon_poppy_bush',
    'regions_unexplored:tsubaki',
    'regions_unexplored:waratah',
    'regions_unexplored:white_trillium',
    'regions_unexplored:blue_lupine',
    'regions_unexplored:pink_lupine',
    'regions_unexplored:purple_lupine',
    'regions_unexplored:red_lupine',
    'regions_unexplored:yellow_lupine',
    'regions_unexplored:orange_coneflower',
    'regions_unexplored:purple_coneflower',
    'regions_unexplored:hyacinth_flowers',
    'regions_unexplored:blue_magnolia_flowers',
    'regions_unexplored:pink_magnolia_flowers',
    'regions_unexplored:white_magnolia_flowers',
    'regions_unexplored:tassel',
    'regions_unexplored:white_snowbelle',
    'regions_unexplored:light_gray_snowbelle',
    'regions_unexplored:gray_snowbelle',
    'regions_unexplored:black_snowbelle',
    'regions_unexplored:brown_snowbelle',
    'regions_unexplored:red_snowbelle',
    'regions_unexplored:orange_snowbelle',
    'regions_unexplored:yellow_snowbelle',
    'regions_unexplored:lime_snowbelle',
    'regions_unexplored:green_snowbelle',
    'regions_unexplored:light_blue_snowbelle',
    'regions_unexplored:cyan_snowbelle',
    'regions_unexplored:blue_snowbelle',
    'regions_unexplored:purple_snowbelle',
    'regions_unexplored:magenta_snowbelle',
    'regions_unexplored:pink_snowbelle',
    'regions_unexplored:maple_leaf_litter',
    'regions_unexplored:red_maple_leaf_litter',
    'regions_unexplored:orange_maple_leaf_litter',
    'regions_unexplored:enchanted_birch_leaf_litter',
    'regions_unexplored:silver_birch_leaf_litter'
];

ServerEvents.tags('item', event => {
    event.remove('c:flour', [
        'bountifulfares:flour',
        'farm_and_charm:flour'
    ]);
    event.add('c:flour', 'create:wheat_flour');

    event.add('astikorcartsredux:seed_drill_plantable', farmAndCharmSeedDrillItems);

    event.add('spelunkery:copper_ores', [
        'meadow:alpine_copper_ore',
        'natures_spirit:chert_copper_ore'
    ]);

    event.add('spelunkery:diamond_ores', [
        'meadow:alpine_diamond_ore',
        'natures_spirit:chert_diamond_ore'
    ]);

    event.add('spelunkery:emerald_ores', [
        'meadow:alpine_emerald_ore',
        'natures_spirit:chert_emerald_ore'
    ]);

    event.add('spelunkery:gold_ores', [
        'meadow:alpine_gold_ore',
        'natures_spirit:chert_gold_ore'
    ]);

    event.add('spelunkery:iron_ores', [
        'meadow:alpine_iron_ore',
        'natures_spirit:chert_iron_ore'
    ]);

    event.add('spelunkery:lapis_ores', [
        'meadow:alpine_lapis_ore',
        'natures_spirit:chert_lapis_ore'
    ]);

    event.add('spelunkery:redstone_ores', [
        'meadow:alpine_redstone_ore',
        'natures_spirit:chert_redstone_ore'
    ]);

    event.add('c:stripped_logs', [
        'bountifulfares:stripped_walnut_log',
        'bountifulfares:stripped_hoary_log'
    ]);


    event.add('c:foods/raw_meat', [
        'minecraft:beef',
        'minecraft:porkchop',
        'minecraft:mutton',
        'minecraft:chicken',
        'minecraft:rabbit',
        'farmersdelight:chicken_cuts',
        'farmersdelight:bacon',
        'farmersdelight:mutton_chops',
        'meadow:raw_buffalo_meat'
    ]);

    event.add('c:foods/raw_fish', [
        'minecraft:cod',
        'minecraft:salmon',
        'farmersdelight:cod_slice',
        'farmersdelight:salmon_slice'
    ]);

    event.add('c:foods', [
        'oceansdelight:cooked_guardian_tail',
        'wildernature:cooked_pelican_meat',
        'oceansdelight:cooked_elder_guardian_slice',
        'oceansdelight:cooked_stuffed_cod',
        'wildernature:cooked_bison_meat',
        'wildernature:cooked_venison',
        'wildernature:cooked_cassowary_meat',
        'wildernature:cooked_turkey_meat',
        'beachparty:cooked_mussel_meat',
        'farmersdelight:cooked_salmon_slice',
        'farmersdelight:cooked_cod_slice',
        'naturalist:bass',
        'naturalist:catfish',
        'naturalist:duck'
    ]);
});


ServerEvents.tags('block', event => {
    event.add('create:wrench_pickup', [
        '#c:chests',
        '#c:barrels',
        '#storagedrawers:drawers',
        '#storagedrawers:trim',
        'spelunkery:compression_blast_miner',
        'spelunkery:wooden_channel',
        'spelunkery:stone_channel',
        'spelunkery:wooden_sluice',
        'spelunkery:stone_sluice',
        'sophisticatedstorage:controller',
        'sophisticatedstorage:storage_link',
        'sophisticatedstorage:storage_io',
        'sophisticatedstorage:storage_input',
        'sophisticatedstorage:storage_output',
        'sophisticatedstorage:decoration_table',
        'storagedrawers:controller',
        'storagedrawers:controller_slave',
        'storagedrawers:compacting_drawers_2',
        'storagedrawers:compacting_drawers_3',
        'storagedrawers:compacting_half_drawers_2',
        'storagedrawers:compacting_half_drawers_3',
        'storagedrawers:framing_table',
        'toms_storage:ts.inventory_connector',
        'toms_storage:ts.storage_terminal',
        'toms_storage:ts.trim',
        'toms_storage:ts.open_crate',
        'toms_storage:ts.inventory_cable',
        'toms_storage:ts.inventory_cable_framed',
        'toms_storage:ts.inventory_cable_connector',
        'toms_storage:ts.inventory_cable_connector_filtered',
        'toms_storage:ts.inventory_cable_connector_framed',
        'toms_storage:ts.inventory_proxy',
        'toms_storage:ts.crafting_terminal',
        'toms_storage:ts.inventory_hopper_basic',
        'toms_storage:ts.level_emitter'
    ]);

    event.add('minecraft:needs_iron_tool', [
        'meadow:alpine_diamond_ore',
        'meadow:alpine_emerald_ore',
        'meadow:alpine_gold_ore',
        'meadow:alpine_redstone_ore',
        'natures_spirit:chert_emerald_ore',
        'natures_spirit:chert_gold_ore',
        'natures_spirit:chert_redstone_ore'
    ]);

    event.add('minecraft:needs_stone_tool', [
        'meadow:alpine_iron_ore',
        'meadow:alpine_lapis_ore',
        'natures_spirit:chert_iron_ore',
        'natures_spirit:chert_lapis_ore'
    ]);

    event.remove('minecraft:needs_stone_tool', [
        'minecraft:copper_ore',
        'natures_spirit:chert_copper_ore',
        'minecraft:deepslate_copper_ore',
        'meadow:alpine_copper_ore',
        'spelunkery:andesite_copper_ore',
        'spelunkery:diorite_copper_ore',
        'spelunkery:granite_copper_ore',
        'spelunkery:tuff_copper_ore',
        'spelunkery:andesite_coal_ore',
        'spelunkery:diorite_coal_ore',
        'spelunkery:granite_coal_ore',
        'spelunkery:tuff_coal_ore'
    ]);

    event.add('astikorcartsredux:plow_breakable/hoe', regionsUnexploredAstikorBlocks);
    event.add('astikorcartsredux:plow_breakable/shovel', regionsUnexploredAstikorBlocks);
    event.add('minecraft:crops', regionsUnexploredAstikorBlocks);
});

ServerEvents.tags('worldgen/biome', event => {
    const wolfBiomes = {
        ashen: [
            'regions_unexplored:cold_boreal_taiga',
            'regions_unexplored:frozen_pine_taiga'
        ],
        black: [
            'regions_unexplored:blackwood_taiga',
            'regions_unexplored:mountains',
            'regions_unexplored:old_growth_bayou',
            'regions_unexplored:pine_slopes',
            'regions_unexplored:pine_taiga'
        ],
        chestnut: [
            'regions_unexplored:blackwood_taiga',
            'regions_unexplored:boreal_taiga',
            'regions_unexplored:old_growth_bayou',
            'regions_unexplored:towering_cliffs'
        ],
        rusty: [
            'regions_unexplored:bamboo_forest',
            'regions_unexplored:rainforest',
            'regions_unexplored:sparse_rainforest',
            'regions_unexplored:tropics'
        ],
        snowy: [
            'regions_unexplored:frozen_pine_taiga',
            'regions_unexplored:frozen_tundra',
            'regions_unexplored:icy_heights',
            'regions_unexplored:spires'
        ],
        spotted: [
            'regions_unexplored:baobab_savanna',
            'regions_unexplored:steppe',
            'regions_unexplored:dry_bushland'
        ],
        striped: [
            'regions_unexplored:arid_mountains',
            'regions_unexplored:dry_bushland',
            'regions_unexplored:joshua_desert',
            'regions_unexplored:outback'
        ],
        woods: [
            'regions_unexplored:rainforest',
            'regions_unexplored:deciduous_forest',
            'regions_unexplored:magnolia_woodland',
            'regions_unexplored:redwoods',
            'regions_unexplored:sparse_redwoods'
        ]
    };

    Object.entries(wolfBiomes).forEach(([variant, biomes]) => {
        event.add(`minecraft:has_wolf/${variant}`, biomes);
    });
});
