ServerEvents.recipes(event => {
    const fluidIngredient = (fluid, amount) => ({
        type: 'neoforge:single',
        amount: amount,
        fluid: fluid
    });

    event.custom({
        type: 'create:filling',
        ingredients: [
            {
                item: 'minecraft:glass_bottle'
            },
            fluidIngredient('create:chocolate', 250)
        ],
        results: [
            {
                id: 'farmersdelight:hot_cocoa'
            }
        ]
    }).id('shenanigans:create/filling/hot_cocoa');

    event.custom({
        type: 'create:mixing',
        ingredients: [
            {
                item: 'minecraft:sugar'
            },
            {
                item: 'minecraft:apple'
            },
            {
                item: 'minecraft:apple'
            },
            fluidIngredient('minecraft:water', 500)
        ],
        results: [
            {
                id: 'kubejs:apple_cider',
                amount: 750
            }
        ]
    }).id('shenanigans:create/mixing/apple_cider');

    event.custom({
        type: 'create:filling',
        ingredients: [
            {
                item: 'minecraft:glass_bottle'
            },
            fluidIngredient('kubejs:apple_cider', 250)
        ],
        results: [
            {
                id: 'farmersdelight:apple_cider'
            }
        ]
    }).id('shenanigans:create/filling/apple_cider');

    event.custom({
        type: 'create:mixing',
        ingredients: [
            {
                item: 'minecraft:sugar'
            },
            {
                item: 'minecraft:melon_slice'
            },
            {
                item: 'minecraft:melon_slice'
            },
            {
                item: 'minecraft:melon_slice'
            },
            {
                item: 'minecraft:melon_slice'
            },
            fluidIngredient('minecraft:water', 500)
        ],
        results: [
            {
                id: 'kubejs:melon_juice',
                amount: 750
            }
        ]
    }).id('shenanigans:create/mixing/melon_juice');

    event.custom({
        type: 'create:filling',
        ingredients: [
            {
                item: 'minecraft:glass_bottle'
            },
            fluidIngredient('kubejs:melon_juice', 250)
        ],
        results: [
            {
                id: 'farmersdelight:melon_juice'
            }
        ]
    }).id('shenanigans:create/filling/melon_juice');
});
