//priority: 0

ServerEvents.tags('item', event => {
    event.remove('c:flour', [
        'bountifulfares:flour',
        'farm_and_charm:flour'
    ]);
    event.add('c:flour', 'create:wheat_flour');

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
});
