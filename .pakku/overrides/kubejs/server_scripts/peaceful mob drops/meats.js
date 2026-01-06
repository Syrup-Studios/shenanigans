ServerEvents.recipes(event => {
  event.shaped('minecraft:rabbit', [
    'XXX',
    'XX ',
    'X X'
  ], {
    X: 'minecraft:carrot'
  }),
  event.shaped('minecraft:beef', [
    'XXX',
    'X  ',
    'XXX'
  ], {
    X: 'minecraft:wheat'
  }),
  event.shaped('minecraft:mutton', [
    'X X',
    'XXX',
    'X X'
  ], {
    X: 'minecraft:wheat'
  }),
  event.shaped('minecraft:chicken', [
    'XXX',
    'XX ',
    'XXX'
  ], {
    X: 'minecraft:wheat_seeds'
  }),
  event.shaped('minecraft:porkchop', [
    'ZYX',
    'ZYX',
    'ZYX'
  ], {
    X: 'minecraft:potato',
    Y: 'minecraft:carrot',
    Z: 'minecraft:beetroot'
  })
    
  function fish(output, fishInput) {
    event.shaped(output, [
      'BBB',
      'BIB',
      'BBB'  
    ], {
      B: 'minecraft:kelp',
      I: fishInput
    })
  }
    
  fish('minecraft:tropical_fish', 'minecraft:orange_dye')
  fish('minecraft:salmon', 'minecraft:red_dye')
  fish('minecraft:cod', 'minecraft:white_dye')
    
  const meats = [
    '#c:foods/raw_meats',
    'minecraft:rabbit'
  ];
    
   meats.forEach(meats => {
    event.shapeless(
      Item.of('minecraft:rotten_flesh'),           // Recipe result
      [meats]            // Inputs
    )
  });
})
