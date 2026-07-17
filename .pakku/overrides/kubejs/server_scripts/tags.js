//priority: 0

ServerEvents.tags('item', event => {
    event.add('c:stripped_logs', [
        'bountifulfares:stripped_walnut_log',
        'bountifulfares:stripped_hoary_log'
    ]);


    event.add('c:foods/raw', [
        'minecraft:beef',
        'minecraft:porkchop',
        'minecraft:mutton',
        'minecraft:chicken',
        'minecraft:rabbit',
        'minecraft:cod',
        'minecraft:salmon',
        'duckling:raw_duck',
        'clutter:raw_chorus_echofin', 
        'clutter:raw_levitating_echofin',
        'clutter:raw_venison',
        'clutter:raw_venison_ribs',
        'farmersdelight:chicken_cuts',
        'farmersdelight:bacon',
        'farmersdelight:cod_slice',
        'farmersdelight:salmon_slice',
        'farmersdelight:mutton_chops',
        'fetzisasiandeco:koi_fish',
        'meadow:raw_buffalo_meat'
    ]);


    event.add('c:foods', [
        'fetzisasiandeco:cooked_koi_fish',
        'oceansdelight:cooked_guardian_tail',
        'wildernature:cooked_pelican_meat',
        'oceansdelight:cooked_elder_guardian_slice',
        'oceansdelight:cooked_stuffed_cod',
        'wildernature:cooked_bison_meat',
        'wildernature:cooked_venison',
        'wildernature:cooked_cassowary_meat',
        'wildernature:cooked_turkey_meat',
        'beachparty:cooked_mussel_meat',
        'duckling:cooked_duck',
        'farmersdelight:cooked_salmon_slice',
        'farmersdelight:cooked_cod_slice',
        'clutter:cooked_venison_ribs',
        'clutter:cooked_chorus_echofin',
        'clutter:cooked_levitating_echofin',
        'clutter:cooked_venison',
        'spawn:cooked_tuna_chunk',
        'naturalist:bass',
        'naturalist:catfish',
        'naturalist:duck'
    ]);

    event.add('c:raw_ores', [
        'clutter:raw_silver'
    ]);

    event.add('c:raw_materials', [
        'clutter:raw_silver'
    ]);

    event.add('c:raw_silver_ores', [
        'clutter:raw_silver'
    ]);

    event.remove('c:raw_silver_ores', [
        'clutter:silver_ore'
    ]);

    event.add('c:silver_ores', [
        'clutter:silver_ore',
        'clutter:deepslate_silver_ore'
    ]);
})


ServerEvents.tags('block', event => {

    event.remove('minecraft:needs_stone_tool', [
        'minecraft:copper_ore',
        'natures_spirit:chert_copper_ore',
        'minecraft:deepslate_copper_ore',
        'meadow:alpine_copper_ore',
        'spelunkery:diorite_copper_ore',
        'spelunkery:granite_copper_ore',
        'spelunkery:tuff_copper_ore',
        'deeperdarker:sculk_stone_copper_ore',
        'deeperdarker:gloomslate_copper_ore',
        'spelunkery:andesite_coal_ore',
        'spelunkery:diorite_coal_ore',
        'spelunkery:granite_coal_ore',
        'spelunkery:tuff_coal_ore'
    ]);

    event.add('create:non_movable', /^sophisticatedstorage:.*/)
})
