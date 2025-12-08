ServerEvents.recipes(event => {

    function filling(output, itemInput, fluidInput, fluidAmount) {
        event.custom({
            type: 'create:filling',
            ingredients: [
                { item: itemInput },
                { amount: fluidAmount, fluid: fluidInput }
            ],
            results: [ { item: output } ]
        })
    }

    function oxidize(mod, baseItem, variantSuffix) {
        let fluid = 'minecraft:water'
        let amount = 20250

        filling(`${mod}:exposed_${variantSuffix}`, `${mod}:${baseItem}`, fluid, amount)
        
        filling(`${mod}:weathered_${variantSuffix}`, `${mod}:exposed_${variantSuffix}`, fluid, amount)
       
        filling(`${mod}:oxidized_${variantSuffix}`, `${mod}:weathered_${variantSuffix}`, fluid, amount)
    }

    oxidize('minecraft', 'copper_block', 'copper')
    oxidize('minecraft', 'cut_copper', 'cut_copper')
    oxidize('minecraft', 'cut_copper_stairs', 'cut_copper_stairs')
    oxidize('minecraft', 'cut_copper_slab', 'cut_copper_slab')
    
    oxidize('create', 'copper_shingles', 'copper_shingles')
    oxidize('create', 'copper_shingle_slab', 'copper_shingle_slab')
    oxidize('create', 'copper_shingle_stairs', 'copper_shingle_stairs')
    oxidize('create', 'copper_tiles', 'copper_tiles')
    oxidize('create', 'copper_tile_slab', 'copper_tile_slab')
    oxidize('create', 'copper_tile_stairs', 'copper_tile_stairs')

    oxidize('friendsandfoes', 'copper_button', 'copper_button')
    oxidize('twigs', 'copper_pillar', 'copper_pillar')
    oxidize('simple_copper_pipes', 'copper_pipe', 'copper_pipe')
    oxidize('simple_copper_pipes', 'copper_fitting', 'copper_fitting')
    oxidize('clutter', 'copper_bars', 'copper_bars')
    oxidize('clutter', 'copper_chain', 'copper_chain')
    oxidize('clutter', 'large_copper_chain', 'large_copper_chain')
    oxidize('clutter', 'copper_door', 'copper_door')
    oxidize('clutter', 'copper_lantern', 'copper_lantern')
    oxidize('clutter', 'copper_soul_lantern', 'copper_soul_lantern')
    oxidize('clutter', 'copper_pressure_plate', 'copper_pressure_plate')
    oxidize('clutter', 'copper_trapdoor', 'copper_trapdoor')
    oxidize('clutter', 'reinforced_copper_glass', 'reinforced_copper_glass')
    oxidize('clutter', 'large_copper_chandelier', 'large_copper_chandelier')

})