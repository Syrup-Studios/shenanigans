ServerEvents.recipes(event => {
    event.recipes.create.filling(
        'farmersdelight:hot_cocoa',
        [
            'minecraft:glass_bottle',
            Fluid.of('create:chocolate', 40500)
        ]
    ).id('shenanigans:create/filling/hot_cocoa');

    event.recipes.create.mixing(
        Fluid.of('kubejs:apple_cider', 81000),
        [
            'minecraft:sugar',
            'minecraft:apple',
            'minecraft:apple',
            Fluid.of('minecraft:water', 40500)
        ]
    ).id('shenanigans:create/mixing/apple_cider');

    event.recipes.create.filling(
        'farmersdelight:apple_cider',
        [
            'minecraft:glass_bottle',
            Fluid.of('kubejs:apple_cider', 27000)
        ]
    ).id('shenanigans:create/filling/apple_cider');

    event.recipes.create.mixing(
        Fluid.of('kubejs:melon_juice', 81000),
        [
            'minecraft:sugar',
            'minecraft:melon_slice',
            'minecraft:melon_slice',
            'minecraft:melon_slice',
            'minecraft:melon_slice',
            Fluid.of('minecraft:water', 40500)
        ]
    ).id('shenanigans:create/mixing/melon_juice');

    event.recipes.create.filling(
        'farmersdelight:melon_juice',
        [
            'minecraft:glass_bottle',
            Fluid.of('kubejs:melon_juice', 27000)
        ]
    ).id('shenanigans:create/filling/melon_juice');
});
