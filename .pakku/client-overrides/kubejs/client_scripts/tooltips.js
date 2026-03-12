ItemEvents.tooltip(event => {

    const raw_ores = ["minecraft:raw_copper", "minecraft:raw_gold", "minecraft:raw_iron", 'spelunkery:raw_magnetite', 'clutter:raw_silver', 'create:raw_zinc'];

    event.addAdvanced(raw_ores, (item, advanced, text) => {
        if (!event.shift) {
            text.add(1, Component.translate('tooltip.kubejs.raw_ores.slow_smelt').gray());
            text.add(2, Component.translate('tooltip.kubejs.hold_shift').gray());
        } else {
            text.add(1, Component.translate('tooltip.kubejs.raw_ores.slow_smelt').gray());
            text.add(2, Component.translate('tooltip.kubejs.raw_ores.blast').gray());
        }
    });

    const item_frames = ['minecraft:glow_item_frame', 'minecraft:item_frame']

        event.addAdvanced(item_frames, (item, advanced, text) => {
            text.add(1, Component.translate('tooltip.kubejs.item_frames.1').gray());
            text.add(2, Component.translate('tooltip.kubejs.item_frames.2').gray());
    });

    const clocks = ['supplementaries:clock_block', 'minecraft:clock', 'create:cuckoo_clock', 'create:clockwork_bearing', 'luphieclutteredmod:luphie_darkwood_clock']

        event.addAdvanced(clocks, (item, advanced, text) => {
            text.add(1, Component.translate('tooltip.kubejs.clocks.day_cycle').gray());
    });

            event.addAdvanced('#c:foods/raw', (item, advanced, text) => {
            text.add(1, Component.translate('tooltip.kubejs.foods.raw').gray());
    });
})