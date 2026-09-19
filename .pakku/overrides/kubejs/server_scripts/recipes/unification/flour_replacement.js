ServerEvents.recipes(event => {
    const replacedFlours = [
        'bountifulfares:flour',
        'farm_and_charm:flour'
    ];

    replacedFlours.forEach(flour => {
        event.replaceOutput(
            {
                output: flour
            },
            flour,
            'create:wheat_flour'
        );

        event.replaceInput(
            {
                input: flour
            },
            flour,
            'create:wheat_flour'
        );
    });

    const customRecipeReplacements = [
        {
            id: 'bountifulfares:flour_from_maize_milling',
            recipe: {
                type: 'bountifulfares:milling',
                ingredient: {
                    item: 'bountifulfares:maize'
                },
                result: {
                    id: 'create:wheat_flour'
                },
                result_count: 2
            }
        },
        {
            id: 'bountifulfares:flour_from_wheat_milling',
            recipe: {
                type: 'bountifulfares:milling',
                ingredient: {
                    item: 'minecraft:wheat'
                },
                result: {
                    id: 'create:wheat_flour'
                },
                result_count: 2
            }
        },
        {
            id: 'farm_and_charm:mincer/flour',
            recipe: {
                type: 'farm_and_charm:mincer',
                ingredient: {
                    tag: 'farm_and_charm:wheat'
                },
                recipe_type: 'STONE',
                result: {
                    id: 'create:wheat_flour',
                    count: 4
                }
            }
        },
        {
            id: 'farm_and_charm:crafting_bowl/sweet_dough',
            recipe: {
                type: 'farm_and_charm:crafting_bowl',
                ingredients: [
                    {
                        item: 'create:wheat_flour'
                    },
                    {
                        item: 'minecraft:sugar'
                    },
                    {
                        tag: 'bakery:eggs'
                    },
                    {
                        tag: 'bakery:water_bottles'
                    }
                ],
                result: {
                    id: 'bakery:sweet_dough',
                    count: 12
                }
            }
        },
        {
            id: 'farm_and_charm:crafting_bowl/cake_dough',
            recipe: {
                type: 'farm_and_charm:crafting_bowl',
                ingredients: [
                    {
                        item: 'create:wheat_flour'
                    },
                    {
                        item: 'minecraft:sugar'
                    },
                    {
                        tag: 'bakery:eggs'
                    },
                    {
                        tag: 'bakery:milk'
                    }
                ],
                result: {
                    id: 'bakery:cake_dough',
                    count: 12
                }
            }
        }
    ];

    customRecipeReplacements.forEach(replacement => {
        event.remove({
            id: replacement.id
        });

        event.custom(replacement.recipe)
            .id(replacement.id);
    });
});
