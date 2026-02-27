ItemEvents.tooltip(event => {

    const raw_ores = ["minecraft:raw_copper", "minecraft:raw_gold", "minecraft:raw_iron", 'spelunkery:raw_magnetite', 'clutter:raw_silver', 'create:raw_zinc'];

    event.addAdvanced(raw_ores, (item, advanced, text) => {
        if (!event.shift) {
            text.add(1, Text.gray('Smelts slower in a normal furnace.'));
            text.add(2, Text.gray('Hold Shift for more info.'));
        } else {
            text.add(1, Text.gray('Smelts slower in a normal furnace.'));
            text.add(2, Text.gray('Use Blast Furnace for faster smelting.'));
        }
    });

    const item_frames = ['minecraft:glow_item_frame', 'minecraft:item_frame']

        event.addAdvanced(item_frames, (item, advanced, text) => {
            text.add(1, Text.gray('Place an item and'));
            text.add(2, Text.gray('Crouch + Right Click to toggle invisible item frame.'));
    });

    const clocks = ['supplementaries:clock_block', 'minecraft:clock', 'create:cuckoo_clock', 'create:clockwork_bearing', 'luphieclutteredmod:luphie_darkwood_clock']

        event.addAdvanced(clocks, (item, advanced, text) => {
            text.add(1, Text.gray('The days are 40 minutes and the nights are 20 minutes!'));
    });
})