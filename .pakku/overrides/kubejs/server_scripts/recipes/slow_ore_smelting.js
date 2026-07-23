ServerEvents.recipes(event => {
    const oreRecipes = [
        {
            metal: 'copper',
            tag: 'spelunkery:copper_ores',
            output: 'minecraft:copper_ingot',
            experience: 0.7
        },
        {
            metal: 'gold',
            tag: 'spelunkery:gold_ores',
            output: 'minecraft:gold_ingot',
            experience: 1.0
        },
        {
            metal: 'iron',
            tag: 'spelunkery:iron_ores',
            output: 'minecraft:iron_ingot',
            experience: 0.7
        }
    ];

    const duplicateOreRecipeIds = [
        'minecraft:copper_ingot_from_smelting_copper_ore',
        'minecraft:copper_ingot_from_smelting_deepslate_copper_ore',
        'minecraft:copper_ingot_from_blasting_copper_ore',
        'minecraft:copper_ingot_from_blasting_deepslate_copper_ore',
        'minecraft:gold_ingot_from_smelting_gold_ore',
        'minecraft:gold_ingot_from_smelting_deepslate_gold_ore',
        'minecraft:gold_ingot_from_blasting_gold_ore',
        'minecraft:gold_ingot_from_blasting_deepslate_gold_ore',
        'minecraft:iron_ingot_from_smelting_iron_ore',
        'minecraft:iron_ingot_from_smelting_deepslate_iron_ore',
        'minecraft:iron_ingot_from_blasting_iron_ore',
        'minecraft:iron_ingot_from_blasting_deepslate_iron_ore',
        'meadow:copper_ingot_from_smelting_alpine_copper_ore',
        'meadow:copper_ingot_from_blasting_alpine_copper_ore',
        'meadow:gold_ingot_from_smelting_alpine_gold_ore',
        'meadow:gold_ingot_from_blasting_alpine_gold_ore',
        'meadow:iron_ingot_from_smelting_alpine_iron_ore',
        'meadow:iron_ingot_from_blasting_alpine_iron_ore'
    ];

    duplicateOreRecipeIds.forEach(id => {
        event.remove({
            id: id
        });
    });

    oreRecipes.forEach(recipe => {
        const smeltingId = `spelunkery:${recipe.metal}_ore_smelting`;
        const blastingId = `spelunkery:${recipe.metal}_ore_blasting`;

        event.remove({
            id: smeltingId
        });
        event.remove({
            id: blastingId
        });

        event.smelting(recipe.output, `#${recipe.tag}`)
            .xp(recipe.experience)
            .cookingTime(1200)
            .id(smeltingId);

        event.blasting(recipe.output, `#${recipe.tag}`)
            .xp(recipe.experience)
            .cookingTime(100)
            .id(blastingId);
    });

    const slowIndividualRecipes = [
        {
            id: 'minecraft:copper_ingot_from_smelting_raw_copper',
            input: 'minecraft:raw_copper',
            output: 'minecraft:copper_ingot',
            experience: 0.7
        },
        {
            id: 'minecraft:gold_ingot_from_smelting_nether_gold_ore',
            input: 'minecraft:nether_gold_ore',
            output: 'minecraft:gold_ingot',
            experience: 1.0
        },
        {
            id: 'minecraft:gold_ingot_from_smelting_raw_gold',
            input: 'minecraft:raw_gold',
            output: 'minecraft:gold_ingot',
            experience: 1.0
        },
        {
            id: 'minecraft:iron_ingot_from_smelting_raw_iron',
            input: 'minecraft:raw_iron',
            output: 'minecraft:iron_ingot',
            experience: 0.7
        }
    ];

    slowIndividualRecipes.forEach(recipe => {
        event.remove({
            id: recipe.id
        });

        event.smelting(recipe.output, recipe.input)
            .xp(recipe.experience)
            .cookingTime(1200)
            .id(recipe.id);
    });
});
