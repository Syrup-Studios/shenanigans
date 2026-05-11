ServerEvents.recipes(event => {
    event.shapeless(
    	Item.of('minecraft:string', 2),
          [
   			 '#minecraft:wool'
 		 ]
    );

    event.remove({ output: 'minecraft:string', type: 'create:milling' });
    
    event.custom({
        type: 'create:milling',
        ingredients: [
            { tag: 'minecraft:wool' }
        ],
        processingTime: 200,
        results: [
            { item: 'minecraft:string', count: 2 }
        ]
    });
    
	event.custom({
        "type": "create:crushing",
        "ingredients": [
            {
                "tag": "minecraft:wool"
            }
        ],
        "processingTime": 100,
        "results": [
            {
                "item": "minecraft:string",
                "count": 4
            },
            {
                "item": "minecraft:string",
                "chance": 0.5
            }
        ]
    });
});