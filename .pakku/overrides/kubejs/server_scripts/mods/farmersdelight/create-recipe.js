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
})