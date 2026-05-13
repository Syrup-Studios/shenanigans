ServerEvents.blockLootTables(event => {
  event.modifyBlock('vinery:dark_cherry_leaves', table => {
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

      // Add vinery:cherry with a 15% chance
      pool.addItem('vinery:cherry', 1) 
        .randomChance(0.15); // 15% chance

      // Add vinery:rotten_cherry with a 2% chance
      pool.addItem('vinery:rotten_cherry', 1)
        .randomChance(0.02); // 2% chance
      
    });

  });

  console.info('KubeJS: Vinery dark cherry leaves loot table modified.');
});