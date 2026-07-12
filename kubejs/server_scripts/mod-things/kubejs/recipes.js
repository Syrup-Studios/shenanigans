ServerEvents.recipes(event => {
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
})