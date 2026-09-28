ServerEvents.recipes(event => {
    const fluidIngredient = (fluid, amount) => ({
        type: 'neoforge:single',
        amount: amount,
        fluid: fluid
    });

    const soups = [
        ['baked_cod_stew', 'farmersdelight:baked_cod_stew', [
            { tag: 'c:foods/raw_cod' }, { tag: 'c:crops/potato' },
            { tag: 'c:eggs' }, { tag: 'c:crops/tomato' }
        ]],
        ['beef_stew', 'farmersdelight:beef_stew', [
            { tag: 'c:foods/raw_beef' }, { tag: 'c:crops/carrot' },
            { tag: 'c:crops/potato' }
        ]],
        ['beetroot_soup', 'minecraft:beetroot_soup', [
            { tag: 'c:crops/beetroot' }, { tag: 'c:crops/beetroot' },
            { tag: 'c:crops/beetroot' }
        ]],
        ['bone_broth', 'farmersdelight:bone_broth', [
            { tag: 'c:bones' },
            { type: 'neoforge:compound', children: [
                { item: 'minecraft:glow_berries' }, { tag: 'c:mushrooms' },
                { item: 'minecraft:hanging_roots' }, { item: 'minecraft:glow_lichen' }
            ] }
        ]],
        ['chicken_soup', 'farmersdelight:chicken_soup', [
            { tag: 'c:foods/raw_chicken' }, { tag: 'c:crops/carrot' },
            { tag: 'c:foods/leafy_green' },
            { type: 'neoforge:difference', base: { tag: 'c:foods/vegetable' },
                subtracted: { item: 'minecraft:melon_slice' } }
        ]],
        ['fish_stew', 'farmersdelight:fish_stew', [
            { tag: 'c:foods/safe_raw_fish' }, { item: 'farmersdelight:tomato_sauce' },
            { tag: 'c:crops/onion' }
        ]],
        ['mushroom_stew', 'minecraft:mushroom_stew', [
            { item: 'minecraft:brown_mushroom' }, { item: 'minecraft:red_mushroom' }
        ]],
        ['noodle_soup', 'farmersdelight:noodle_soup', [
            { tag: 'c:foods/pasta' }, { tag: 'c:eggs' },
            { item: 'minecraft:dried_kelp' }, { tag: 'c:foods/raw_pork' }
        ]],
        ['onion_soup', 'farmersdelight:onion_soup', [
            { tag: 'c:crops/onion' }, { tag: 'c:crops/onion' },
            { tag: 'c:foods/bread' }, { tag: 'c:drinks/milk' }
        ]],
        ['pumpkin_soup', 'farmersdelight:pumpkin_soup', [
            { item: 'farmersdelight:pumpkin_slice' }, { tag: 'c:foods/leafy_green' },
            { tag: 'c:foods/raw_pork' }, { tag: 'c:drinks/milk' }
        ]],
        ['rabbit_stew', 'minecraft:rabbit_stew', [
            { tag: 'c:crops/potato' }, { item: 'minecraft:rabbit' },
            { tag: 'c:crops/carrot' },
            { type: 'neoforge:compound', children: [
                { item: 'minecraft:brown_mushroom' }, { item: 'minecraft:red_mushroom' }
            ] }
        ]],
        ['vegetable_soup', 'farmersdelight:vegetable_soup', [
            { tag: 'c:crops/carrot' }, { tag: 'c:crops/potato' },
            { tag: 'c:crops/beetroot' }, { tag: 'c:foods/leafy_green' }
        ]],
        ['guardian_soup', 'oceansdelight:guardian_soup', [
            { item: 'oceansdelight:guardian' }, { tag: 'c:crops/onion' },
            { tag: 'c:eggs' }, { tag: 'c:eggs' },
            { tag: 'c:crops/tomato' }, { tag: 'c:crops/tomato' }
        ]]
    ];

    soups.forEach(([fluid, item, ingredients]) => {
        event.custom({
            type: 'create:mixing',
            heat_requirement: 'heated',
            ingredients: ingredients,
            results: [{ id: `shenanigans:${fluid}`, amount: 250 }]
        }).id(`shenanigans:create/mixing/soups/${fluid}`);

        event.custom({
            type: 'create:filling',
            ingredients: [
                { item: 'minecraft:bowl' },
                fluidIngredient(`shenanigans:${fluid}`, 250)
            ],
            results: [{ id: item }]
        }).id(`shenanigans:create/filling/soups/${fluid}`);
    });
});
