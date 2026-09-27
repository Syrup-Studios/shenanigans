ItemEvents.modifyTooltips(event => {
    const add = (items, keys, requirements = {}) => event.modify(items, requirements, tooltip => {
        tooltip.insert(1, keys.map(key => Component.translate(key).gray()));
    });

    const rawOres = [
        'minecraft:raw_copper', 'minecraft:raw_gold', 'minecraft:raw_iron',
        'spelunkery:raw_magnetite', 'create:raw_zinc'
    ];

    add(rawOres, [
        'tooltip.shenanigans.raw_ores.slow_smelt',
        'tooltip.shenanigans.hold_shift'
    ], { shift: false });
    add(rawOres, [
        'tooltip.shenanigans.raw_ores.slow_smelt',
        'tooltip.shenanigans.raw_ores.blast'
    ], { shift: true });

    add(['minecraft:glow_item_frame', 'minecraft:item_frame'], [
        'tooltip.shenanigans.item_frames.1',
        'tooltip.shenanigans.item_frames.2'
    ]);

    add([
        'supplementaries:clock_block', 'minecraft:clock', 'create:cuckoo_clock',
        'create:clockwork_bearing', 'cluttered:darkwood_clock'
    ], ['tooltip.shenanigans.clocks.day_cycle']);

    add('#c:foods/raw', ['tooltip.shenanigans.foods.raw']);

    for (const [item, key] of Object.entries({
        'arcanelanterns:life_lantern': 'life_lantern',
        'arcanelanterns:feral_lantern': 'feral_lantern',
        'arcanelanterns:love_lantern': 'love_lantern',
        'arcanelanterns:wailing_lantern': 'wailing_lantern',
        'arcanelanterns:boreal_lantern': 'boreal_lantern',
        'arcanelanterns:brilliant_lantern': 'brilliant_lantern',
        'arcanelanterns:warding_lantern': 'warding_lantern',
        'arcanelanterns:containing_lantern': 'containing_lantern',
        'arcanelanterns:withering_lantern': 'withering_lantern',
        'arcanelanterns:cloud_lantern': 'cloud_lantern'
    })) {
        add(item, [`tooltip.shenanigans.arcanelanterns.${key}`]);
    }
});
