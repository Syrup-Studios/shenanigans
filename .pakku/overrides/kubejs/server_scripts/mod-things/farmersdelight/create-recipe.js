ServerEvents.recipes(event => {

    //hot cocoa recipe
    event.custom({
        type: 'create:filling',
        ingredients: [
            { item: 'minecraft:glass_bottle' },
            {
                fluid: 'create:chocolate',
                amount: 40500,
                nbt: {}
            }
        ],
        results: [
            { item: 'farmersdelight:hot_cocoa'}
        ]
    })

    //apple cider fluid recipe
    event.custom({
        type: 'create:mixing',
        ingredients: [
            { item: 'minecraft:sugar' },
            { item: 'minecraft:apple' },
            { item: 'minecraft:apple' },
            {
                fluid: 'minecraft:water',
                amount: 40500,
                nbt: {}
            }
        ],
        results: [
            {
                fluid: 'kubejs:apple_cider',
                amount: 81000
            }
        ]
    })

    //apple cider consumable recipe
    event.custom({
        type: 'create:filling',
        ingredients: [
            { item: 'minecraft:glass_bottle' },
            {
                fluid: 'kubejs:apple_cider',
                amount: 27000,
                nbt: {}
            }
        ],
        results: [
            { item: 'farmersdelight:apple_cider'}
        ]
    })

    //melon juice fluid recipe
    event.custom({
        type: 'create:mixing',
        ingredients: [
            { item: 'minecraft:sugar' },
            { item: 'minecraft:melon_slice' },
            { item: 'minecraft:melon_slice' },
            { item: 'minecraft:melon_slice' },
            { item: 'minecraft:melon_slice' },
            {
                fluid: 'minecraft:water',
                amount: 40500,
                nbt: {}
            }
        ],
        results: [
            {
                fluid: 'kubejs:melon_juice',
                amount: 81000
            }
        ]
    })

    //melon juice consumable recipe
    event.custom({
        type: 'create:filling',
        ingredients: [
            { item: 'minecraft:glass_bottle' },
            {
                fluid: 'kubejs:melon_juice',
                amount: 27000,
                nbt: {}
            }
        ],
        results: [
            { item: 'farmersdelight:melon_juice'}
        ]
    })
})
