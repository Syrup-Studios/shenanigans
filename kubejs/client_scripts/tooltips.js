ItemEvents.tooltip(event => {

    const raw_ores = ["minecraft:raw_copper", "minecraft:raw_gold", "minecraft:raw_iron", 'spelunkery:raw_magnetite', 'clutter:raw_silver', 'create:raw_zinc'];

    event.addAdvanced(raw_ores, (item, advanced, text) => {
        if (!event.shift) {
            text.add(1, Component.translate('tooltip.shenanigans.raw_ores.slow_smelt').gray());
            text.add(2, Component.translate('tooltip.shenanigans.hold_shift').gray());
        } else {
            text.add(1, Component.translate('tooltip.shenanigans.raw_ores.slow_smelt').gray());
            text.add(2, Component.translate('tooltip.shenanigans.raw_ores.blast').gray());
        }
    });

    const item_frames = ['minecraft:glow_item_frame', 'minecraft:item_frame']

        event.addAdvanced(item_frames, (item, advanced, text) => {
            text.add(1, Component.translate('tooltip.shenanigans.item_frames.1').gray());
            text.add(2, Component.translate('tooltip.shenanigans.item_frames.2').gray());
    });

    const clocks = ['supplementaries:clock_block', 'minecraft:clock', 'create:cuckoo_clock', 'create:clockwork_bearing', 'luphieclutteredmod:luphie_darkwood_clock']

        event.addAdvanced(clocks, (item, advanced, text) => {
            text.add(1, Component.translate('tooltip.shenanigans.clocks.day_cycle').gray());
    });

        event.addAdvanced('#c:foods/raw', (item, advanced, text) => {
            text.add(1, Component.translate('tooltip.shenanigans.foods.raw').gray());
    });

        event.addAdvanced('auroraslanterns:amethyst_lantern', (item, advanced, text) => {
            text.add(1, Component.translate('tooltip.shenanigans.auroraslanters.amethyst_lantern.range').gray());
    });

        event.addAdvanced('arcanelanterns:life_lantern', (item, advanced, text) => {
            text.add(1, Component.translate('tooltip.shenanigans.arcanelanterns.life_lantern').gray());
    });

        event.addAdvanced('arcanelanterns:feral_lantern', (item, advanced, text) => {
            text.add(1, Component.translate('tooltip.shenanigans.arcanelanterns.feral_lantern').gray());
    });

        event.addAdvanced('arcanelanterns:love_lantern', (item, advanced, text) => {
            text.add(1, Component.translate('tooltip.shenanigans.arcanelanterns.love_lantern').gray());
    });

        event.addAdvanced('arcanelanterns:wailing_lantern', (item, advanced, text) => {
            text.add(1, Component.translate('tooltip.shenanigans.arcanelanterns.wailing_lantern').gray());
    });

        event.addAdvanced('arcanelanterns:boreal_lantern', (item, advanced, text) => {
            text.add(1, Component.translate('tooltip.shenanigans.arcanelanterns.boreal_lantern').gray());
    });

        event.addAdvanced('arcanelanterns:brilliant_lantern', (item, advanced, text) => {
            text.add(1, Component.translate('tooltip.shenanigans.arcanelanterns.brilliant_lantern').gray());
    });

        event.addAdvanced('arcanelanterns:warding_lantern', (item, advanced, text) => {
            text.add(1, Component.translate('tooltip.shenanigans.arcanelanterns.warding_lantern').gray());
    });

        event.addAdvanced('arcanelanterns:containing_lantern', (item, advanced, text) => {
            text.add(1, Component.translate('tooltip.shenanigans.arcanelanterns.containing_lantern').gray());
    });

        event.addAdvanced('arcanelanterns:withering_lantern', (item, advanced, text) => {
            text.add(1, Component.translate('tooltip.shenanigans.arcanelanterns.withering_lantern').gray());
    });

        event.addAdvanced('arcanelanterns:cloud_lantern', (item, advanced, text) => {
            text.add(1, Component.translate('tooltip.shenanigans.arcanelanterns.cloud_lantern').gray());
    });
})