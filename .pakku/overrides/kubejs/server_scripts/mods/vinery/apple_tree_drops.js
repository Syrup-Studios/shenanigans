ServerEvents.blockLootTables(event => {
  event.modifyBlock('vinery:apple_leaves', table => {
    table.addPool(pool => {
      pool.rolls = 1; 
      pool.survivesExplosion(); 

      pool.addCondition({
        condition: "minecraft:inverted",
        term: {
          condition: "minecraft:match_tool",
          predicate: {
            enchantments: [
              {
                enchantment: "minecraft:silk_touch",
                levels: { min: 1 }
              }
            ]
          }
        }
      }); 

      // Add minecraf:apple with a 15% chance
      pool.addItem('minecraft:apple', 1) 
        .randomChance(0.15); // 15% chance
      
    });

  });

  console.info('KubeJS: Vinery apple leaves loot table modified.');
});