ServerEvents.recipes(event => {
    event.remove({ output: 'spelunkery:charcoal_lump', type: 'minecraft:smelting' });
    
    event.smoking('minecraft:leather', 'minecraft:rotten_flesh').xp(0.35);
})