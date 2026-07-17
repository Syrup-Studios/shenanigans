ServerEvents.recipes(event => {
    event.remove({ output: 'bountifulfares:flour' })
    event.remove({ output: 'farm_and_charm:flour' })

    let flour = ['bountifulfares:flour', 'farm_and_charm:flour'];
    
    flour.forEach(flour => {
        event.shapeless(
            Item.of('create:wheat_flour'),
            [
                `${flour}`
            ]
        );
    });
    event.replaceInput(
		{ input: 'bountifulfares:flour' },
		'bountifulfares:flour',
		'create:wheat_flour'
	);
});
