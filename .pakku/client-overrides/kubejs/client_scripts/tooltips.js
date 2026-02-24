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
})