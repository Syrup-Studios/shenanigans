ServerEvents.recipes(event => {
    const smeltingRecipes = [
        {
            id: 'minecraft:copper_ingot_from_smelting_copper_ore',
            input: 'minecraft:copper_ore',
            output: 'minecraft:copper_ingot',
            experience: 0.7
        },
        {
            id: 'minecraft:copper_ingot_from_smelting_deepslate_copper_ore',
            input: 'minecraft:deepslate_copper_ore',
            output: 'minecraft:copper_ingot',
            experience: 0.7
        },
        {
            id: 'minecraft:copper_ingot_from_smelting_raw_copper',
            input: 'minecraft:raw_copper',
            output: 'minecraft:copper_ingot',
            experience: 0.7
        },
        {
            id: 'minecraft:gold_ingot_from_smelting_deepslate_gold_ore',
            input: 'minecraft:deepslate_gold_ore',
            output: 'minecraft:gold_ingot',
            experience: 1.0
        },
        {
            id: 'minecraft:gold_ingot_from_smelting_gold_ore',
            input: 'minecraft:gold_ore',
            output: 'minecraft:gold_ingot',
            experience: 1.0
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
            id: 'minecraft:iron_ingot_from_smelting_deepslate_iron_ore',
            input: 'minecraft:deepslate_iron_ore',
            output: 'minecraft:iron_ingot',
            experience: 0.7
        },
        {
            id: 'minecraft:iron_ingot_from_smelting_iron_ore',
            input: 'minecraft:iron_ore',
            output: 'minecraft:iron_ingot',
            experience: 0.7
        },
        {
            id: 'minecraft:iron_ingot_from_smelting_raw_iron',
            input: 'minecraft:raw_iron',
            output: 'minecraft:iron_ingot',
            experience: 0.7
        }
    ];

    smeltingRecipes.forEach(recipe => {
        event.remove({ id: recipe.id });

        event.smelting(recipe.output, recipe.input)
            .xp(recipe.experience)
            .cookingTime(1200)
            .id(recipe.id);
    });
});
