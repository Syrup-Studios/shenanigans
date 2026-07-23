ServerEvents.recipes(event => {
    event.shapeless(
        '2x minecraft:string',
        ['#minecraft:wool']
    ).id('shenanigans:crafting/wool_to_string');

    event.remove({
        output: 'minecraft:string',
        type: 'create:milling'
    });

    event.recipes.create.milling(
        '2x minecraft:string',
        '#minecraft:wool'
    )
        .processingTime(200)
        .id('shenanigans:create/milling/wool_to_string');

    event.recipes.create.crushing(
        [
            '4x minecraft:string',
            CreateItem.of('minecraft:string', 0.5)
        ],
        '#minecraft:wool'
    )
        .processingTime(100)
        .id('shenanigans:create/crushing/wool_to_string');
});
