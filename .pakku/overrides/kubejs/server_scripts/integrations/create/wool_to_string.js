ServerEvents.recipes(event => {
    event.shapeless(
        '2x minecraft:string',
        ['#minecraft:wool']
    ).id('shenanigans:crafting/wool_to_string');

    event.remove({
        output: 'minecraft:string',
        type: 'create:milling'
    });

    event.custom({
        type: 'create:milling',
        ingredients: [
            {
                tag: 'minecraft:wool'
            }
        ],
        processing_time: 200,
        results: [
            {
                id: 'minecraft:string',
                count: 2
            }
        ]
    }).id('shenanigans:create/milling/wool_to_string');

    event.custom({
        type: 'create:crushing',
        ingredients: [
            {
                tag: 'minecraft:wool'
            }
        ],
        processing_time: 100,
        results: [
            {
                id: 'minecraft:string',
                count: 4
            },
            {
                id: 'minecraft:string',
                chance: 0.5
            }
        ]
    }).id('shenanigans:create/crushing/wool_to_string');
});
