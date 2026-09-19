ServerEvents.recipes(event => {
    const colors = [
        'black',
        'blue',
        'brown',
        'cyan',
        'gray',
        'green',
        'light_blue',
        'light_gray',
        'lime',
        'magenta',
        'orange',
        'pink',
        'purple',
        'red',
        'white',
        'yellow'
    ];

    colors.forEach(color => {
        const recipeId = `supplementaries:present_${color}`;

        event.remove({ id: recipeId });

        event.shapeless(
            `supplementaries:present_${color}`,
            [
                'supplementaries:present',
                `minecraft:${color}_dye`
            ]
        ).id(recipeId);
    });
});
