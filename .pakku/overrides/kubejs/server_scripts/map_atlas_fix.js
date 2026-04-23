ServerEvents.recipes(event => {
    event.shapeless(
        Item.of('map_atlases:atlas'),
                    [
                        'minecraft:filled_map',
                        'minecraft:book',
                        '#map_atlases:sticky_crafting_items'
                    ]
    ).modifyResult((grid, result) => {
        let mapInput = grid.find('minecraft:filled_map');
        if (mapInput && mapInput.nbt && mapInput.nbt.map != null) {
            return result.withNBT({
                maps: [mapInput.nbt.map]
            });
        }
        return result;
    });
});
