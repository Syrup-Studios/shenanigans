ServerEvents.recipes(event => {
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
})
