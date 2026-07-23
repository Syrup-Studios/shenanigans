ServerEvents.recipes(event => {
    event.replaceOutput(
        { output: 'spelunkery:copper_nugget' },
        'spelunkery:copper_nugget',
        'create:copper_nugget'
    );

    event.replaceInput(
        { input: 'spelunkery:copper_nugget' },
        'spelunkery:copper_nugget',
        'create:copper_nugget'
    );
});
